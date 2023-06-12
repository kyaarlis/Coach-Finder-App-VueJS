const requestModule = {
    state() {
        return {
            requests: []
        }
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload)
        }
    },
    actions: {
        addRequest(context, payload) {
            const newRequest = {
                id: new Date().toISOString,
                coachId: payload.coachId,
                userEmail: payload.email,
                userMessage: payload.message
            }
            context.commit('addRequest', newRequest)
        }
    },
    getters: {
        requests(state, _, _2, rootGetters) {
            const coachId = rootGetters.userId
            return state.requests.filter(req => req.coachId === coachId)
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0 
        }
    }
}

export default requestModule