<template>
    <div>
        <h1>Login</h1>
        <p> - {{ textMayuscula }} - </p>
        <p> - {{ userStore.minuscula }} - </p>
        <p> - {{ userStore.loginData }} - </p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from "../stores/user";

const userStore = useUserStore()
const textMayuscula = computed(() => userStore.userData.toUpperCase())

</script>