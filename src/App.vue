<template>
  <div>
    <h1>App Base</h1>
    <nav v-if="!userStore.loadingSession">
      <RouterLink v-if="userStore.userData" to="/">Home</RouterLink> |
      <RouterLink v-if="!userStore.userData" to="/login">Login</RouterLink> |
      <RouterLink v-if="!userStore.userData" to="/register">Register</RouterLink> |
      <button v-if="userStore.userData" @click="userStore.logOut">Logout</button>
    </nav>
    <div v-else>Loading User...</div>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { useUserStore } from './stores/user';
  const userStore = useUserStore();

</script>

<style scoped>

</style>