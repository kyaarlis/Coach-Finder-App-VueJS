import { createStore } from 'vuex'

import coachModule from './modules/coaches'
import requestModule from './modules/requests'

const store = createStore({
    modules: { coachModule, requestModule },
    state() {
        return {
            userId: 'c4'
        }
    },
    mutations: {},
    actions: {},
    getters: {
        userId(state) {
            return state.userId
        }
    }
})

export default store