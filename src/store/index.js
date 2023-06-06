import { createStore } from 'vuex'

import coachModule from './modules/coaches'
import requestModule from './modules/requests'

const store = createStore({
    modules: { coachModule, requestModule },
    state() {
        return {

        }
    },
    mutations: {},
    actions: {},
    getters: {}
})

export default store