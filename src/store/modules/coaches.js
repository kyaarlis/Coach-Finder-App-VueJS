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
              selectedCoaches: null
        }
    },
    mutations: {
      loadCoachDetails(state, payload) {
        const coachId = payload
        const selectedCoach = state.coaches.find(coach => coach.id === coachId)
        state.selectedCoaches = selectedCoach
      }
    },
    actions: {
      loadCoachDetails(context, payload) {
        context.commit('loadCoachDetails', payload)
      }
    },
    getters: {
      coaches(state) {
        return state.coaches
      },
      hasCoaches(state) {
        return state.coaches && state.coaches.length > 0 
      },
      selectedCoaches(state) {
        return state.selectedCoaches
      }
    }
}

export default coachModule