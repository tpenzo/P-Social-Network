import { auth, homePost } from '../main.js';
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

      // Update
      homePost.addPost(res.newPost);
      auth.addPost(res.newPost);
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

export const deletePost = async (_id) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.delete(`/api/post/${_id}`);
      // Update
      homePost.deletePost(_id);
      auth.deletePost(_id);
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
