<script setup>
   import Comment from './Comment.vue';
   import { defineProps } from 'vue'
   const props = defineProps({ comments: Array, post: Object })


</script>
<template>
   <div v-for="item in props.comments" :key="item.id">
        <Comment :post="post" :comment="item"/>
   </div>
</template>
<style>

</style>