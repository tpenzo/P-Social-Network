<script setup>
    import { watchEffect, watch, reactive } from 'vue'
    import Posts from './Posts.vue'
    import Status from './Status.vue';
    import { homePost } from '../main.js';
    import { getPosts } from '../Api/HomePostAPI.js'
    import { profile} from '../main.js'

    const posts = reactive({data:[]})

    // Get posts
    watchEffect(async () => {
        await getPosts()
        posts.data = homePost.posts
    })

    watch(profile, async() => {
        await getPosts()
        posts.data = homePost.posts
    })

    watch(homePost, async () => {
        posts.data = homePost.posts
        console.log(posts.data)
    })
    

</script>

<template>
    <!-- Feed -->
    <div className="space-y-6 pb-24 max-w-lg">
        <!-- Status -->
        <Status/>
        <!-- Posts -->
        <Posts v-if="posts.data.length" :posts="posts.data"/>
        <article v-else class="w-[510px] mb-4 break-inside p-6 rounded-xl bg-white flex flex-col bg-clip-border">
            You currently have no posts to view, follow someone to know about theirs or create your own.
        </article>
    </div>
</template>

<style>
    
</style>