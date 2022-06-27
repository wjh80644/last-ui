import { createApp } from 'vue'
import App from './App.vue'
import UI from 'last-ui';
import '../node_modules/last-ui/dist/style.css'
import router from '@/router';
const app = createApp(App);
app.use(UI);
app.use(router);
app.mount('#app');
