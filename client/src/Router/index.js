import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Notfound from '../pages/Notfound.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Profile from '../pages/Profile.vue';
import { auth } from '../main.js';
import Edit from '../Components/EditProfile.vue'

const routes = [
   { path: '/', name: 'home-page', component: Home },
   { path: '/profile/:_id', name: 'profile-page', component: Profile },
   { path: '/login', name: 'login-page', component: Profile },
   { path: '/register', name: 'register-page', component: Register },
   { path: '/:pathMatch(.*)*', name: 'notfound-page', component: Notfound },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

// Private router
router.beforeEach(async (to, from) => {
   console.log(auth.token);
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
