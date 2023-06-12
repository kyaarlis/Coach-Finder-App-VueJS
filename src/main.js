import { createApp } from 'vue';

import App from './App.vue'
import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton'
import BaseBadge from './components/UI/BaseBadge'
import BaseSpinner from './components/UI/BaseSpinner'
import store from './store';
import router from './router';

const app = createApp(App)

app.use(store)

app.use(router)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)

app.mount('#app');
