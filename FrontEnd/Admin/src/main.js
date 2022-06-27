import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import 'flowbite';
import router from './router/routes';

createApp(App).use(router).mount('#app')