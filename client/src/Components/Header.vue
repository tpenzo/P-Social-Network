<script setup>
    import { ref } from 'vue'
    import { logout } from '../Api/AuthAPI.js';
    import { useRouter } from 'vue-router'
    import Search from './Search.vue'
    import { auth } from '../main';
    
    const router = useRouter()

    const showDropdown = ref(false)

    const handleLogout = async () => {
        logout()
        showDropdown.value = false
        router.push({name: 'login-page'})
    }

</script>
<template>
    <header className="sticky top-0 z-40 bg-white flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg">
        <!-- Left -->
        <div className="flex items-center space-x-2 w-full max-w-xs">
            <!-- Logo -->
            <router-link :to="{name: 'home-page'}">
                <div class="flex justify-around mr-5">
                    <img src="@/assets/images/social-media.png" width="45" height="50" />
                    <h1 class="text-black font-bold ml-3">App Media</h1>
                </div>
            </router-link>
            <!-- Search -->
            <Search/>
        </div>
        <!-- Right -->
        <div className="hidden md:flex items-center space-x-1 text-black">
            <!-- Nav link -->
            <div class="mr-3 flex-grow-0 items-center">
                <a href="#">
                    <img class="inline" src="@/assets/images/writing.png" width="20" /> Message
                </a>
                <a class="mx-3" href="#">
                    <img class="inline" src="@/assets/images/placeholder.png" width="21" /> Discover
                </a>
                <a href="#">
                    <img class="inline" src="@/assets/images/bell.png" width="20" /> Notify
                </a>
            </div>
            <div class="inline relative drop-shadow-lg">
                <!-- Btn show -->
                <button @click="showDropdown = !showDropdown"
                    class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
                    <span class="mx-1">{{auth.fullName}}</span>
                    <img class="inline ml-1" src="@/assets/images/down-chevron.png" width="15" />
                </button>
                <!-- Show info -->
                <div v-show="showDropdown"
                    class="absolute drop-shadow-lg right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                    <a href="#"
                        class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform">
                        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            :src="auth.user.avatar"
                            alt="user avatar">
                        <div class="mx-1">
                            <h1 class="text-sm font-semibold text-gray-700">{{auth.fullName}}</h1>
                            <p class="text-sm text-gray-500 font-thin">{{auth.user.email}}</p>
                        </div>
                    </a>
                    <hr class="border-gray-200">
                    <router-link @click="showDropdown = !showDropdown" :to="{ name: 'profile-page', params: { _id: auth.user._id } }" 
                        class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
                        view profile
                    </router-link>
                    <hr class="border-gray-200">
                    <button  href="#" @click="handleLogout()"
                        class="w-full block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style></style>