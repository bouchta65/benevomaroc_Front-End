import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import opportunites from '../views/opportunities/show.vue';
import OpportuniteDetails from '../views/opportunities/details.vue';
import registerBenevole from '../views/Auth/register-Benevole.vue';
import registerAssociation from '../views/Auth/register-association.vue';
import auth_index from '../views/Auth/auth-index.vue';
import login from '../views/Auth/login.vue';
import profile from '../views/benevole/profile.vue';
import authapi from "@/api/auth"; 

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/opportunites', name: 'opportunites', component: opportunites },
  { path: '/opportunites/:id', name: 'OpportuniteDetails', component: OpportuniteDetails, props: true },
  { path: '/register-benevole/', name: 'registerBenevole', component: registerBenevole, meta: { guestOnly: true } },
  { path: '/register-association/', name: 'registerAssociation', component: registerAssociation, meta: { guestOnly: true } },
  { path: '/register/', name: 'auth_index', component: auth_index, meta: { guestOnly: true } },
  { path: '/login/', name: 'login', component: login, meta: { guestOnly: true } },
  { path: '/profile/', name: 'profile', component: profile , meta: { requiresAuth: true, role: "benevole" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

function getSessionStorage(name) {
  return sessionStorage.getItem(name);
}

router.beforeEach(async (to, from, next) => {
  if (to.meta.unauthorized !== undefined) {
    to.meta.unauthorized = false;
  }

  const token = getSessionStorage("authToken");
  
  if (token && to.meta.guestOnly) {
    return next('/profile'); 
  }

  if (!to.meta.requiresAuth) return next();

  if (!token) return next("/login");

  try {
    const { data } = await authapi.authStatus(token);
    const user = data.user;

    if (to.meta.role && user.role !== to.meta.role) {
      return next('/unauthorized'); 
    }

    next();
  } catch {
    next("/login");
  }
});

export default router;