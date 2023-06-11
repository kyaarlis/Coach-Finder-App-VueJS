<template>
    <section>
        <base-card>
            <header>
                <h2>Requets Recieved</h2>
            </header>
    </base-card>
    <base-card>
        <ul v-if="hasRequests">
            <request-item
            v-for="req in requests"
            :key="req.id"
            :message="req.userMessage"
            :email="req.userEmail"
            ></request-item>
        </ul>  

        <h3 v-else>No requests yet..</h3>
    </base-card>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

import RequestItem from '../../components/requests/RequestItem.vue'

export default {
    components: { RequestItem },
    computed: {
        ...mapGetters(['requests', 'hasRequests'])
    },
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>