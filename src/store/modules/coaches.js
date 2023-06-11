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
    },
    actions: {
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