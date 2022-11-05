<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
</script>

<template>
<div class="edit_profile">
    <Form>
        <div class="info_avatar">
            <img />
            <span>
                <img class="" src="../assets/images/pictureEdit.png" width="40" />
                <p>Change</p>
                <input type="file" name="file" id="file_up" accept="image/*" />
            </span>
        </div>
        <div class="flex">
            <div class="mt-2 mr-5">
                <label class="block text-gray-600 text-sm font-bold mb-2">First name</label>
                <Field
                    class="bg-gray-200 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="firstname"/>
                <ErrorMessage class="text-red-500 text-[12px]" name="firstname" />
            </div>
            <div class="mt-2">
                <label class="block text-gray-600 text-sm font-bold mb-2">Last name</label>
                <Field
                    class="bg-gray-200 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="lastname" />
                <ErrorMessage class="text-red-500 text-[12px]" name="lastname" />
            </div>
        </div>
        <div class="mt-4">
            <label class="block text-gray-600 text-sm font-bold mb-2">Mobile</label>
            <Field
                class="bg-gray-200 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                name="mobile"/>
            <ErrorMessage class="text-red-500 text-[13px]" name="mobile" />
        </div>
        <div class="mt-4">
            <label class="block text-gray-600 text-sm font-bold mb-2">Address</label>
            <Field
                class="bg-gray-200 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                name="adress" />
            <ErrorMessage class="text-red-500 text-[13px]" name="address" />
        </div>
        <div class="mt-4">
            <label class="block text-gray-600 text-sm font-bold mb-2">Story</label>
            <textarea 
                  rows="4"
                class="bg-gray-200 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                name="story" />
            <ErrorMessage class="text-red-500 text-[13px]" name="story" />
        </div>
        <div class="mt-4">
            <label class="block text-gray-600 text-sm font-bold mb-2">Gender</label>
            <select id="gender" name="gender" class="bg-gray-200 text-gray-600 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <ErrorMessage class="text-red-500 text-[13px]" name="gender" />
        </div>
       <div class="mt-3 relative h-[35px]">
            <button class="absolute right-0 flex items-center py-2 px-4 rounded-lg text-sm bg-yellow-300 shadow-lg">
                Edit
                <img src="@/assets/images/send.png" class="ml-1" width="25">
            </button>
       </div>
    </Form>
</div>
</template>

<style scoped>
.edit_profile {
    position: fixed;
    top: -9px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0008;
    z-index: 9;
    overflow: auto;
}
.edit_profile form {
    max-width: 450px;
    width: 100%;
    background: white;
    padding: 5px 20px 20px 20px;
    border-radius: 15px;
    margin: 20px auto;
}

.edit_profile .info_avatar {
    width: 155px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
    margin: 15px auto;
    border: 1px solid #ddd;
    cursor: pointer;
    justify-content: center;
}

.edit_profile .info_avatar img {
    display: block;
    margin-top: 5px;
    object-fit: cover;
    margin-left: 40%;
}

.edit_profile .info_avatar span {
    position: absolute;
    bottom: -190%;
    left: 0;
    width: 100%;
    height: 50%;
    text-align: center;
    color: red;
    transition: 0.3s ease-in-out;
    background: rgb(219, 219, 219);
}

.edit_profile .info_avatar:hover span {
    bottom: -2px;
}

.edit_profile .info_avatar #file_up {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
}
::-webkit-file-upload-button {
    cursor: pointer;
}
</style>