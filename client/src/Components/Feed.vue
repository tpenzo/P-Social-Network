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
        <Posts v-if="homePost.posts.length" :posts="homePost.posts"/>
        <article v-else class="w-[510px] mb-4 break-inside p-6 rounded-xl bg-white flex flex-col bg-clip-border">
            NO POSTS
        </article>
    </div>
</template>

<style>
    
</style>