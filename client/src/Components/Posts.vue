<script setup>
    import Post from './Post/Post.vue'
    import { defineProps } from 'vue'
    const props = defineProps({posts: Array})
</script>
<template>
    <div class="w-[510px]" v-for="post in posts" :key="post.id">
        <Post :post="post"/>
    </div>
</template>
<style>
    
</style>