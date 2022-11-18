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

export const deleteComment = async (post, _idCmt) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.delete(`/api/comment/${_idCmt}/delete`);
      // Update
      post.comments = post.comments.filter((item) => item._id !== _idCmt);
      updatePostStore(post._id, post);
      // Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const updateComment = async (post, _idCmt, content) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.patch(`/api/comment/${_idCmt}/update`, { content });
      // Update
      const cmtUpdate = post.comments.filter((item) => item._id === _idCmt);
      cmtUpdate[0].content = content;
      post.comments = post.comments.map((item) =>
         item._id === _idCmt ? cmtUpdate[0] : item
      );
      updatePostStore(post._id, post);
      // Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
