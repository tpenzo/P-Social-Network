import { defineStore } from 'pinia';

export const HomePostStore = defineStore( 'homePostStore',{
   state: () => ({ posts: [], result: 0, page: 2 }),
   actions: {
      createPost(newPost) {
         this.posts = [ ...this.posts, newPost];
      },
   },
});
