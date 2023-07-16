import { createStore } from 'vuex'

import coachModule from './modules/coaches'
import requestModule from './modules/requests'
import authModule from './modules/auth/index'

const store = createStore({
    modules: { 
        coachModule, 
        requestModule,
        authModule 
    }
})

export default store