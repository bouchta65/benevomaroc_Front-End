import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import opportunites from '../views/opportunities/show.vue';
import OpportuniteDetails from '../views/opportunities/details.vue';
import registerBenevole from '../views/Auth/register-Benevole.vue';
import registerAssociation from '../views/Auth/register-association.vue';
import auth_index from '../views/Auth/auth-index.vue';
import login from '../views/Auth/login.vue';
import unauthorized from "../views/Auth/unauthorized.vue";

import authapi from "@/api/auth"; 

const routes = [
  {path: '/',name: 'home',component: home},
  {path: '/opportunites',name: 'opportunites',component: opportunites , meta: { requiresAuth: true, role: "benevole" } },
  {path: "/opportunites/:id",name: "OpportuniteDetails",component: OpportuniteDetails, props: true,},
  {path: "/benevole/",name: "registerBenevole",component: registerBenevole},
  {path: "/association/",name: "registerAssociation",component: registerAssociation},
  {path: "/inscription/",name: "auth_index",component: auth_index},
  {path: "/login/",name: "login",component: login},
  {path: "/unauthorized/",name: "unauthorized",component: unauthorized},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts[1]?.split(';')[0] || null;
}

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth) return next();

  const token = getCookie("authToken");
  if (!token) return next("/login");

  try {
    const { data } = await authapi.authStatus(token);
    const user = data.user;

    if (to.meta.role && user.role !== to.meta.role) {
      return next("/unauthorized");
    }

    next();
  } catch {
    next("/login");
  }
});



export default router;