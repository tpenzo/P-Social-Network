import { defineStore } from 'pinia';

export const AuthStore = defineStore('authStore', {
   state: () => ({ token: null, user: null, posts: [] }),
   actions: {
      // user login
      authSaveData(user, token, posts) {
         this.user = user;
         this.token = token;
         this.posts = posts;
      },
      resert() {
         this.token = null;
         this.user = null;
         this.posts = [];
      },
      updateUser(user) {
         this.user = { ...this.user, ...user };
      },

      // Post
      addPost(post) {
         this.posts.unshift(post);
      },
      deletePost(_id) {
         this.posts = this.posts.filter((post) => post._id !== _id);
      },
      updatePost(_id, postUpdate) {
         this.posts = this.posts.map((post) => (post._id === _id ? postUpdate : post));
      },
   },
   getters: {
      fullName() {
         return `${this.user.firstname} ${this.user.lastname}`;
      },
   },
});
