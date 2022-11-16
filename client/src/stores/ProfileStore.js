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
      updatePost(_id, postUpdate) {
         this.posts = this.posts.map((post) => (post._id === _id ? postUpdate : post));
      },
   },
   getters: {
      fullName() {
         return `${this.user?.firstname} ${this.user?.lastname}`;
      },
   },
});
