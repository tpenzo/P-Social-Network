<script setup>
    import { auth } from '../main.js';
    import { useRouter } from 'vue-router'
    const router = useRouter()
</script>

<template>
<div className="space-y-2 min-w-max max-w-lg lg:w-[220px]">
    <!-- {/* Top */} -->
    <div
        className="bg-white rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300">
        <div className="relative w-full h-14 bg-blue-100">
        </div>
        <img @click="router.push({ name: 'profile-page', params:{_id: auth.user._id} })"
             class="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer flex-shrink-0 object-cover mx-1 rounded-full"
             :src="auth.user.avatar">
        <div @click="router.push({ name: 'profile-page', params:{_id: auth.user._id} })" 
             className="mt-3 py-4 space-x-0.5">
            <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
                {{ auth.fullName }}
            </h4>
            <p className="text-black/60 text-sm">
                {{ auth.user.email }}
            </p>
        </div>
        <div className="hidden md:inline text-lefttext-sm px-5 mb-5">
            <div className="font-medium sidebarButton space-y-0.5">
                <div className="flex justify-between space-x-2">
                    <h4 class="pr-4">Followers</h4>
                    <span className="text-blue-500">{{ auth.user.followers.length }}</span>
                </div>
                <div className="flex justify-between space-x-2">
                    <h4 class="pr-4">Following</h4>
                    <span className="text-blue-500">{{ auth.user.following.length }}</span>
                </div>
            </div>

        </div>
    </div>
    <!-- {/* Bottom */} -->
    <div
        className="hidden md:flex bg-white rounded-lg overflow-hidden flex-col space-y-2 pt-2.5 sticky top-20 border border-gray-300">
        <div class="pl-5">
            <p className="sidebarLink">Groups</p>
            <div className="flex items-center justify-between">
                <p className="sidebarLink">Events</p>
                <AddRoundedIcon className="!h-5" />
            </div>
            <p className="sidebarLink">Followed Hashtags</p>
        </div>
        <div className="sidebarButton text-center">
            <h4 className="font-medium text-sm pb-2">Discover More</h4>
        </div>
    </div>
</div>
</template>

<style>
    
</style>