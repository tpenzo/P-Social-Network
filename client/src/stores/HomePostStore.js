import { defineStore } from 'pinia';

export const HomePostStore = defineStore('homePostStore', {
   state: () => ({ posts: [], result: 0, page: 2 }),
   actions: {
      addPost(newPost) {
         this.posts.unshift(newPost);
         this.result++;
      },
      getPosts(posts) {
         this.posts = posts;
         this.result = posts.length;
      },
      deletePost(_id) {
         this.posts = this.posts.filter((post) => post._id !== _id);
      },
      updatePost(_id, postUpdate) {
         this.posts = this.posts.map((post) => (post._id === _id ? postUpdate : post));
      },
   },
});
