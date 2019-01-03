<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6">
          <h2>Bienvenido a MyBudget.com</h2>
          <p>
            Con esta aplicación podrás llevar un seguimiento de tus ingresos y gastos.
          </p>
          <p>
            Con tu usuario podrás ingresar tus gastos, consumos e ingresos para llevar un seguimiento de tus cuentas.
          </p>
          <p>
            Utiliza las herramientas proporcionadas por la aplicación para predecir tus gastos y/o ahorros a futuro.
          </p>
        </div>

        <div class="col-md-6">
          <div class="box white-bg">
            <login-form/>
          </div>
          <div class="pt-1">
            <a href="#" class="d-block">¿Olvidaste tu contraseña?</a>
            ¿No te has registrado a&uacute;n?
            <a href="#">Registrate</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm'

export default {
  name: 'Login',
  components: { LoginForm }
}
</script>
