<template>
  <div>
    <h1>App Base</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/login">Login</RouterLink> |
      <RouterLink to="/register">Register</RouterLink> |
      <button>Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>