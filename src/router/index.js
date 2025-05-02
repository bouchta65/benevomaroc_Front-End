import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import opportunites from '../views/opportunities/show.vue';
import OpportuniteDetails from '../views/opportunities/details.vue';
import registerBenevole from '../views/Auth/register-Benevole.vue';
import registerAssociation from '../views/Auth/register-association.vue';
import auth_index from '../views/Auth/auth-index.vue';
import login from '../views/Auth/login.vue';
import profile from '../views/benevole/profile.vue';
import unauthorized from '../components/layout/unauthorized.vue';
import dashboard_association from '../views/association/dashboard.vue';
import dashboard_opportunites from '../views/association/opportunites/show.vue';
import dashboard_profile from '../views/association/profile/show.vue';
import dashboard_benevole from '../views/association/Postulation/show.vue';
import dashboard_certification from '../views/association/certifications/show.vue';
import AllcertificationBenevole from '../views/benevole/certificationodal.vue';
import NotFound from '../components/layout/notFound.vue';
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
  { path: '/dashboard/', name: 'dashboard_association', component: dashboard_association, meta: { requiresAuth: true, role: "association" }  },
  { path: '/unauthorized', name: 'unauthorized', component: unauthorized},
  { path: '/dashboard/opportunites', name: 'dashboard_opportunites', component: dashboard_opportunites, meta: { requiresAuth: true, role: "association" }},
  { path: '/dashboard/profile', name: 'dashboard_profile', component: dashboard_profile, meta: { requiresAuth: true, role: "association" }},
  { path: '/dashboard/benevoles', name: 'dashboard_benevole', component: dashboard_benevole, meta: { requiresAuth: true, role: "association" }},
  { path: '/dashboard/certifications', name: 'dashboard_certification', component: dashboard_certification, meta: { requiresAuth: true, role: "association" }},
  { path: '/certifications', name: 'AllcertificationBenevole', component: AllcertificationBenevole, meta: { requiresAuth: true, role: "benevole" }},
  
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
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
    try {
      const { data } = await authapi.authStatus(token);
      const user = data.user;
      
      if (user.role === "benevole") {
        return next('/profile');
      } else if (user.role === "association" || user.role === "admin") {
        return next('/dashboard');
      } else {
        return next('/');
      }
    } catch {
      sessionStorage.removeItem("authToken");
      return next();
    }
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