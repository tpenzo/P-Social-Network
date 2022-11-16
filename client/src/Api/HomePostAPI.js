import { auth, homePost } from '../main.js';
import { alert, profile } from '../main.js';
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
      const res = await axiosClient.delete(`/api/post/delete/${_id}`);
      // Update
      homePost.deletePost(_id);
      auth.deletePost(_id);
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const updatePost = async (_id, postEdit, image) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Upload image if edit image
      if (image) {
         const img = await imageUpload(image);
         postEdit = { ...postEdit, images: [img.url] };
      } else {
         postEdit = { ...postEdit, images: [] };
      }
      // Call API
      const res = await axiosClient.post(`/api/post/update/${_id}`, postEdit);
      // Update
      homePost.updatePost(_id, postEdit);
      auth.updatePost(_id, postEdit);
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const like = async (post) => {
   try {
      // Call API
      const res = await axiosClient.get(`/api/post/like/${post._id}`);
      // Update like post
      const userLike = {
         _id: auth.user._id,
         firstname: auth.user.firstname,
         lastname: auth.user.lastname,
         username: auth.user.username,
         avatar: auth.user.avatar,
      };
      post.likes.push(userLike);
      auth.updatePost(post._id, post);
      homePost.updatePost(post._id, post);
      profile.updatePost(post._id, post);
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const unlike = async (post) => {
   try {
      // Call API
      console.log(post);
      const res = await axiosClient.get(`/api/post/unlike/${post._id}`);
      const likes = post.likes.filter((like) => like._id !== auth.user._id);
      const newPost = { ...post, likes };
      auth.updatePost(post._id, newPost);
      homePost.updatePost(post._id, newPost);
      profile.updatePost(post._id, newPost);
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
