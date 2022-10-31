<script setup>
    import Header from './Components/Header.vue'
    import Home from './pages/Home.vue'
    import Profile from './pages/Profile.vue'

</script>

<template>
    <div className="bg-[#F3F2EF] h-screen overflow-y-scroll md:space-y-6">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<style >
</style>

