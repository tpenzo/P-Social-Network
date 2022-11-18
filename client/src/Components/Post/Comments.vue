<script setup>
   import Comment from './Comment.vue';
   import { defineProps } from 'vue'
   const props = defineProps({ comments: Array, isAuthor: Function })


</script>
<template>
   <div v-for="item in props.comments" :key="item.id">
        <Comment :comment="item" :isAuthor="isAuthor"/>
   </div>
</template>
<style>

</style>