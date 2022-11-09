import { defineStore } from 'pinia';

export const ProfileStore = defineStore('profileStore', {
   state: () => ({ user: null, posts: [] }),
   actions: {
      getUser(user, posts) {
         this.user = user;
         this.posts = posts;
      },
      updateUser(user) {
         this.user = { ...this.user, ...user };
      },
   },
});
