import PostModel from '../Models/Post.js';

class PostCtrl {
   async getPosts(req, res) {
      try {
         const posts = await PostModel.find({
            user: [...req.userLogin.following, req.userLogin._id],
         })
            .populate('user likes', 'username avatar firstname lastname')
            .sort({ createdAt: -1 });
         return res
            .status(200)
            .json({ message: 'Success!', result: posts.length, posts });
      } catch (error) {
         console.log(error.message);
         return res.status(500).json({ message: error.message, error });
      }
   }

   async createPost(req, res) {
      try {
         const newPost = new PostModel({ ...req.body, user: req.userLogin._id });
         await newPost.save();

         const post = await PostModel.findById({ _id: newPost._id }).populate(
            'user likes',
            'username avatar firstname lastname'
         );
         return res
            .status(200)
            .json({ message: 'Post created successfully', newPost: post });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   async deletePost(req, res) {
      try {
         await PostModel.findOneAndDelete({ _id: req.params._id });
         return res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   async updatePost(req, res) {
      try {
         await PostModel.findByIdAndUpdate({ _id: req.params._id }, req.body);
         return res.status(200).json({ message: 'Update Success' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }
}

export default new PostCtrl();
