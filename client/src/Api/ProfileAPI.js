import { alert } from '../main.js';
import axiosClient from '../Api/axiosClient.js';
import { profile, auth } from '../main.js';
import { imageUpload } from '../Utils/ImgUpload.js';

export const getProfileUser = async (_id) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.get(`/api/user/${_id}`);
      // Update store Profile
      profile.getUser(res.user, res.posts); // update user and posts
      // Success
      alert.refreshAlert();
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const updateProfile = async (dataUpdate, newAvatar) => {
   try {
      // ==> Loading
      alert.alertLoading();
      // Upload image
      if (newAvatar) {
         const image = await imageUpload(newAvatar);
         dataUpdate.avatar = image.url;
      }
      // Call API
      const res = await axiosClient.post('/api/user/update', dataUpdate);
      // Update store auth
      auth.updateUser(dataUpdate);
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const followUser = async (_id) => {
   try {
      // ==> Loading
      alert.alertLoading();

      // Call API
      const res = await axiosClient.get(`/api/user/follow/${_id}`);

      // Update followers of profile user
      await getProfileUser(_id);

      // Update following of Auth
      const user = auth.user;
      user.following.push(profile.user);
      auth.updateUser(user);
     
      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const unFollowUser = async (_id) => {
   try {
      // ==> Loading
      alert.alertLoading();
      const res = await axiosClient.get(`/api/user/unfollow/${_id}`);

      // Update followers of profile user
      await getProfileUser(_id);

      // Update following of Auth
      const user = auth.user;
      user.following = user.following.filter((item) => item._id !== _id);
      auth.updateUser(user);

      // ==> Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
