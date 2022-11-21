<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({ user: Object, avatar: String })

    const fullname = (firstname, lastname) => {
        return `${firstname} ${lastname}`
    }

</script>

<template >
    <router-link :to="{ name: 'profile-page', params: { _id: user._id }}"
        class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100">
        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
            :src="avatar"
            alt="jane avatar">
        <div class="mx-1">
            <h1 class="text-sm font-semibold text-gray-70">{{ fullname(user.firstname, user.lastname) }}</h1>
            <p class="text-sm text-gray-500">{{ user.email }}</p>
        </div>
    </router-link>
</template>

<style>
    
</style>