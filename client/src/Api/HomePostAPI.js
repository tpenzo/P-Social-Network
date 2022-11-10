import { homePost } from '../main.js';
import { alert } from '../main.js';
import { imageUpload } from '../Utils/ImgUpload.js';
import axiosClient from './axiosClient.js';

export const createPost = async (image, content) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Upload image
      const img = await imageUpload(image);
      // Call API
      const res = await axiosClient.post('/api/post/create', {
         images: [img.url],
         content,
      });
      // Push res.newPost into homepost
      homePost.createPost(res.newPost);
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const getPosts = async () => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.get('/api/post');
      // Update
      homePost.getPosts(res.posts);
      // ==> Success
      alert.refreshAlert();
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
