<script setup>
    import { defineProps, ref, watchEffect } from 'vue'
    import { auth } from '../../main';
    import { deleteComment, updateComment, likeComment, unlikeComment } from '../../Api/CommentAPI.js';
    import moment from 'moment'
    const props = defineProps({ comment: Object, post: Object })

    
    const show = ref(false)
    const showFuncCmt = ref(false)
    
    const showInputEdit = ref(false)
    const newContent = ref(props.comment.content)

    const isLike = ref(false)

    // If you are the author of the post, you can perform the functions on all comments,
    // otherwise the comment creator will be able to perform the function on that comment.
    watchEffect(async () => {
        if (props.post.user._id === auth.user._id){
            show.value = true
        } else if(auth.user._id === props.comment.user._id){
            show.value = true
        }
    })

    // Check like comment
    watchEffect(() => {
        const liked = props.comment.likes.find(like => like._id === auth.user._id)
        if (liked) {
            isLike.value = true
        }
    })

    const fulname = (firstname, lastname) => {
        return `${firstname} ${lastname}`
    }
    

    const handleDeleteCmt = () => {
        deleteComment(props.post, props.comment._id)
    }

    const handleEditCmt = () => {
        updateComment(props.post, props.comment._id, newContent.value)
        showInputEdit.value = false
    }
    
    const handleLike = async () => {
        await likeComment(props.post, props.comment._id)
        isLike.value = true
    }

    const handleUnlike = async () => {
        await unlikeComment(props.post, props.comment._id)
        isLike.value = false
    }

</script>
<template>
    <div class="pt-6">
        <div class="comment media flex justify-between pb-3">
            <div class="flex">
                <a class="mr-4" href="#">
                    <img class="rounded-full max-w-none w-12 h-12" :src="comment.user?.avatar" />
                </a>
                <div class="media-body">
                    <div>
                        <a class="inline-block text-base font-bold mr-2"
                            href="#">{{ fulname(comment.user.firstname, comment.user.lastname) }}</a>
                        <span class="text-slate-500 font-light">{{ moment(comment.createdAt).fromNow() }}</span>
                    </div>
                    <div class="w-[355px]">
                        <form v-if="showInputEdit === true" class="relative mt-[10px]" @submit.prevent="handleEditCmt">
                            <input class="pt-2 pb-2 pl-3 w-full h-11 bg-white rounded-lg placeholder:text-slate-600 font-medium pr-20"
                                type="text" v-model="newContent" />
                            <span class="flex absolute right-3 top-2/4 -mt-3 items-center">
                                <span @click="showInputEdit = !showInputEdit" class="mr-[5px] hover:bg-red cursor-pointer">
                                    &times;
                                </span>
                                <img src="../../assets/images/editCmt.png" width="26" height="26">
                            </span>
                        </form>
                        <p v-else class="break-words">{{ comment.content }}</p>
                    </div>
                    <div class="flex items-center" @click="isLike ? handleUnlike() : handleLike()">
                        <a class="inline-flex items-center py-2 mr-3" href="#">
                            <span class="mr-2">
                                <svg :class="isLike ? 'fill-rose-600' : 'fill-rose-60'" style="width: 22px; height: 22px;" viewBox="0 0 24 24">
                                    <path
                                        d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                    </path>
                                </svg>
                            </span>
                            <span class="text-base font-bold">{{comment.likes.length}}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="relative" v-if="show">
                <img @click="showFuncCmt = !showFuncCmt" class="cursor-pointer" src="../../assets/images/more.png" width="35">
                <div v-if="showFuncCmt" @click="showFuncCmt = !showFuncCmt"
                    class="absolute drop-shadow-lg right-0 z-20 w-36 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                    <button v-if="auth.user._id === props.comment.user._id" @click="showInputEdit = !showInputEdit"
                        class=" px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transformhover:bg-gray-100 hover:bg-gray-100 hover:w-full">
                        <img src="../../assets/images/edit.png" alt="" width="25" class="inline">
                        <span class="ml-1">Edit</span>
                    </button>
                    <hr v-if="auth.user._id === props.comment.user._id " class="border-gray-200">
                    <button @click="handleDeleteCmt()"
                        class="px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transformhover:bg-gray-100 hover:bg-gray-100 hover:w-full">
                        <img src="../../assets/images/delete.png" alt="" width="21" class="inline">
                        <span class="ml-1">Delete</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
    .comment{
        background: #ededed;
        padding: 15px 7px 5px 10px;
        border-radius: 10px;
    }
</style>