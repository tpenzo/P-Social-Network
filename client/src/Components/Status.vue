<script setup>
    import { ref } from 'vue'
    import { auth } from '../main.js';
    import StatusModal from './StatusModal.vue';

    const showModal = ref(false)

</script>

<template>
    <div class="bg-white shadow rounded-lg mb-6 p-4 w-full">
        <div @click="showModal = !showModal">
            <textarea name="message" :placeholder="auth.fullName + ', What are you thinking ?'"
                class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"></textarea>
            <div class="flex justify-between mt-2">
                <div class="flex gap-2">
                    <span
                        class="flex items-center transition ease-out duration-300  bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                        <img src="../assets/images/picture.png" alt="">
                    </span>
                    <span
                        class="flex items-center transition ease-out duration-300  bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                        <img src="@/assets/images/video.png" alt="">
                    </span>
                    <span
                        class="flex items-center transition ease-out duration-300  bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                        <img src="@/assets/images/happy.png" alt="">
                    </span>
                </div>
                <button class="flex items-center py-2 px-4 rounded-lg text-sm bg-green-500 text-white shadow-lg">Create
                    <img src="@/assets/images/send.png" class="ml-1" width="25">
                </button>
            </div>
        </div>
        <StatusModal v-if="showModal" v-model:showModal="showModal" />
    </div>
</template>

<style>
    
</style>