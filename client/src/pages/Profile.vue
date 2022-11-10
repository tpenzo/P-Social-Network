<script setup>
    import Infouser from '../Components/Profile/InfoUser.vue'
    import Posts from '../Components/Posts.vue'
    import { watchEffect, reactive, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { profile, auth  } from '../main.js'
    import { getProfileUser } from '../Api/ProfileAPI.js'

    const route = useRoute()
    
    const infoUser = reactive({ data: null })
    const updateInfoUser = (newInfo, fullName) =>{
        infoUser.data = newInfo
        infoUser.data.fullname = fullName
    }
    
    watchEffect(async () => {
        if (route.params._id === auth.user._id) {
            updateInfoUser(auth.user, auth.fullName)
        } else if (route.params._id === profile.user?._id) {
            updateInfoUser(profile.user, profile.fullName)
        } else {
            await getProfileUser(route.params._id)
            updateInfoUser(profile.user, profile.fullName)
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
            <Posts/>
        </div>
    </div>
</main>
</template>

<style>
    
</style>