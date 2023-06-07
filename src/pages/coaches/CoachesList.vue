<template>
    <section class="controls">
        <h2>Filter</h2>
    </section>
    <section>
      <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a coach</base-button>
      </div>
        <ul v-if="hasCoaches">
            <coach-item v-for="coach in coaches"
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

export default {
    props: ['coachId'],
    components: { CoachItem },
    computed: {
        ...mapGetters(['coaches', 'hasCoaches'])
    },
    methods: {
    
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