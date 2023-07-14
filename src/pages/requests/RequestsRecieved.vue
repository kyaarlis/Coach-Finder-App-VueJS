<template>
        <base-dialog 
        :show="!!error" 
        title="An error occured!"
        @close="close"
        >
            <p>{{ error }}</p>
        </base-dialog>
    <section>
        <base-card>
            <header>
                <h2>Requets Recieved</h2>
            </header>
    </base-card>
    <base-card>
        <base-spinner v-if="loading"></base-spinner>
        <ul v-else-if="hasRequests && !loading">
            <request-item
            v-for="req in requests"
            :key="req.id"
            :message="req.message"
            :email="req.email"
            ></request-item>
        </ul>  

        <h3 v-else>No requests yet..</h3>
    </base-card>
    </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'

export default {
    components: { RequestItem },
    data() {
        return {
            loading: false,
            error: null,
       
        }
    },
    computed: {
        requests() {
            return this.$store.getters['requests']
        },
        hasRequests() {
            return this.$store.getters['hasRequests']
        }
    },
    methods: {
        async loadRequests() {
            this.loading = true
            try {
                await this.$store.dispatch('getRequests')
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
        this.loadRequests()
        console.log('Requests array: ', this.requests)
        console.log('Has requests: ', this.hasRequests)
    }
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