const requestModule = {
    state() {
        return {
            requests: []
        }
    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload)
        },
        getRequests(state, payload) {
            state.requests = payload
        }
    },
    actions: {
       async addRequest(context, payload) {
            const newRequest = {
                id: new Date().toISOString,
                coachId: payload.coachId,
                userEmail: payload.email,
                userMessage: payload.message
            }
        
              const response = await fetch(`https://coachfinder-ff141-default-rtdb.europe-west1.firebasedatabase.app/requests/${newRequest.coachId}.json`, {
                method: 'PUT',
                body: JSON.stringify(newRequest),
              })
        
              //const responseData = await response.json()
        
              if(!response.ok) {
                // err..
              }

            context.commit('addRequest', newRequest)
        },
        async getRequests(context) {
            const response = await fetch(
                `https://coachfinder-ff141-default-rtdb.europe-west1.firebasedatabase.app/requests.json`
                )   
                .catch((error) => {
                  console.log(error)
                })
                const resData = await response.json()
      
                if (!response.ok) {
                  const error = new Error(resData.message || 'Failed to fetch!')
                  throw error
                }
      
                const requests = []
      
                for (const key in resData) {
                  const request = {
                    id: key,
                    message: resData[key].message,  
                    email: resData[key].email,
                  }
                  requests.push(request)
                }
              context.commit('getCoaches', requests)
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