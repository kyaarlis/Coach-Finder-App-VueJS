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
              coachId: payload.coachId, 
                userEmail: payload.email,
                userMessage: payload.message
            }
        
              const response = await fetch(`https://coachfinderdb-default-rtdb.europe-west1.firebasedatabase.app/requests/${newRequest.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest),
              })
        
              const responseData = await response.json()

              if(!response.ok) {
                const error = new Error(responseData.message || 'Failed to send request!')
                throw error
              }

              newRequest.id  = responseData.name
              newRequest.coachId = payload.coachId
        
            context.commit('addRequest', newRequest)
        },
        async getRequests(context) {
          const coachId = context.rootGetters.userId

          const token = context.rootGetters.token

            const response = await fetch(
              `https://coachfinderdb-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=` + token
                )   
                .catch((error) => {
                  console.log(error)
                })
                const resData = await response.json()
      
                // error handling
                if (!response.ok) {
                  const error = new Error(resData.message || 'Failed to fetch!')
                  throw error
                }
      
                const requests = []
      
                for (const key in resData) {
                  const request = {
                    id: key,
                    coachId: coachId,
                    message: resData[key].userMessage,  
                    email: resData[key].userEmail,
                  }
                  requests.push(request)
                } 
               
              context.commit('getRequests', requests)   
        }
    },
    getters: {
        // requests(state, _, _2, rootGetters) {
        //     const coachId = rootGetters.userId
        //     return state.requests.filter(req => req.coachId === coachId)
        // },
        requests(state) {
          return state.requests
      },
        hasRequests(state) {
            return state.requests && state.requests.length > 0 
        }
    }
}

export default requestModule