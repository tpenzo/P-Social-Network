<script setup>
    import { auth } from '../../main';
    import { ref,defineProps } from 'vue'
    import { useRoute } from 'vue-router'
    import  EditProfile  from './EditProfile.vue'
    import BtnFollow from './BtnFollow.vue'
    
    const props = defineProps({ user: Object })
    const route = useRoute()

    const activeEdit = ref(false)

</script>

<template>
    <div class="bg-white shadow rounded-lg px-10 pb-5 sticky top-20">
        <div class="absolute right-0">
            <button v-if="route.params._id === auth.user?._id" @click="activeEdit = !activeEdit"
                class="relative z-10 flex marker:items-center py-2 px-4 text-sm bg-yellow-400 shadow-lg">
                <img src="../../assets/images/edit.png" width="19">
                <p class="ml-1">Edit</p>
            </button>
            <BtnFollow class="relative z-10" v-else :_id="user?._id" />
        </div>
        <div class="flex flex-col gap-1 text-center items-center">
            <img class="rounded-lg absolute w-full h-[30%]"
                src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <img class="mt-[100px] z-10 h-32 w-32 bg-white p-2 rounded-full shadow mb-4"
                v-bind:src="user?.avatar"
                alt="">
            <p class="font-semibold">{{ user?.fullname }}</p>
            <div class="text-sm leading-normal text-gray-400 flex justify-center items-center">
                <img src="../../assets/images/message.png" width="30">
                <p class="pl-2">{{ user?.username }}</p>
            </div>
        </div>

        <hr class="border-gray-200 dark:border-gray-700 my-[10px]" />

        <!-- About -->
        <div class="mb-[5px] w-80">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span class="tracking-wide">ABOUT</span>
                
            </div>
            <div class="text-gray-700">
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Phone:</div>
                    <div class="ml-5">{{ user?.phone }}</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Address:</div>
                    <div class="ml-5">{{ user?.address }}</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Gender:</div>
                    <div class="ml-5">{{ user?.gender }}</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Contact:</div>
                    <div class="ml-5">{{ user?.email }}</div>
                </div>
                <div class="flex mt-[5px]">
                    <div class="font-semibold">Story:</div>
                    <div class="ml-5">{{ user?.story }}</div>
                </div>
            </div>
        </div>

        <hr class="border-gray-200 dark:border-gray-700 my-[10px]" />

        <div class="flex justify-center items-center gap-2 my-3">
            <div class="font-semibold text-center mx-4">
                <p class="text-black">0</p>
                <span class="text-gray-400">Posts</span>
            </div>
            <div class="font-semibold text-center mx-4">
                <p class="text-black">{{ user?.followers?.length }}</p>
                <span class="text-gray-400">Followers</span>
            </div>
            <div class="font-semibold text-center mx-4">
                <p class="text-black">{{ user?.following?.length }}</p>
                <span class="text-gray-400">Following</span>
            </div>
        </div>
    </div>
    <EditProfile  v-if="activeEdit" v-model:activeEdit="activeEdit" :user="user"/>
</template>

<style></style>