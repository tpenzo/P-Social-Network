<script setup>
    import { reactive, defineEmits, ref, defineProps, onMounted } from 'vue'
    import { auth } from '../../main.js';
    import { checkImage } from '../../Utils/ImgUpload';
    import { alert } from '../../main.js';
    import { updatePost } from  '../../Api/HomePostAPI.js'

    const emit = defineEmits(['update:showModalEdit'])
    const props = defineProps({ post: Object })

    const image = reactive({ file: null, url: '' })
    const content = ref('')

    onMounted(() => {
        image.url = props.post.images[0]
        content.value = props.post.content
    })

    // Function for Images
    const handleChangeImg = (e) => {
        const file = e.target.files[0]
        const err = checkImage(file)
        if (err) {
            alert.alertError(err)
        } else {
            image.file = file
            image.url = URL.createObjectURL(file)
        }
    }

    const deleteImg = () => {
        image.file = null
        image.url = ''
    }

    // Handle Submit edit
    const handleSubmit = async () => {
        const postEdit = { ...props.post, content: content.value }
        await updatePost(props.post._id, postEdit, image.file)
        emit('update:showModalEdit', false)
    }

</script>
<template>
    <div class="status_modal">
        <form @submit.prevent="handleSubmit">
            <div class="status_header">
                <h5 class="m-0">Edit Post</h5>
                <span @click="emit('update:showModalEdit', false)">&times;</span>
            </div>

            <div class="status_body">
                <textarea name="content" v-model="content" :placeholder="auth.fullName + ', What are you thinking ?'" />
                <!-- Show images -->
                <div class="show_images flex justify-center mx-0">
                    <div id="file_img" v-if="image.url">
                        <img :src="image.url" />
                        <span @click="deleteImg">&times;</span>
                    </div>
                </div>

                <div class="input_images">
                    <div class="file_upload">
                        <img src="../../assets/images/picture.png" width="40" class="ml-[20px]">
                        <p class="font-thin">Photo/video</p>
                        <input type="file" name="file" id="file" accept="image/*" @change="handleChangeImg" />
                    </div>
                </div>
            </div>

            <div class="mt-3 relative h-[35px]">
                <div class="absolute right-0 flex items-center">
                    <button type="submit" class="flex items-center py-2 px-4 rounded-lg text-sm bg-yellow-500 shadow-lg">
                        Edit
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>
<style scoped>
.status_modal {
    position: fixed;
    top: 0;
    left: 0;
    background: #0008;
    z-index: 99;
    width: 100%;
    height: 100vh;
    overflow: auto;
}

.status_modal form {
    max-width: 450px;
    width: 100%;
    background: white;
    margin: 30px auto;
    padding: 20px;
    border-radius: 5px;
}

.status_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    transform: translateY(-13px);
}

.status_header span {
    font-size: 2rem;
    font-weight: 900;
    cursor: pointer;
    transform: translateY(-5px);
}

.status_body textarea {
    width: 100%;
    min-height: 150px;
    border: none;
    outline: none;
    resize: none;
}

.status_body .input_images {
    display: flex;
    justify-content: center;
    margin: 10px 0;
}

.status_body .input_images i {
    font-size: 2rem;
    cursor: pointer;
}

.status_body .input_images .file_upload {
    overflow: hidden;
    margin: 0px auto;
    position: relative;
}

.status_body .input_images .file_upload #file {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}

.status_body .show_images {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    place-items: center;
    padding: 10px 0;
    grid-gap: 10px;
}

.status_body .show_images #file_img {
    position: relative;
    width: 100%;
    height: 100%;
}

.status_body .show_images #file_img img {
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.status_body .show_images #file_img span {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 4;
    background: white;
    color: crimson;
    padding: 10px 14px;
    border: 3px solid crimson;
    border-radius: 50%;
    font-size: 10px;
    font-weight: bolder;
    cursor: pointer;
}

.status_body .stream span {
    position: absolute;
    top: -10px;
    right: 5px;
    color: crimson;
    font-size: 2rem;
    font-weight: 900;
    cursor: pointer;
}

.status_body .dropdown-menu {
    transform: translate3d(-153px, -190px, 0px) !important;
}
</style>