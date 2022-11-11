import { defineStore } from 'pinia';

const data = { loading: false, error: null, success: null };

export const AlertStore = defineStore('alertStore', {
   state: () => data,
   actions: {
      alertLoading() {
          this.loading = true;
      },
      alertError(txtError) {
         this.loading = false;
         this.error = txtError;
      },
      alertSuccess(txtSuccess) {
         this.loading = false;
         this.success = txtSuccess;
      },
      refreshAlert() {
         this.loading = false;
         this.error = null;
         this.success = null;
      },
   },
});
