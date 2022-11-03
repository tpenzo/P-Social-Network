import { defineStore } from 'pinia';

export const AuthStore = defineStore('authStore', {
   state: () => ({ token: null, user: null }),
   actions: {
      authSaveData(user, token) {
         this.user = user;
         this.token = token;
      },
      resert() {
         (this.token = null), (this.user = null);
      },
   },
});
