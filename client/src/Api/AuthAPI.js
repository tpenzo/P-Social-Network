// import axios from 'axios';
import { alert } from '../main.js';
import { auth } from '../main.js';
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

export const loginAPI = async (userLogin) => {
   try {
      // Loading
      alert.alertLoading();
      // Call API
      const res = await axiosClient.post('api/auth/login', userLogin);
      // Set data user login
      auth.authSaveData(res.user, res.accessToken, res.posts);
      // Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const logout = async () => {
   try {
      // Loading
      alert.alertLoading();
      // Call API and resert AuthStore
      const res = await axiosClient.get('api/auth/logout');
      auth.resert();
      // Success
      alert.alertSuccess(res.message);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};

export const refreshToken = async () => {};
