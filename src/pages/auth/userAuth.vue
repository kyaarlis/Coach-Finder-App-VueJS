<template>
<div>
    <base-spinner v-if="loading"></base-spinner>
    <base-dialog 
        :show="!!error" 
        title="An error occured!"
        @close="close"
        >
            <p>{{ error }}</p>
        </base-dialog>
    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">E-Mail</label>
                <input type="email" autocomplete="username" id="email" v-model.trim="email">
            </div>

            <div class="form-control">
                <label for="passwd">Password</label>
                <input type="password" autocomplete="current-password" id="passwd" v-model.trim="password">
            </div>

            <p v-if="!formIsValid">Please enter <b>E-Mail</b> or the password must be at least 6 characters long!</p>
            <base-button>{{ submitBtnCaption }}</base-button>
            <base-button type="button" mode="flat" @click="swithAuthMode">{{ switchModeBtnCaption }} instead</base-button>
        </form>
    </base-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            loading: false,
            error: null,
        }
    },
    computed: {
        submitBtnCaption() {
            if (this.mode === 'login') {
                return 'Login'
            } else {
                return 'Sign-Up'
            }
        },
        switchModeBtnCaption() {
            if (this.mode === 'login') {
                return 'Sign-Up'
            } else {
                return 'Login'
            }
        }
    },
    methods: {
        async submitForm() {
            this.formIsValid = true
            this.loading = true

            if (this.email == '' || this.password.length < 6) {
                this.formIsValid = false
                return
                }

            const actionPayload = {
                email: this.email,
                password: this.password
            }

            try {
                if (this.mode === 'login') {
                await this.$store.dispatch('login', actionPayload)
                } else {
                   await this.$store.dispatch('signup', actionPayload)
                }

                const redirectUrl = '/' + (this.$route.query.redirect || 'coaches')
                this.$router.replace(redirectUrl)
                } catch (error) {
                    this.error = error.message || 'Some things went south..'
                }
            this.loading = false
        },
        swithAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup'
            } else {
                this.mode = 'login'
            }
        },
        close() {
            this.error = null
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
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
</style>