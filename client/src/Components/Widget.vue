<script setup>
    import { getSuggestions } from '../stores/SuggestionStore.js'
    import { watchEffect } from 'vue'
    import { userSuggestion } from '../main.js'
    import BtnFollow from './Profile/BtnFollow.vue';

    watchEffect(async () => {
        await getSuggestions()
    })

    const fulname = (firstname, lastname) => {
        return `${firstname} ${lastname}`
    }

</script>

<template >
    <div className="hidden xl:inline space-y-2">
        <!-- {/* Friend */} -->
        <div className="bg-white py-2.5 rounded-lg space-y-2 w-11/11 overflow-hidden border border-gray-300">
            <div className="flex items-center justify-between font-bold px-2.5">
                <h4>Add to your feed</h4>
                <InfoRoundedIcon className="h-5 w-5" />
            </div>
    
            <div v-for="(user, index) in userSuggestion.users" :key="index"  className="space-y-1">
                <div className="flex space-x-2 items-center justify-around cursor-pointer hover:bg-black/10 px-2.5 py-1">
                    <router-link :to="{ name: 'profile-page', params: { _id: user._id }}" class="flex lg:w-[250px] items-center py-3 pr-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
                        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" :src="user.avatar" alt="jane avatar">
                        <div class="mx-1">
                            <h1 class="text-sm font-semibold text-gray-700">{{ fulname(user.firstname, user.lastname) }}</h1>
                            <p class="text-sm text-gray-500">{{user.email}}</p>
                        </div>
                    </router-link>
                    <BtnFollow :_id= "user._id"/>
                </div>
            </div>
            
        </div>
        <!-- {/* Ads */} -->
        <div className="bg-white w-11/11 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300">
            <div className="relative w-full h-full">
                <img class="w-full h-[94%] mt-2 rounded" src="../assets/images/adv.avif"
                    alt="Advertise on App Media">
            </div>
        </div>
    </div>
</template>

<style>
    
</style>