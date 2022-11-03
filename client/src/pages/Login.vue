<script setup>
    import { Field, Form, ErrorMessage } from 'vee-validate'
    import { reactive } from 'vue'
    import { useRouter } from 'vue-router';
    import * as yup from 'yup'
    import { loginAPI } from '../Api/AuthAPI'
    import { auth } from '../main.js'

    const router = useRouter()
    const userLogin = reactive({ username: "", password: "" })

    const formLoginValidation = yup.object().shape({
        username: yup.string().required("The username must have a value."),
        password: yup.string().required("The password must have a value.")
    })

    const  handleLogin = async () => {
        await loginAPI(userLogin)
        if(auth.token){
            router.push({ name: 'home-page' })
        }
    }

</script>

<template>
<div>
    <Form @submit="handleLogin()" :validation-schema="formLoginValidation" class="flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="hidden lg:block lg:w-1/2 bg-cover"
            style="background-image:url('https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80')">
        </div>
        <div class="w-full p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold  text-center">APP MEDIA</h2>
            <p class="mt-2 text-sm text-gray-600 text-center"> >-- Welcome back --> </p>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <Field
                    class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="username" v-model="userLogin.username" />
                <ErrorMessage class="text-red-500 text-[13px]" name="username" />
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <a href="#" class="text-xs text-gray-500">Forget Password ?</a>
                </div>
                <Field
                    class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="password" v-model="userLogin.password" type="password"/>
                <ErrorMessage class="text-red-500 text-[13px]" name="password" />
            </div>
            <div class="mt-7">
                <button
                    class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>  
            <div class="mt-5 flex items-center justify-between">
                <span class="border-b w-1/5 md:w-1/4"></span>
                <router-link :to="{name: 'register-page'}" class="text-xs text-gray-500 uppercase hover:text-red-500 hover:text-[15px]">or sign up</router-link>
                <span class="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </Form>
</div>
</template>

<style>
</style>