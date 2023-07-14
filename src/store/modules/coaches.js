const coachModule = {
    state() {
        return {
            coaches: [
              ],
              filters: {
                frontend: true,
                backend: true,
                career: true,
            },
            form: {
              firstName: '',
              lastName: '',
              areas: [],
              description: '',
              hourlyRate: null
            }
      }
    },
    mutations: {
      registerCoach(state, payload) {
        state.coaches.push(payload)
      },
      getCoaches(state, payload) {
        state.coaches = payload
      }
    },
    actions: {
      async registerCoach(context, data) {
        const userId = context.rootGetters.userId
        const coachData = {
            firstName: data.firstName,
            lastName: data.lastName,
            description: data.description,
            hourlyRate: data.hourlyRate,
            areas: data.areas
        }

      const response = await fetch(`https://coachfinderdb-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
        method: 'PUT',
        body: JSON.stringify(coachData),
      })

      if(!response.ok) {
        // err..
      }

      context.commit('registerCoach', {
        ...coachData,
        id: userId
      })
      },
      async getCoaches(context) {
        const response = await fetch(
          `https://coachfinderdb-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
          )   
          .catch((error) => {
            console.log(error)
          })
          const resData = await response.json()

          if (!response.ok) {
            const error = new Error(resData.message || 'Failed to fetch!')
            throw error
          }

          const coaches = []

          for (const key in resData) {
            const coach = {
              id: key,
              firstName: resData[key].firstName,  
              lastName: resData[key].lastName,
              description: resData[key].description,
              hourlyRate: resData[key].hourlyRate,
              areas: resData[key].areas
            }
            coaches.push(coach)
          }
        context.commit('getCoaches', coaches)
      }
    },
    getters: {
      coaches(state) {
        return state.coaches
      },
      hasCoaches(state) {
        return state.coaches && state.coaches.length > 0 
      },
      filters(state) {
        return state.filters
      },
      form(state) {
        return state.form
      },
      isCoach(state, _, rootGetters) {
        const userId = rootGetters.userId
        return state.coaches.some(coach => coach.id === userId)
      }
    }
}

export default coachModule