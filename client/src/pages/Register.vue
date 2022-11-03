<script setup>
    import { reactive, watch } from 'vue'
    import { Field, Form, ErrorMessage } from 'vee-validate'
    import * as yup from 'yup'
    import { registerAPI } from '../Api/AuthAPI.js'
    
    const userRegis = reactive({ firstname: '', lastname: '',  username: '', password: '', email: ''})
    
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
            .required("The username must have a value.")
            .email("This is field email"),
        password: yup
            .string()
            .required("The username must have a value."),
        confirmPassword: yup
            .string()
            .required("The username must have a value.")
            .equals([yup.ref('password')], "The confirmPassword not match")
    })

    const handleSubmit = () => {
        registerAPI(userRegis)
    }

</script>

<template>
    <div class="mt-[20px]">
        <Form @submit="handleSubmit()" :validation-schema="formRegValidation" class="flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-1/2 bg-cover"
                style="background-image:url('https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80')">
            </div>
            <div class="w-full p-8 lg:w-1/2">
                <h2 class="text-xs font-semibold text-gray-700 text-center">App Media</h2>
                <p class="font-bold text-2xl text-black text-center mt-1">REGISTER</p>
                <div class="flex">
                    <div class="mt-4 mr-5">
                        <label class="block text-gray-700 text-sm font-bold mb-2">First name</label>
                        <Field
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            name="firstname" v-model="userRegis.firstname"/>
                        <ErrorMessage class="text-red-500 text-[12px]" name="firstname" />
                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Last name</label>
                        <Field
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            name="lastname" v-model="userRegis.lastname" />
                         <ErrorMessage class="text-red-500 text-[12px]" name="lastname" />
                    </div>
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <Field
                        class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        name="username" v-model="userRegis.username" />
                    <ErrorMessage class="text-red-500 text-[13px]" name="username" />
                </div>
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <Field
                        class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        name="email" v-model="userRegis.email" />
                    <ErrorMessage class="text-red-500 text-[13px]" name="email" />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    </div>
                    <Field
                        class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        name="password" v-model="userRegis.password" type="password"/>
                    <ErrorMessage class="text-red-500 text-[13px]" name="password" />
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Confirm password</label>
                    </div>
                    <Field
                        class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        name="confirmPassword" v-model="userRegis.confirmPassword" type="password" />
                    <ErrorMessage class="text-red-500 text-[13px]" name="confirmPassword" />
                    </div>
                <div class="mt-8">
                    <button type="submit"
                        class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                </div>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <router-link :to="{name: 'login-page'}" class="text-xs text-gray-500 uppercase hover:text-red-500 hover:text-[15px]">or sign in</router-link>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </Form>
    </div>
</template>
<style></style>