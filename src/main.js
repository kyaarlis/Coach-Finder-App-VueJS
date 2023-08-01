import { createApp, defineAsyncComponent } from 'vue';

import App from './App.vue'
import BaseCard from './components/UI/BaseCard'
import BaseButton from './components/UI/BaseButton'
import BaseBadge from './components/UI/BaseBadge'
import BaseSpinner from './components/UI/BaseSpinner'
import store from './store';
import router from './router';

// defineAsyncComponent downloads and loads a components only when it is needed
// so it helps with performance
const BaseDialog = defineAsyncComponent(() => import('./components/UI/BaseDialog'))

const app = createApp(App)

app.use(store)

app.use(router)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)

app.mount('#app');
