<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email">
            <input type="password" placeholder="Ingrese contraseña">
            <button type="submit">Crear Usuario</button>
        </form>
    </div>
</template>

<script setup >
    const handleSubmit = () => {
        console.log('procesando el formulario');
    }
</script>