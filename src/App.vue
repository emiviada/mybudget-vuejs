<template>
  <div id="app">

    <component :is="layout" />

    <footer class="container">
      <div class="row">
        <div class="col-6">MyBudget.com</div>
        <div class="col-6 text-right">&copy;{{ currentYear }}</div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      isAuth: 'isAuthenticated'
    }),
    layout () {
      const layout = this.isAuth ? 'Layout' : 'AuthLayout'
      return () => import(`@/components/common/${layout}`)
    },
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
  // variable overrides
  @import 'assets/styles/override.scss';
  // Bootstrap and its default variables
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  // Styles
  @import 'assets/styles/styles.scss';
</style>
