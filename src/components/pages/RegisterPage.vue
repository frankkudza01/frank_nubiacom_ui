<template>
    <div class="body">
        <RegisterComponent/>
    </div>
</template>

<script>
    import RegisterComponent from '../authentication/RegisterComponent.vue';
    export default{
        name:'RegisterPage',
        components : {
            RegisterComponent
        }
    }
</script>