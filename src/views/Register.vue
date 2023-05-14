<template>
    <div>
        <h1>Register</h1>
        <button @click="changeName">Ingresar</button>
        <p> - {{ userStore.minuscula }} - </p>
    </div>
</template>

<script setup >

import { useUserStore } from "../stores/user";

//Se guardan los datos del Store del usuario en esta variable.
// Se va a llamar la ACTION "registerUser" para cambiar el valor, a esta se le debe de pasar un valor.
const userStore = useUserStore()

const changeName = () => {
    if (userStore.userData === 'adroc65@outlook.es') {
        userStore.registerUser('San66')
    } else {
        userStore.registerUser('adroc65@outlook.es')
    }
}

</script>