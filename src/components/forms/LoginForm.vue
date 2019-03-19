<template>
  <form @submit.prevent="onSignIn" novalidate>
    <div class="form-group">
      <email-field v-on:onBlurEmail="onBlurEmail" />
    </div>
    <div class="form-group">
      <password-field v-on:onBlurPassword="onBlurPassword" />
    </div>
    <button type="submit" :disabled="errors.any() || submitting" class="btn btn-success btn-sm w-100">Login</button>
  </form>
</template>

<script>
import { ErrorsDictionary } from '@/mixins/ErrorsDictionary'
import EmailField from '@/components/forms/EmailField'
import PasswordField from '@/components/forms/PasswordField'

export default {
  name: 'LoginForm',
  components: { EmailField, PasswordField },
  mixins: [ ErrorsDictionary ],
  data () {
    return {
      email: '',
      password: '',
      submitting: false
    }
  },
  methods: {
    onBlurEmail (email) {
      this.email = email
    },
    onBlurPassword (password) {
      this.password = password
    },
    onSignIn () {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          // let loader = this.$loading.show()
          this.submitting = true
          const { email, password } = this
          this.$store.dispatch('SIGN_IN', { email, password })
            .then(response => {
              if (response && response.status !== 200) {
                this.$validator.errors.add('password', response.data.error)
              } else {
                this.$router.push({ name: 'Dashboard' })
              }
            }).finally(() => {
              // loader.hide()
              this.submitting = false
            })
        }
      })
    }
  },
  mounted () {
    this.$validator.localize('en', this.errorsDictionary)
  }
}
</script>
