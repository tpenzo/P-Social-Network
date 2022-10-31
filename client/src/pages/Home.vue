<script setup>
    import Sidebar from '../Components/Sidebar.vue'
    import Widget from '../Components/Widget.vue'
    import Feed from '../Components/Feed.vue'
</script>
<template>
    <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
            <Sidebar/>
            <Feed/>
            <Widget/>
        </div>
    </main>
</template>
<style>
    
</style>