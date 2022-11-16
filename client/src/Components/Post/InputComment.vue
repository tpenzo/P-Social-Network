<script setup>
    import { ref, defineProps } from 'vue';
    import { createComment } from '../../Api/CommentAPI.js';
    const props = defineProps({post: Object})
    
    const content = ref("");

    const handleSumit = async() => {
        await createComment(props.post, content.value)
        content.value = ''
    }

</script>

<template>
    <form class="relative" @submit.prevent="handleSumit">
        <input class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            type="text" placeholder="Write a comment" v-model="content"/>
        <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
            <img src="../../assets/images/comment.png" width="26" height="26">
        </span>
    </form>
</template>

<style >
    
</style>