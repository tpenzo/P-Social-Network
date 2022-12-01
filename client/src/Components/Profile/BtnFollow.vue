<script setup>
    import { watchEffect, ref, defineProps } from 'vue';
    import { auth } from '../../main.js'
    import { followUser, unFollowUser } from '../../Api/ProfileAPI'
    
    const props = defineProps({_id: String})
    const followed = ref(false)

    watchEffect(() => {
        if (auth.user.following.find((item) => item._id === props._id)){
            followed.value = true
        }
    })

    const follow = () => {
        followUser(props._id)
        followed.value = true
    }

    const unFollow = () => {
        unFollowUser(props._id)
        followed.value = false
    }

</script>

<template>
    <button v-if="followed" @click="unFollow()"
            class="flex marker:items-center py-2 px-4 text-sm bg-red-500 shadow-lg rounded-[5px]">
        <img src="../../assets/images/delete-friend.png" width="19">
        <p class="ml-1">Unfollow</p>
    </button>
    <button v-else  @click="follow()"
            class="flex marker:items-center py-2 px-4 text-sm bg-blue-500 shadow-lg rounded-[5px]">
        <img src="../../assets/images/add.png" width="19">
        <p class="ml-1">Follow</p>
    </button>
</template>

<style>
    
</style>