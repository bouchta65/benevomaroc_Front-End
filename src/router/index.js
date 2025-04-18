import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue';
import opportunites from '../views/opportunities/show.vue';
import OpportuniteDetails from '../views/opportunities/details.vue';

const routes = [
  {path: '/',name: 'home',component: home},
  {path: '/opportunites',name: 'opportunites',component: opportunites},
  {path: "/opportunites/:id",name: "OpportuniteDetails",component: OpportuniteDetails, props: true,}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
