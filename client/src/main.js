import { createApp } from 'vue';
import App from './App.vue';
import Router from './Router';
import { createPinia } from 'pinia';
import './index.css';
import { AlertStore } from './stores/AlertStore.js';
import { AuthStore } from './stores/AuthStore.js';
import { ProfileStore } from './stores/ProfileStore.js';
import { HomePostStore } from './stores/HomePostStore.js';
import { SuggestionStore } from './stores/SuggestionStore.js';
import vClickOutside from 'click-outside-vue3';
import 'animate.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Router);
app.use(vClickOutside);

// Handle store
export const alert = AlertStore();
export const auth = AuthStore();
export const homePost = HomePostStore();
export const profile = ProfileStore();
export const userSuggestion = SuggestionStore();

app.mount('#app');
