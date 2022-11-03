<script setup>
    import Header from './Components/Header.vue'
    import Alert from './Components/Alert/Alert.vue';
</script>

<template>
    <Alert/>
    <div className="bg-[#F3F2EF] h-screen overflow-y-scroll md:space-y-6">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<style >
</style>

