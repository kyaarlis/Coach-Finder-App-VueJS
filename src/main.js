import { createApp } from 'vue';

import App from './App.vue'
import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton'
import BaseBadge from './components/UI/BaseBadge'
import store from './store';
import router from './router';

const app = createApp(App)

app.use(store)

app.use(router)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)

app.mount('#app');
