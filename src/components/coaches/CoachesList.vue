<template>
    <ul>
        <li v-for="coach in coaches"
        :key="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :areas="coach.areas"
        :description="coach.description"
        :hourlyRate="coach.hourlyRate"
        ></li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: [ 'id', 'firstName', 'lastName', 'areas', 'description', 'hourlyRate' ],
    computed: {
        ...mapGetters(['coaches'])
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