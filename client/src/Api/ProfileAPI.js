import { alert } from '../main.js';
import axiosClient from '../Api/axiosClient.js';
import { profile, auth } from '../main.js';
import { imageUpload } from '../Utils/ImgUpload.js';

export const getProfileUser = async (_id) => {
   try {
      // Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.get(`/api/user/${_id}`);
      // Update store Profile
      profile.getUser(res.user, null);
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
