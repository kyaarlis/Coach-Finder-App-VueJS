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
        requests(state) {
            return state.requests
        },
        hasRequests(state) {
            return state.requests && state.requests.length > 0 
        }
    }
}

export default requestModule