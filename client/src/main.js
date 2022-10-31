import { createApp } from 'vue';
import App from './App.vue';
import Router from './Router';
import './index.css'

const app = createApp(App);
app.use(Router);
app.mount('#app');