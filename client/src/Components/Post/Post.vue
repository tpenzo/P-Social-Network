<script setup>
import { defineProps, computed, ref, watchEffect } from 'vue'
    import moment from 'moment';
    import EditPost from './EditPost.vue';
    import { deletePost, like, unlike } from '../../Api/HomePostAPI.js'
    import { auth } from '../../main.js';
    const props = defineProps({ post: Object })
    
    const fullname = computed(() => {
        return `${props.post.user?.lastname} ${props.post.user?.firstname}`
    })
    
    const showFuncPost = ref(false)
    const showModalEdit = ref(false)
    const isLike = ref(false)


    const handleDeletePost = () => {
        if (confirm("Do you want to delete it ?")){
            deletePost(props.post._id)
        }
    }

    // Check like
    watchEffect(() => {
        const liked = props.post.likes.find(like => like._id === auth.user._id)
        if (liked){
            isLike.value = true
        }
    })

    const handleLike = async () => {
        await like(props.post)
        isLike.value = true
    }

    const handleUnlike = async () => {
        await unlike(props.post)
        isLike.value = false
    }


</script>
<template>
        <article
            class="w-full mb-4 break-inside p-6 rounded-xl bg-white flex flex-col bg-clip-border">
            <div class="flex pb-4 items-center justify-between">
                <div class="flex w-full justify-between">
                    <div>
                        <a class="inline-block mr-4" href="#">
                            <img class="rounded-full max-w-none w-12 h-12" :src="post.user.avatar" />
                        </a>
                        <div class="flex flex-col">
                            <div>
                                <a class="inline-block text-lg font-bold" href="#">{{ fullname }}</a>
                            </div>
                            <div class="text-slate-500">
                                {{ moment(post.createdAt).fromNow() }}
                            </div>
                        </div>
                    </div>

                    <div v-if="auth.user._id === post.user._id" class="relative">
                        <img @click="showFuncPost = !showFuncPost" class="cursor-pointer" src="../../assets/images/more.png" width="35">
                        <div v-if="showFuncPost" @click="showFuncPost = !showFuncPost"
                            class="absolute drop-shadow-lg right-0 z-20 w-36 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                        
                            <button @click="showModalEdit = !showModalEdit"
                                class=" px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transformhover:bg-gray-100 hover:bg-gray-100 hover:w-full">
                                <img src="../../assets/images/edit.png" alt="" width="25" class="inline">
                                <span class="ml-1">Edit</span>
                            </button>

                            <hr class="border-gray-200">

                            <button @click="handleDeletePost()"
                                class="px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transformhover:bg-gray-100 hover:bg-gray-100 hover:w-full">
                                <img src="../../assets/images/delete.png" alt="" width="21" class="inline">
                                <span class="ml-1">Delete</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <p>
                {{ post.content }}
            </p>
            <div v-if="post.images.length" class="py-4">
                <a class="flex" href="#">
                    <img class="max-w-full rounded-br-lg"
                        :src="post.images[0]" />
                </a>
            </div>
            <div class="py-4" @click="isLike ? handleUnlike() : handleLike()">
                <a class="inline-flex items-center" href="#">
                    <span class="mr-2">
                        <svg :class="isLike ? 'fill-rose-600' : 'fill-rose-60' " style="width: 24px; height: 24px;" viewBox="0 0 24 24">
                            <path
                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                            </path>
                        </svg>
                    </span>
                    <span class="text-lg font-bold">{{ post.likes.length }}</span>
                </a>
            </div>
            <div class="relative">
                <input
                    class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
                    type="text" placeholder="Write a comment" />
                <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
                    <svg class="mr-2" style="width: 26px; height: 26px;" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
                        </path>
                    </svg>
                    <svg class="fill-blue-50" style="width: 24px; height: 24px;" viewBox="0 0 24 24">
                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                    </svg>
                </span>
            </div>
            <!-- Comments content -->
            <div class="pt-6">
                <!-- Comment row -->
                <div class="media flex pb-4">
                    <a class="mr-4" href="#">
                        <img class="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/82.jpg" />
                    </a>
                    <div class="media-body">
                        <div>
                            <a class="inline-block text-base font-bold mr-2" href="#">Leslie Alexander</a>
                            <span class="text-slate-500 ">25 minutes ago</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <div class="mt-2 flex items-center">
                            <a class="inline-flex items-center py-2 mr-3" href="#">
                                <span class="mr-2">
                                    <svg class="fill-rose-600 " style="width: 22px; height: 22px;"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="text-base font-bold">12</span>
                            </a>
                            <button class="py-2 px-4 font-medium hover:bg-slate-50  rounded-lg">
                                Repply
                            </button>
                        </div>
                    </div>
                </div>
                <!-- End comments row -->
        
                <!-- More comments -->
                <div class="w-full">
                    <a href="#"
                        class="py-3 px-4 w-full block bg-slate-100  text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75">Show
                        more comments</a>
                </div>
                <!-- End More comments -->
            </div>
            <!-- End Comments content -->
        </article>

        <!-- Edit post -->
        <EditPost v-if="showModalEdit" v-model:showModalEdit="showModalEdit" :post="post"/>

</template>
<style>

</style>