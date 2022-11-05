import { createApp } from 'vue';
import App from './App.vue';
import Router from './Router';
import { createPinia } from 'pinia';
import './index.css';
import { AlertStore } from './stores/AlertStore.js';
import { AuthStore } from './stores/AuthStore.js';
import { ProfileStore } from './stores/ProfileStore.js';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Router);

// Handle store
export const alert = AlertStore();
export const auth = AuthStore();
export const profile = ProfileStore();

app.mount('#app');
