import UserModel from '../Models/User.js';
import PostModel from '../Models/Post.js';

class UserCtr {
   // [GET] api/user/search with query username
   async search(req, res) {
      try {
         const users = await UserModel.find({ username: { $regex: req.query.username } })
            .limit(10)
            .select('username email, avatar');
         return res.status(200).json({ message: 'Query successful', users });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] api/user/:_id
   async getUser(req, res) {
      try {
         const user = await UserModel.findById(req.params._id)
            .select('-password')
            .populate('followers following', 'username avatar firstname lastname');
         if (user) {
            // GET POST
            const posts = await PostModel.find({
               user: req.params._id,
            })
               .populate('user likes', 'username avatar firstname lastname')
               .populate({
                  path: 'comments',
                  populate: {
                     path: 'user likes',
                     select: 'username avatar firstname lastname',
                  },
               })
               .sort({ createdAt: -1 });
            return res.status(200).json({ message: 'successfuly', user, posts });
         } else {
            return res.status(400).json({ message: 'User does not exist' });
         }
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] api/user/update
   async updateUser(req, res) {
      try {
         await UserModel.findByIdAndUpdate({ _id: req.userLogin._id }, req.body);
         return res.status(200).json({ message: 'Update Success' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] api/user/follow/:_id
   async followUser(req, res) {
      try {
         await UserModel.findByIdAndUpdate(
            { _id: req.userLogin._id },
            { $push: { following: req.params._id } }
         );
         await UserModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $push: { followers: req.userLogin._id } }
         );
         return res.status(200).json({ message: 'Follow successfuly' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] api/user/unfollow/:_id
   async unFollowUser(req, res) {
      try {
         await UserModel.findByIdAndUpdate(
            { _id: req.userLogin._id },
            { $pull: { following: req.params._id } }
         );
         await UserModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $pull: { followers: req.userLogin._id } }
         );
         return res.status(200).json({ message: 'Unfollow successfuly' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] api/user/unfollow/:_id
   async unFollowUser(req, res) {
      try {
         await UserModel.findByIdAndUpdate(
            { _id: req.userLogin._id },
            { $pull: { following: req.params._id } }
         );
         await UserModel.findByIdAndUpdate(
            { _id: req.params._id },
            { $pull: { followers: req.userLogin._id } }
         );
         return res.status(200).json({ message: 'Unfollow successfuly' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] api/user/suggestion/
   async suggestionUser(req, res) {
      try {
         const newArr = [...req.userLogin.following, req.userLogin._id];
         const num = req.query.num || 5;

         const users = await UserModel.aggregate([
            { $match: { _id: { $nin: newArr } } },
            { $sample: { size: Number(num) } },
            {
               $lookup: {
                  from: 'users',
                  localField: 'followers',
                  foreignField: '_id',
                  as: 'followers',
               },
            },
            {
               $lookup: {
                  from: 'users',
                  localField: 'following',
                  foreignField: '_id',
                  as: 'following',
               },
            },
         ]).project('-password');
         return res.status(200).json({ users });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }
}

export default new UserCtr();
