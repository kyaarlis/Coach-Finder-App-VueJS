<template>
    <header>
      <nav>
        <h1><router-link to="/">Coach Finder</router-link></h1>
        <ul>
          <li>
            <router-link to="/coaches">Coaches</router-link>
          </li>
          <li v-if="userAuthStatus">
            <router-link to="/requests">
              Requests
              <span class="requestAmount" v-if="checkCurrRoute">{{ requestsCount }}</span>
            </router-link>
          </li>
          <li v-else>
            <router-link to="/auth">Login</router-link>
          </li>
          <li v-if="userAuthStatus">
            <base-button @click="logout">Logout</base-button>
          </li>
        </ul>
      </nav>   
    </header>
</template> 

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['token', 'userAuthStatus', 'requests', 'hasRequests', 'userAuthStatus']),
    requestsCount() {
      if (!this.userAuthStatus) {
        return 0
      }
      return this.requests.length
    },
    checkCurrRoute() {
      if (this.$route.path === '/requests') {
        return false
      }
      return true
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('/')
    },
  },
  created() { 
    console.log('Requests length: ' + this.requests.length)
  
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

.requestAmount {
  border: 1.5px solid;
  border-radius: 10%;
  padding: 2px;
  /* background-color: white; */
}
</style>