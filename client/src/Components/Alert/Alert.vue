<script setup>
    import { AlertStore } from '../../stores/AlertStore.js'
    import Loading from './Loading.vue'
    import Toast from './Toast.vue';
    const alert = AlertStore()

</script>
<template>
    <Loading v-if="alert.loading" />
    <Toast v-if="alert.success" typeMessage="success" :message="alert.success"/>
    <Toast v-if="alert.error" typeMessage="error" :message="alert.error"/>
</template>
<style>
    
</style>