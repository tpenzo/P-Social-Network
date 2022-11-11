<script setup>
    import UserCard from './UserCard.vue';
    import { reactive, ref, watch} from 'vue'
    import axiosClient from '../Api/axiosClient';
    
    const searchInput = ref('')
    const showResult = ref(false)
    const users = reactive({data: []})
    
    // Search function API
    watch(searchInput, () => {
       const callSearchAPI = async () => {
            try {
                // Call API
                const res = await axiosClient.get(`/api/user/search?username=${searchInput.value}`)
                // Change data
                users.data = res.users
                showResult.value = true
            } catch (error) {
                console.log(error.response.data.message)
            }
        }
        if (searchInput.value){
            callSearchAPI()
        }
        else{
            users.data = []
            showResult.value = false
        }
    })
    

</script>
<template>
    <div className="space-x-1 py-2.5 px-4 rounded w-full">
        <!-- Search input -->
        <form class="relative">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="w-[260px]">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <img class="inline" src="@/assets/images/magnifying-glass.png" width="20" />
                </div>
                <input type="text" id="voice-search"
                    class="rounded-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Search"  v-model="searchInput">
            </div>
        </form>
        <!-- Search result -->
        <div v-if="showResult" @click="showResult =! showResult"
            class="absolute top-[50px]  z-20 w-[250px] py-2 mt-4 drop-shadow-lg overflow-hidden bg-white rounded-md shadow-xl">
            <div v-if="users.data.length">
                <div v-for="(user, index) in users.data" :key="user._id">
                        <UserCard :user="user" :avatar="user.avatar" />
                    <hr v-if="index + 1 != users.data.length" class="border-gray-200 dark:border-gray-700 " />
                </div>
            </div>
            <div v-else class="flex justify-around">
                <h3 class="text-red-500">No matching results</h3>
                <div>
                    <img src="../assets/images/error.png" width="30">
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    
</style>