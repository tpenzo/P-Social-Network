import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Notfound from '../pages/Notfound.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Profile from '../pages/Profile.vue';
import { AuthStore } from '../stores/AuthStore';

const routes = [
   { path: '/', name: 'home-page', component: Home },
   { path: '/profile', name: 'profile-page', component: Profile },
   { path: '/login', name: 'login-page', component: Login },
   { path: '/register', name: 'register-page', component: Register },
   { path: '/:pathMatch(.*)*', name: 'notfound-page', component: Notfound },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

// Private router
router.beforeEach(async (to, from) => {
   const auth = AuthStore();
   if (
      !auth.token &&
      to.name !== 'login-page' &&
      to.name !== 'register-page' &&
      to.name !== 'notfound-page'
   ) {
      return { name: 'login-page' };
   }
});

export default router;
