<script setup>
    import { reactive, watchEffect } from 'vue'
    import { useRouter } from 'vue-router';
    import { Field, Form, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup'
    import { registerAPI } from '../Api/AuthAPI.js'
    import { auth } from '../main.js'
    
    const router = useRouter()
    const userRegis = reactive({ firstname: '', lastname: '', username: '', password: '', email: '' })
    
    watchEffect(() => {
        if(auth.token){
            router.push({name: 'home-page'})
        }
    })

    const formRegValidation = yup.object().shape({
        firstname: yup
            .string()
            .required("The firstname must have a value."),
        lastname: yup
            .string()
            .required("The lastname must have a value."),
        username: yup
            .string()
            .required("The username must have a value.")
            .max(25, 'The maximum length of the data field is 25 characters.'),
        email: yup
            .string()
            .required("The email must have a value.")
            .email("This is field email"),
        password: yup
            .string()
            .required("The password must have a value."),
        confirmPassword: yup
            .string()
            .required("The confirm password must have a value.")
            .equals([yup.ref('password')], "The confirm password not match")
    })

    const handleSubmit = () => {
        registerAPI(userRegis)
        userRegis.firstname = ''
        userRegis.lastname = ''
        userRegis.username = '',
        userRegis.password = '', 
        userRegis.email = ''
        router.push({name: 'login-page'})
    }

</script>

<template>
    <div class="mt-[20px] animate__fadeIn animate__animated">
        <Form @submit="handleSubmit()" :validation-schema="formRegValidation" class="flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-1/2 bg-cover"
                style="background-image:url('https://res.cloudinary.com/dykgq5bav/image/upload/v1668917211/P-Social%20Network/bsnod0wi3emzi7atvi17.avif')">
            </div>
            <div class="w-full p-8 lg:w-1/2">
                <h2 class="text-xs font-semibold text-gray-700 text-center">P-Social Network</h2>
                <p class="font-bold text-2xl text-black text-center mt-1">REGISTER</p>
                <div class="flex">
                    <div class="mt-4 mr-5">
                        <label class="lableField">First name</label>
                        <Field class="inputField"
                            name="firstname" v-model="userRegis.firstname"/>
                        <ErrorMessage class="text-red-500 text-[12px]" name="firstname" />
                    </div>
                    <div class="mt-4">
                        <label class="lableField">Last name</label>
                        <Field class="inputField"
                            name="lastname" v-model="userRegis.lastname" />
                         <ErrorMessage class="text-red-500 text-[12px]" name="lastname" />
                    </div>
                </div>
                <div class="mt-4">
                    <label class="lableField">Username</label>
                    <Field class="inputField"
                        name="username" v-model="userRegis.username" />
                    <ErrorMessage class="text-red-500 text-[13px]" name="username" />
                </div>
                <div class="mt-4">
                    <label class="lableField">Email Address</label>
                    <Field class="inputField"
                        name="email" v-model="userRegis.email" />
                    <ErrorMessage class="text-red-500 text-[13px]" name="email" />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="lableField">Password</label>
                    </div>
                    <Field class="inputField"
                        name="password" v-model="userRegis.password" type="password"/>
                    <ErrorMessage class="text-red-500 text-[13px]" name="password" />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="lableField">Confirm password</label>
                    </div>
                    <Field class="inputField"
                        name="confirmPassword" v-model="userRegis.confirmPassword" type="password" />
                    <ErrorMessage class="text-red-500 text-[13px]" name="confirmPassword" />
                    </div>
                <div class="mt-8">
                    <button type="submit"
                        class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <router-link :to="{name: 'login-page'}" class="text-xs text-gray-500 uppercase hover:text-red-500 hover:text-[15px]">
                        or sign in
                    </router-link>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </Form>
    </div>
</template>
<style></style>