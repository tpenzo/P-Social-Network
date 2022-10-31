import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Notfound from '../pages/Notfound.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Profile from '../pages/Profile.vue';

const routes = [
   { path: '/home', name: 'home-page', component: Home },
   { path: '/profile', name: 'profile-page', component: Profile },
   { path: '/login', name: 'login-page', component: Login },
   { path: '/register', name: 'register-page', component: Register },
   { path: '/:pathMatch(.*)*', name: 'notfound-page', component: Notfound },
];

export default createRouter({
   history: createWebHashHistory(),
   routes,
});
