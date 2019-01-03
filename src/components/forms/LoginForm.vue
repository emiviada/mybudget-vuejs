<template>
  <form>
    <div class="form-group">
      <input type="email" class="form-control form-control-sm" id="email" placeholder="Email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control form-control-sm" id="password" placeholder="Contraseña">
    </div>
    <button type="submit" class="btn btn-success btn-sm w-100">Login</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>
