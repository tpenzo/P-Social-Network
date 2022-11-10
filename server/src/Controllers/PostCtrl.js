import PostModel from '../Models/Post.js';

class PostCtrl {
   async createPost(req, res) {
      try {
         const newPost = new PostModel({ ...req.body, user: req.userLogin._id });
         await newPost.save();
         return res.status(200).json({ message: 'Post created successfully', newPost });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }
}

export default new PostCtrl();
