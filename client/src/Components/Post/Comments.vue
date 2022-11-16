<script setup>
import Comment from './Comment.vue';
import { defineProps } from 'vue'
const props = defineProps({ comments: Array})
    
</script>
<template>
   <div v-for="item in props.comments" :key="item.id">
        <Comment :comment="item"/>
   </div>
</template>
<style>

</style>