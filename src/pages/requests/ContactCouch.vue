<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Your E-mail:</label>
            <input type="email" id="email" v-model.trim="email">
        </div>

        <div class="form-control">
            <label for="msg">Message:</label>
            <textarea rows="5" id="msg" v-model="message"></textarea>
        </div>

        <p class="errors" v-if="!formIsValid">
            Please enter a valid email or / and non-empty message
        </p>

        <div class="actions">
            <base-button type="submit">Send Message</base-button>
        </div>
    </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true
        }
    },
    computed: {
        ...mapGetters(['requests'])
    },
    methods: {
        validateForm() {
            this.formIsValid = true
            if (this.email === '' || !this.email.includes('@') || this.message === '') {
                this.formIsValid = false
                return
            }
        },
        submitForm() {
           this.validateForm() 

           if (this.formIsValid) {
            this.$store.dispatch('addRequest', {
            coachId: this.$route.params.id,
            email: this.email,
            message: this.message
           })

            this.$router.replace('/coaches')
           }
           console.log(this.requests)
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>