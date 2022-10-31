import { defineStore } from 'pinia';

export const AuthStore = defineStore('authStore', {
   state: () => ({ token: null, user: null }),
});
