import { defineStore } from 'pinia';
import { alert } from '../main.js';
import axiosClient from '../Api/axiosClient.js';
import { userSuggestion } from '../main.js';

export const SuggestionStore = defineStore('suggestionStore', {
   state: () => ({ users: [] }),
   actions: {
      getUserSugg(users) {
         this.users = users;
      },
   },
});

// Call API for SuggestionStore
export const getSuggestions = async () => {
   try {
      const res = await axiosClient.get('/api/user/suggestion');
      userSuggestion.getUserSugg(res.users);
   } catch (error) {
      alert.alertError(error.response.data.message);
   }
};
