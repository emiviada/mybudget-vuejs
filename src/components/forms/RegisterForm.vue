<template>
  <form>
    <div class="form-group">
      <email-field />
    </div>
    <div class="form-group">
      <password-field />
    </div>
    <div class="form-group">
      <input type="password" class="form-control form-control-sm" id="confirm-password" placeholder="Confirmar Contraseña">
    </div>
    <button type="submit" class="btn btn-success btn-sm w-100">Registrarse</button>
  </form>
</template>

<script>
import EmailField from '@/components/forms/EmailField'
import PasswordField from '@/components/forms/PasswordField'

export default {
  name: 'RegisterForm',
  components: { EmailField, PasswordField }
}
</script>
