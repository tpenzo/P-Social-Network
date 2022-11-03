// import axios from 'axios';
import { alert } from '../main.js';
import axios from 'axios';
import axiosClient from './axiosClient.js';

export const registerAPI = async (userRegis) => {
   try {
      // Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.post('api/auth/register', userRegis);
      // Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
