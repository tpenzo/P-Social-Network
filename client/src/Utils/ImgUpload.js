export const checkImage = (file) => {
   let err = '';
   if (!file) return (err = 'File does not exist.');
   if (file.size > 1024 * 1024) {
      err = 'The largest image size is 1mb.';
   }
   if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      err = 'Image format is incorrect.';
   return err;
};

export const imageUpload = async (image) => {
   let data;
   try {
      const formData = new FormData();
      if (image.camera) {
         formData.append('file', image.camera);
      } else {
         formData.append('file', image);
      }
      formData.append('upload_preset', 'gpiktlek');
      formData.append('cloud_name', 'dykgq5bav');
      // Call api cloudinary
      const res = await fetch('https://api.cloudinary.com/v1_1/dykgq5bav/upload', {
         method: 'POST',
         body: formData,
      });
      data = await res.json();
   } catch (error) {
      console.log(error.message);
   }
   return { public_id: data.public_id, url: data.secure_url };
};
