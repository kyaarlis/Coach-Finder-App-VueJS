<template>
    <section class="controls">
      <filter-coaches @change-filter="setFilters">
        
      </filter-coaches>
    </section>
    <section>
      <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a coach</base-button>
      </div>
        <ul v-if="hasCoaches">
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
      }
      }
    },
    computed: {
        ...mapGetters(['coaches', 'hasCoaches']),
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
        }
    },
    methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    }
  },
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