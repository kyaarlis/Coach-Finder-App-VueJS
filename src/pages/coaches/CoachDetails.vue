<template>
    <section>
        <ul>
            <coach-detail-item v-for="coach in coaches"
            :key="coach.id"
            :id="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :description="coach.description"
            :hourlyRate="coach.hourlyRate">
            </coach-detail-item>
        </ul>
    </section>
    <router-view></router-view>
    <router-link to="/coaches/c1/contact">Contact</router-link>
</template>

<script>
import CoachDetailItem from '../../components/coaches/CoachDetailItem.vue'; 

import { mapGetters } from 'vuex'

export default {
    props: ['coachId'],
   components: { CoachDetailItem },
   computed: {
        ...mapGetters(['coaches']),
    },
  methods: {
    loadCoach() {
      this.$store.dispatch('loadCoachDetails', {coachId: this.coachId})
    },
  },
  created() {
    this.loadCoach(this.coachId)
  },
}
</script>

<style scoped>

</style>