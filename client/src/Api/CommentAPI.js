import { alert, auth, homePost, profile } from '../main.js';
import axiosClient from '../Api/axiosClient.js';
import { updatePostStore } from './HomePostAPI.js';

export const createComment = async (post, content) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Call API
      const comment = { postId: post._id, content };
      const res = await axiosClient.post(`/api/comment/create`, comment);
      // Update
      post.comments.push(res.newComment);
      updatePostStore(post._id, post);
      // Success
      alert.refreshAlert();
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
