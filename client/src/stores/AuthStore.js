import { defineStore } from 'pinia';

export const AuthStore = defineStore('authStore', {
   state: () => ({ token: null, user: null, posts: [] }),
   actions: {
      authSaveData(user, token, posts) {
         this.user = user;
         this.token = token;
         this.posts = posts;
      },
      resert() {
         (this.token = null), (this.user = null);
      },
      updateUser(user) {
         this.user = { ...this.user, ...user };
      },
      addPost(post) {
         this.posts.unshift(post);
      },
      deletePost(_id) {
         this.posts = this.posts.filter((post) => post._id !== _id);
      },
   },
   getters: {
      fullName() {
         return `${this.user.firstname} ${this.user.lastname}`;
      },
   },
});
