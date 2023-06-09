<template>
    <base-card>
        <h2>Register as a coach</h2>
    </base-card>

    <base-card>
        <form @submit.prevent="createNewCoach">
            <div class="form-control">
                <label for="firstName">Name:</label>
                <input type="text" id="firstName" v-model="formData.firstName">
            </div>

            <div class="form-control">
                <label for="lastName">Surname:</label>
                <input type="text" id="lastName" v-model="formData.lastName">
            </div>

            <div class="form-control">
                <label for="areas">Your areas of specialty:</label>
                <input type="text" id="areas" v-model="formData.areas">
            </div>

            <div class="form-control">
                <label for="description">Tell us a bit about your expertiese:</label>
                <input type="textarea" id="description" v-model="formData.description">
            </div>

            <div class="form-control">
                <label for="hourlyRate">Your hourly rate ($):</label>
                <input type="number" id="hourlyRate" v-model="formData.hourlyRate">
            </div>

            <base-button type="submit">Register</base-button>
        </form>
    </base-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            formData: {
                id: 'c3',
                firstName: '',
                lastName: '',
                areas: [],
                description: '',
                hourlyRate: null
            }
        }
    },
    computed: {
        ...mapGetters(['coaches']),
    },
    methods: {
        createNewCoach() {
            this.coaches.push(this.formData)
            console.log(this.coaches)
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h2 {
  margin: 0.5rem 0;
  font-size: 1rem;
  text-align: center;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>