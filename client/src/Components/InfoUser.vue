<script setup>
    import { auth } from '../main';
    import { watchEffect, reactive, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { profile } from '../main.js';
    import { getProfileUser } from '../Api/ProfileAPI.js';
    import  EditProfile  from './EditProfile.vue'
    
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

    const activeEdit = ref(false)

    
</script>

<template>
    <div class="bg-white shadow rounded-lg px-10 pb-5 sticky top-20">
        <div class="flex flex-col gap-1 text-center items-center">
            <img class="rounded-lg absolute w-full h-[30%]"
                src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <img class="mt-[100px] z-10 h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
                v-bind:src="infoUser.data.avatar"
                alt="">
            <!-- <p class="font-semibold">{{ infoUser.data?.username }}</p> -->
            <p class="font-semibold">{{ infoUser.data.username }}</p>
            <div class="text-sm leading-normal text-gray-400 flex justify-center items-center">
                <img src="../assets/images/message.png" width="30">
                <p class="pl-2">phucdang@gmail.com</p>
            </div>
        </div>

        <hr class="border-gray-200 dark:border-gray-700 my-[10px]" />

        <!-- About -->
        <div class="mb-[5px]">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span class="tracking-wide">ABOUT</span>
                
               <button  v-if="route.params._id === auth.user._id"
                    @click="activeEdit = !activeEdit" class="flex marker:items-center py-2 px-4 rounded-lg text-sm bg-yellow-400 shadow-lg">
                    <img src="../assets/images/edit.png" width="19" >
                    <p class="ml-1">Edit</p>
               </button>
                <button v-else class="flex marker:items-center py-2 px-4 rounded-lg text-sm bg-blue-400 shadow-lg">
                    <img src="../assets/images/add.png" width="19">
                    <p class="ml-1">Follow</p>
                </button>
            </div>
            <div class="text-gray-700">
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Mobile:</div>
                    <div class="ml-5">0346405050</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Address:</div>
                    <div class="ml-5">Ho Chi Minh</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Gender:</div>
                    <div class="ml-5">Mail</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Contact: </div>
                    <div class="ml-5">truongphuc@gmail.com</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Story:</div>
                    <div class="ml-5">Don’t cry because it’s over, smile because it happened</div>
                </div>
            </div>
        </div>

        <hr class="border-gray-200 dark:border-gray-700 my-[10px]" />

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
    <EditProfile  v-if="activeEdit" v-model:activeEdit="activeEdit"/>
</template>

<style></style>