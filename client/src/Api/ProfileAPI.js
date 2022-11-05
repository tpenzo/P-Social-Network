import { alert } from '../main.js';
import axiosClient from '../Api/axiosClient.js';
import { profile } from '../main.js';

export const getProfileUser = async (_id) => {
   try {
      // Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.get(`/api/user/${_id}`);
      console.log(res.user)
      // Update store Profile
      profile.getUser(res.user, null);
      // Success
      alert.refreshAlert()
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
