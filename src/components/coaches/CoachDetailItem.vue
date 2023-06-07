<template>
    <li>
        <div>
            <h3>{{ firstName + ' ' + lastName }}</h3>
         
            <div>
              <span v-for="area in areas" :key="area">{{ area }}</span>
            </div>
      
        <h4>{{ description }}</h4>
        </div>
        <div>
            <h3>${{ hourlyRate }}/hour</h3>
        </div>
        <!-- <button>
            <router-link>Contact Coach</router-link>
        </button> -->
        <!-- <base-button></base-button> -->
    </li>
</template>

<script>
export default {
    props: [ 'id', 'firstName', 'lastName', 'areas', 'description', 'hourlyRate' ],
    computed: {
       
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>