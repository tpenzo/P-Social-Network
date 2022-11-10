<script setup>
    import { watchEffect } from 'vue'
    import Posts from './Posts.vue'
    import Status from './Status.vue';
    import { homePost } from '../main.js';
    import { getPosts } from '../Api/HomePostAPI.js'

    // Get posts
    watchEffect(() => {
        getPosts()
    })

</script>

<template>
    <!-- Feed -->
    <div className="space-y-6 pb-24 max-w-lg">
        <!-- Status -->
        <Status/>
        <!-- Posts -->
        <Posts :posts="homePost.posts"/>
    </div>
</template>

<style>
    
</style>