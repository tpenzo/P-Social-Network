import { homePost } from '../main.js';
import { alert } from '../main.js';

export const createPost = async (images, content) => {
   try {
      // ==> Loading
      alert.alertLoading();
     
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
