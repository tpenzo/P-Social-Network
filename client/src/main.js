import { createApp } from 'vue';
import App from './App.vue';
import Router from './Router';
import { createPinia } from 'pinia';
import './index.css';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Router);

app.mount('#app');
