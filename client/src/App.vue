<script setup>
    import Header from './Components/Header.vue'
    import Alert from './Components/Alert/Alert.vue';
    import { auth } from './main.js';
</script>

<template>
    <Alert/>
    <div className="bg-[#F3F2EF] h-screen overflow-y-scroll md:space-y-6">
        <Header v-if="auth.user"/>
        <router-view></router-view>
    </div>
</template>

<style >
</style>

