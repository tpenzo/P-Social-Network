<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({user: Object})

</script>

<template >
    <router-link :to="{ name: 'profile-page', params: { _id: user._id } }"
        class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100">
        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
            alt="jane avatar">
        <div class="mx-1">
            <h1 class="text-sm font-semibold text-gray-70">{{ user.username }}</h1>
            <p class="text-sm text-gray-500">{{ user.email }}</p>
        </div>
    </router-link>
</template>

<style>
    
</style>