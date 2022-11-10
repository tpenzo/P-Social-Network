<script setup>
    import Infouser from '../Components/Profile/InfoUser.vue'
    import Posts from '../Components/Posts.vue'
</script>
<template>
<main className="flex justify-center gap-x-5 px-4 sm:px-12">
    <div className="flex flex-col md:flex-row gap-5">
        <div className="space-y-2 max-w-lg">
            <Infouser/>
        </div>
        <div className="space-y-6 pb-24 max-w-lg">
            <Posts/>
        </div>
    </div>
</main>
</template>
<style>
    
</style>