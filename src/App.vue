<template>
  <div id="app">
    <component :is="layout" />
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    layout () {
      const isAuth = false
      const layout = isAuth ? 'Layout' : 'AuthLayout'
      return () => import(`@/components/common/${layout}`)
    }
  }
}
</script>

<style lang="scss">
</style>
