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
              selectedCoaches: [],
              frontend: true,
              backend: false,
              career: true,
        }
    },
    mutations: {
      filterCoaches(state) {
        for (let i = 0; i < state.coaches.length; i++) {
          if (state.frontend && state.coaches[i].areas[i] === 'frontend') { 
            state.selectedCoaches.push(state.coaches[i]) 

          } else if (state.backend && state.coaches[i].areas[i] === 'backend') { 
            state.selectedCoaches.push(state.coaches[i]) 

          } else if (state.career && state.coaches[i].areas[i] === 'career') { 
            state.selectedCoaches.push(state.coaches[i]) 
          } 
        }
      },
    },
    actions: {
     filterCoaches(context) {
      context.commit('filterCoaches')
     }
    },
    getters: {
      coaches(state) {
        return state.coaches
      },
      hasCoaches(state) {
        return state.coaches && state.coaches.length > 0 
      },
      frontend(state) {
        return state.frontend
      },
      backend(state) {
        return state.backend
      },
      career(state) {
        return state.career
      },
      selectedCoaches(state) {
        return state.selectedCoaches
      }
    }
}

export default coachModule