<template>
  <div>
    <input type="password" v-model="password" class="form-control form-control-sm" id="password" name="password" placeholder="Contraseña" v-validate="'required|min:6'" @blur="onBlur">
    <span v-show="errors.has('password')" class="error">{{ errors.first('password') }}</span>
  </div>
</template>

<script>
export default {
  name: 'PasswordField',
  inject: {
    $validator: '$validator'
  },
  data () {
    return {
      password: ''
    }
  },
  methods: {
    onBlur () {
      this.$emit('onBlurPassword', this.password)
    }
  }
}
</script>
