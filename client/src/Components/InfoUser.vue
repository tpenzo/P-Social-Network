<script setup>
    import { auth } from '../main';
    import { watchEffect, reactive } from 'vue'
    import { useRoute } from 'vue-router'
    import { profile } from '../main.js';
    import { getProfileUser } from '../Api/ProfileAPI.js';
    
    const route = useRoute()

    const infoUser = reactive({data: null})
    
    watchEffect(async () => {
        console.log(route.params._id)
        if (route.params._id === auth.user._id){
            infoUser.data = auth.user 
        } else if (route.params._id === profile.user?._id){
            infoUser.data = profile.user
        } else{
            await getProfileUser(route.params._id)
            infoUser.data = profile.user
        }
    })
    
</script>

<template>
    <div class="bg-white shadow rounded-lg px-10 pb-5 sticky top-20">
        <div class="flex flex-col gap-1 text-center items-center">
            <img class="rounded-lg absolute w-full h-[50%]"
                src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <img class="mt-[100px] z-10 h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
                alt="">
            <p class="font-semibold">{{ infoUser.data?.username }}</p>
            <div class="text-sm leading-normal text-gray-400 flex justify-center items-center">
                <svg viewBox="0 0 24 24" class="mr-1" width="16" height="16" stroke="currentColor" stroke-width="2"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Los Angeles, California
            </div>
        </div>
        <div class="flex justify-center items-center gap-2 my-3">
            <div class="font-semibold text-center mx-4">
                <p class="text-black">102</p>
                <span class="text-gray-400">Posts</span>
            </div>
            <div class="font-semibold text-center mx-4">
                <p class="text-black">102</p>
                <span class="text-gray-400">Followers</span>
            </div>
            <div class="font-semibold text-center mx-4">
                <p class="text-black">102</p>
                <span class="text-gray-400">Folowing</span>
            </div>
        </div>
    </div>
    
    <div class="bg-white shadow mt-6  rounded-lg p-6">
        <h3 class="text-gray-600 text-sm font-semibold mb-4">Following</h3>
        <ul class="flex items-center justify-center space-x-2">
            <!-- Story #1 -->
            <li class="flex flex-col items-center space-y-2">
                <!-- Ring -->
                <a class="block bg-white p-1 rounded-full" href="#">
                    <img class="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80">
                </a>
                <!-- Username -->
                <span class="text-xs text-gray-500">
                    Lee Min Ho
                </span>
            </li>
    
            <!-- Story #1 -->
            <li class="flex flex-col items-center space-y-2">
                <!-- Ring -->
                <a class="block bg-white p-1 rounded-full" href="#">
                    <img class="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80">
                </a>
    
    
                <!-- Username -->
                <span class="text-xs text-gray-500">
                    Jett
                </span>
            </li>
    
            <!-- Story #2 -->
            <li class="flex flex-col items-center space-y-2">
                <!-- Ring -->
                <a class="block bg-white p-1 rounded-full" href="#">
                    <!-- Thumbnail -->
                    <img class="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80">
                </a>
    
                <!-- Username -->
                <span class="text-xs text-gray-500">
                    Sky
                </span>
            </li>
    
            <!-- Story #3 -->
            <li class="flex flex-col items-center space-y-2">
                <!-- Ring -->
                <a class="block bg-white p-1 rounded-full" href="#">
                    <!-- Thumbnail -->
                    <img class="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80">
                </a>
    
                <!-- Username -->
                <span class="text-xs text-gray-500">
                    Olivia
                </span>
            </li>
    
            <!-- Story #4 -->
            <li class="flex flex-col items-center space-y-2">
                <!-- Ring -->
                <a class="block bg-white p-1 rounded-full" href="#">
                    <img class="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80">
                </a>
    
    
                <!-- Username -->
                <span class="text-xs text-gray-500">
                    Julia
                </span>
            </li>
            <!-- Story #1 -->
            <li class="flex flex-col items-center space-y-2">
                <!-- Ring -->
                <a class="block bg-white p-1 rounded-full" href="#">
                    <!-- Thumbnail -->
                    <img class="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80">
                </a>
    
    
                <!-- Username -->
                <span class="text-xs text-gray-500">
                    Hendrick
                </span>
            </li>
        </ul>
    </div>
</template>

<style></style>