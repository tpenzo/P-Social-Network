<script setup>
    import Header from './Components/Header.vue'
    import Alert from './Components/Alert/Alert.vue';
    import { auth } from './main.js';

</script>

<template>
    <Alert/>
    <div className="bg-[#F3F2EF] h-screen overflow-y-scroll md:space-y-6">
        <Header v-if="auth.user"/>
        <router-view></router-view>
    </div>
</template>

<style>
.inputField{
    background-color: rgb(229, 231, 235);
    color: rgb(55, 65, 81);
    border: 1px solid;
    border-color: rgb(209, 213, 219);
    border-radius: 4px;
    padding: 8px 16px 8px 16px;
    display: block;
    width: 100%;
    appearance: none;
}
.inputField:focus{
    outline: 2px solid
    transparent;
    outline-offset: 2px;
}
.lableField{
    display: block;
    color:  rgb(75, 88,99);
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 8px
}
</style>

