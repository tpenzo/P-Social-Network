<script setup>
    import { defineEmits, defineProps, reactive } from 'vue'
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup'
    import { checkImage }from '../Utils/ImgUpload.js'
    import { alert } from '../main.js'
    import { updateProfile } from '../Api/ProfileAPI'
    
    const emit = defineEmits(['update:activeEdit'])
    const props = defineProps({user: Object})
    const avatar = reactive({ file: null, url: '' })

    // Validtion form
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formEditValidation = yup.object().shape({
        firstname: yup
            .string()
            .required("The firstname must have a value."),
        lastname: yup
            .string()
            .required("The lastname must have a value."),
        email: yup
            .string()
            .required("The email must have a value.")
            .email("This is field email"),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Too short")
            .max(10, "Too long"),
    })

    
    // Get image and render UI
    const changeAvatar = (e) => {
        const file = e.target.files[0];
        const err = checkImage(file);
        if (err) {
            alert.alertError(err)
        } else {
            avatar.file = file;
            avatar.url = URL.createObjectURL(avatar.file) // URL.createObjectURL don't working in template
        }
    };


    // Submit form
    const handleSubmit = (values) => {
        emit('update:activeEdit', false)
        updateProfile(values, avatar.file)
    }



</script>

<template>
    <div class="edit_profile">
        <Form :initial-values = "{
           firstname: props.user.firstname,
           lastname: props.user.lastname,
           email: props.user.email,
           phone: props.user.phone,
           story: props.user.story,
           gender: props.user.gender,
           address: props.user.address
        }"
        :validation-schema="formEditValidation"  @submit="handleSubmit">
            <div class="info_avatar">
                <img :src="avatar.file ? avatar.url : user.avatar"/>
                <span>
                    <img class="icon-edit" src="../assets/images/pictureEdit.png" width="40" />
                    <p>Change</p>
                    <input type="file" name="file" id="file_up" accept="image/*" @change="changeAvatar"/>
                </span>
            </div>
            <div class="flex">
                <div class="mt-2 mr-5">
                    <label class="lableField">First name</label>
                    <Field class="inputField"
                        name="firstname"/>
                    <ErrorMessage class="text-red-500 text-[12px]" name="firstname" />
                </div>
                <div class="mt-2">
                    <label class="lableField">Last name</label>
                    <Field class="inputField"
                        name="lastname" />
                    <ErrorMessage class="text-red-500 text-[12px]" name="lastname" />
                </div>
            </div>
            <div class="mt-4">
                <label class="lableField">Email</label>
                <Field class="inputField" name="email" />
                <ErrorMessage class="text-red-500 text-[13px]" name="email" />
            </div>
            <div class="mt-4">
                <label class="lableField">Phone</label>
                <Field class="inputField"
                    name="phone"/>
                <ErrorMessage class="text-red-500 text-[13px]" name="phone" />
            </div>
            <div class="mt-4">
                <label class="lableField">Address</label>
                <Field class="inputField"
                    name="address" />
                <ErrorMessage class="text-red-500 text-[13px]" name="address" />
            </div>
            <div class="mt-4">
                <label class="lableField">Story</label>
                <Field as="textarea" rows="4" class="inputField"
                    name="story"/>
                <ErrorMessage class="text-red-500 text-[13px]" name="story" />
            </div>
            <div class="mt-4">
                <label class="lableField">Gender</label>
                <Field as="select" id="gender" name="gender"  class="inputField">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Field>
                <ErrorMessage class="text-red-500 text-[13px]" name="gender" />
            </div>
            <div class="mt-3 relative h-[35px]">
                <div class="absolute right-0 flex items-center">
                    <button type="submit" class="flex items-center py-2 px-4 rounded-lg text-sm bg-yellow-300 shadow-lg">
                        Edit
                    </button>
                    <button @click="emit('update:activeEdit', false)" class="flex items-center py-2 px-4 rounded-lg text-sm bg-gray-500 text-white shadow-lg ml-[10px]">
                        Cancel
                    </button>
                </div>
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
    z-index: 99;
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

.edit_profile .info_avatar > img {
    display: block;
    object-fit: cover;
    width: 155px;
    height: 150px;
    margin: 0px auto;
}
.icon-edit{
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