const coachModule = {
    state() {
        return {
            coaches: [
                {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'Schwarzmüller',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Julie',
                  lastName: 'Jones',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
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

      const response = await fetch(`https://coachfinder-ff141-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
        method: 'PUT',
        body: JSON.stringify(coachData),
      })

      //const responseData = await response.json()

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
          `https://coachfinder-ff141-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
          )
          const resData = await response.json()

          if (!response.ok) {
            // err..
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