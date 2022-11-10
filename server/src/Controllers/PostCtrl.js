import PostModel from '../Models/Post.js';

class PostCtrl {
   async createPost(req, res) {
      try {
         const newMPost = new PostModel({ ...req.body, user: req.userLogin });
         await newMPost.save();
         return res.status(200).json({ message: 'Post created successfully', newMPost });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }
}

export default new PostCtrl();
