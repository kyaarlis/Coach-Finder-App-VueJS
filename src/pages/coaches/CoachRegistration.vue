<template>
    <section>
      <coach-form></coach-form>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachForm from '../../components/coaches/CoachForm.vue'

export default {
  components: { CoachForm },
    
    computed: {
        ...mapGetters(['coaches']),
    },
    methods: {
      
    }
}
</script>

