<script setup>
    import { alert } from '../../main';
    import { defineProps, watchEffect } from 'vue'
    
    const props = defineProps({
        typeMessage: String,
        message: String,
    })

    watchEffect(()=>{
        setTimeout(() => {
            alert.refreshAlert()
        }, 3000)
    })

</script>
<template>
    <div :class="typeMessage === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'"  class="toast flex rounded-lg  p-4 mb-4 text-sm" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
        </svg>
        <div>
            <span class="font-medium">{{ typeMessage }} alert !</span> {{message}}.
        </div>
        <div @click="alert.refreshAlert()" class=" ml-[10px] hover:cursor-pointer">
            <img src="../../assets/images/cross.png" width="25">
        </div>
    </div>
</template>

<style scoped>
    .toast {
        z-index: 999;
        position: fixed;
        top: 80px;
        right: 30px;
    }
</style>