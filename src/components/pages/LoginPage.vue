<template>
    <div class="body">
        <LoginComponent/>
    </div>
</template>

<script>
    import LoginComponent from '../authentication/LoginComponent.vue';
    export default{
        name:'LoginPage',
        components : {
            LoginComponent
        }
    }
</script>