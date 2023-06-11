<template>
    <base-card> 
          <h2>Find Your coach</h2>
          <span class="filter-option">
            <label for="frontend">Front-End</label>
            <input id="frontend" type="checkbox" @change="setFilter" checked>
          </span>

          <span class="filter-option">
            <label for="backend">Back-End</label>
            <input id="backend" type="checkbox" @change="setFilter" checked>
          </span>

          <span class="filter-option">
            <label for="career">Career</label>
            <input id="career" type="checkbox" @change="setFilter" checked>
          </span>   
    </base-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  emits: ['change-filter'],
  data() {
    return {
      ...mapGetters(['filters'])
    }
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id
      const isActive = event.target.checked
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      }
      this.filters = updatedFilters
      this.$emit('change-filter', updatedFilters)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>