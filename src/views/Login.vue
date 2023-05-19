<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input v-model.trim="email" type="email" placeholder="Ingrese email">
            <input v-model.trim="password" type="password" placeholder="Ingrese contraseña">
            <button 
                type="submit"
                :disabled="userStore.loadingUser"
                >Ingresar
            </button>
        </form>
    </div>
</template>

<script setup >
//import { useRouter } from "vue-router";
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

    //const router = useRouter();
    const userStore = useUserStore();

    const email = ref(''); // Hace esta variable reactiva, localmente.
    const password = ref('');

    const handleSubmit = async () => {
        if ( !email.value || password.value.length < 6 ) {
            return alert('¡Llenar los campos!')
        }
        await userStore.loginUser( email.value, password.value )
        //router.push('/');
    }
</script>