<template>
  <div class="container">
    <div class="row">
        <div class="col-md-6">
          <h2>{{ title }}</h2>
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
          <div class="box rounded white-bg">
            <component v-bind:is="formComponent"></component>
          </div>

          <div class="pt-1" v-if="route === 'login'">
            <a href="#" class="d-block">¿Olvidaste tu contraseña?</a>
            ¿No te has registrado a&uacute;n?
            <router-link :to="{ name: 'Register' }">Registrate</router-link>
          </div>

          <div class="pt-1" v-if="route === 'register'">
            <p>Registrando tu cuenta aceptas nuestros <a href="#">Terminos y Condiciones</a><br/>
            ¿Ya est&aacute;s registrado? <router-link :to="{ name: 'Login' }">Ingresa a tu cuenta</router-link></p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthWrapper',
  props: {
    route: String
  },
  computed: {
    title () {
      return this.route === 'register' ? 'Registrate en MyBudget.com' : 'Bienvenido a MyBudget.com'
    },
    formComponent () {
      let form = this.route === 'register' ? 'RegisterForm' : 'LoginForm'
      return () => import(`@/components/forms/${form}`)
    }
  }
}
</script>
