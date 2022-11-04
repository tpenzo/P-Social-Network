import axios from 'axios';
import { auth } from '../main';

const axiosClient = axios.create({
   headers: {
      'Content-Type': 'application/json',
   },
});

axiosClient.interceptors.request.use(async (config) => {
   config.headers.token = `Bearer ${auth.token}`;
   return config;
});

axiosClient.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data;
      }
      return response;
   },
   (error) => {
      throw error;
   }
);

export default axiosClient;
