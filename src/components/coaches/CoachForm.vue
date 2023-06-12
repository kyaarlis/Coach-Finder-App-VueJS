<template>
    <base-card>
        <h2>Register as a coach</h2>
    </base-card>

    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control" :class="{invalid: !firstName.isValid}">
                <label for="firstName">Name:</label>
                <input 
                type="text" 
                id="firstName" 
                v-model.trim="firstName.val" 
                @blur="clearValidity('firstName')"/>
                <p v-if="!firstName.isValid">First name must <b>not</b> be empty</p>
            </div>

            <div class="form-control" :class="{invalid: !lastName.isValid}">
                <label for="lastName">Surname:</label>
                <input 
                type="text" 
                id="lastName" 
                v-model.trim="lastName.val" 
                @blur="clearValidity('lastName')">
                <p v-if="!lastName.isValid">Last name must <b>not</b> be empty</p>
            </div>

            <div class="form-control" :class="{invalid: !description.isValid}">
                <label for="description">Tell us a bit about your expertiese:</label>
                <textarea 
                type="textarea" 
                rows="5" id="description" 
                v-model="description.val" 
                @blur="clearValidity('description')"></textarea>
                <p v-if="!description.isValid">Description name must <b>not</b> be empty</p>
            </div>

            <div class="form-control" :class="{invalid: !hourlyRate.isValid}">
                <label for="hourlyRate">Your hourly rate ($):</label>
                <input 
                type="number" 
                id="hourlyRate" 
                v-model.number="hourlyRate.val" 
                @blur="clearValidity('hourlyRate')">
                <p v-if="!hourlyRate.isValid">Hourly rate name must be greater than 0!</p>
            </div>

            <div class="form-control" :class="{invalid: !areas.isValid}">
                <h3>Areas of expertiese</h3>
                <div >
                    <label for="frontend">Front-End Development</label>
                    <input 
                    type="checkbox" 
                    value="frontend" 
                    id="frontend" 
                    v-model="areas.val" 
                    @blur="clearValidity('areas')">
                </div>

                <div>
                    <label for="backend">Back-End Development</label>
                    <input 
                    type="checkbox" 
                    value="backend" 
                    id="backend" 
                    v-model="areas.val" 
                    @blur="clearValidity('areas')">
                </div>

                <div>
                    <label for="career">Career Advisory</label>
                    <input 
                    type="checkbox" 
                    value="career" 
                    id="career" 
                    v-model="areas.val" 
                    @blur="clearValidity('areas')">
                </div>
                <p v-if="!areas.isValid">At least one expertiesi must be selected</p>
            </div>

            <p v-if="!formIsValid">Please fix the form errors above and submit again!</p>

            <base-button type="submit">
               Register
            </base-button>
        </form>
    </base-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
              firstName: {
                val: '',
                isValid: true
              },
              lastName: {
                val: '',
                isValid: true
              },
              areas: {
                val: [],
                isValid: true
              },
              description: {
                val: '',
                isValid: true
              },
              hourlyRate: {
                val: null,
                isValid: true
              },
              formIsValid: true
        }
    },
     computed: {
        ...mapGetters(['coaches']),
    },
    methods: {
        clearValidity(input) {
          this[input].isValid = true
        },
        validateForm() {
          this.formIsValid = true
          if (this.firstName.val === '') {
            this.firstName.isValid = false
            this.formIsValid = false
          }
          if (this.lastName.val === '') {
            this.lastName.isValid = false
            this.formIsValid = false
          }
          if (this.description.val === '') {
            this.description.isValid = false
            this.formIsValid = false
          }
          if (!this.hourlyRate.val || this.hourlyRate.val <= 0) {
            this.hourlyRate.isValid = false
            this.formIsValid = false
          }    
          if (this.areas.val.length === 0) {
            this.areas.isValid = false
            this.formIsValid = false
          }
        },
         submitForm() {
          this.validateForm()
          if (this.formIsValid) {
              const formData = {
                id: 'c3', 
                firstName: this.firstName.val,
                lastName: this.lastName.val,
                description: this.description.val,
                hourlyRate: this.hourlyRate.val,
                areas: this.areas.val
            }

            this.$store.dispatch('registerCoach', formData)

            this.$router.replace('/coaches') 
            } else {
              return
            }
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