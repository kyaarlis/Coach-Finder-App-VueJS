import { createApp } from 'vue';

import App from './App.vue'
import BaseCard from './components/UI/BaseCard'
import store from './store';
import router from './router';

const app = createApp(App)

app.use(store)

app.use(router)

app.component(BaseCard)

app.mount('#app');
