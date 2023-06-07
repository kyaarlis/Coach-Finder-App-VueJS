<template>
    <li>
        <div>
            <h3>{{ firstName + ' ' + lastName }}</h3>
         
            <div>
              <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            </div>
        </div>
        <div>
            <h3>${{ hourlyRate }}/hour</h3>
        </div>
        <div class="actions">
          <base-button link mode="outline" :to="toCoachDetails">See coach details</base-button>
   
          <base-button link :to="toCoachContact">Contact coach</base-button>
      </div>
    </li>
</template>

<script>
export default {
    props: [ 'id', 'firstName', 'lastName', 'areas', 'hourlyRate' ],
    computed: {
      toCoachContact() {
            return this.$route.path + '/' + this.id + '/contact'
    },
    toCoachDetails() {
            return this.$route.path + '/' + this.id
    }
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