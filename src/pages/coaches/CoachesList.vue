<template>
<div>
  <base-dialog 
  :show="!!error" 
  title="An error occured!"
  @close="close"
  >
    <p>{{ error }}</p>
</base-dialog>
    <section class="controls">
      <filter-coaches @change-filter="setFilters">
        
      </filter-coaches>
    </section>
    <section>
      <base-card>
      <div class="controls">
        <base-button mode="outline" @click="setCoaches(true)">Refresh</base-button>
        <base-button link to="/register" v-if="!isCoach && !loading && userAuthStatus">Register as a coach</base-button>
        <base-button link to="/auth?redirect=register" v-if="!userAuthStatus">Login to Register as Coach</base-button>
      </div>
      <base-spinner v-if="loading"></base-spinner>
        <ul v-else-if="hasCoaches">
            <coach-item v-for="coach in filteredCoaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :description="coach.description"
            :hourlyRate="coach.hourlyRate">
            </coach-item>
        </ul>
        <h3 v-else>No coaches are available at the moment..</h3>
      </base-card>
    </section>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import CoachItem from '../../components/coaches/CoachItem.vue'; 
import FilterCoaches from '../../components/coaches/FilterCoaches.vue'

export default {
    props: ['coachId'],
    components: { CoachItem, FilterCoaches },
    data() {
      return {
        activeFilters: {
              frontend: true,
              backend: true,
              career: true,
            },
            loading: false,
            error: null,
            loggedIn: false
      }
    },
    computed: {
        ...mapGetters(['coaches', 'userAuthStatus', 'userId']),
        hasCoaches() {
          return !this.loading && this.$store.getters['hasCoaches']
        },
        filteredCoaches() {
          return this.coaches.filter(coach => {
            if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
              return true
            }
            if (this.activeFilters.backend && coach.areas.includes('backend')) {
              return true
            }
            if (this.activeFilters.career && coach.areas.includes('career')) {
              return true
            }
          return false
          })
        },
        isCoach() {
        return this.coaches.some(coach => coach.id === this.userId)
      }
    },
    methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async setCoaches(refresh = false) {
        this.loading = true
        try {
          await this.$store.dispatch('getCoaches', {forceRefresh: refresh})
        } catch (error) {
          this.error = error.message || 'Some things went south..'
        }
      
        this.loading = false
    },
    close() {
      this.error = null
    }
  },
  created() {
    this.setCoaches()
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>