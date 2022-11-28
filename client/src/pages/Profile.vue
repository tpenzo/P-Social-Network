<script setup>
    import Infouser from '../Components/Profile/InfoUser.vue'
    import Posts from '../Components/Posts.vue'
    import { reactive, watch, watchEffect } from 'vue'
    import { useRoute } from 'vue-router'
    import { profile, auth  } from '../main.js'
    import { getProfileUser } from '../Api/ProfileAPI.js'
    import Status from '../Components/Status.vue'

    const route = useRoute()
    
    const infoUser = reactive({ data: null })
    const posts = reactive({data: null})
    const updateData = (newInfo, fullName, newPosts) =>{
        infoUser.data = newInfo
        infoUser.data.fullname = fullName
        posts.data = newPosts
    }

    watchEffect(async () => {
        if (route.params._id === auth.user._id) {
            updateData(auth.user, auth.fullName, auth.posts)
        } else if (route.params._id === profile.user?._id) {
            updateData(profile.user, profile.fullName, profile.posts)
        } else {
            await getProfileUser(route.params._id)
            updateData(profile.user, profile.fullName, profile.posts)
        }
    })

    // Call when edit Success
    watch(auth, async () => {
        infoUser.data = auth.user
    })

    // Call when user unfollow or follow
    watch(profile, async () => {
        infoUser.data = profile.user
    })

</script>

<template>
<main className="flex justify-center gap-x-5 px-4 sm:px-12">
    <div className="flex flex-col md:flex-row gap-5">
        <div className="space-y-2 max-w-lg">
            <Infouser :user='infoUser.data'/>
        </div>
        <div className="space-y-6 pb-24 max-w-lg">
            <!-- Status -->
            <Status v-if="route.params._id === auth.user._id"/>

            <Posts v-if="posts.data?.length" :posts="posts.data"/>
            <div v-else class="w-[510px] mb-4 break-inside p-6 rounded-xl bg-white flex flex-col bg-clip-border items-center">
                There are currently no posts 😊
            </div>
        </div>
    </div>
</main>
</template>

<style>
    
</style>