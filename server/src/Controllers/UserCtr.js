import UserModel from '../Models/User.js';

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
         const user = await UserModel.findById(req.params._id).select('-password');
         if (user) {
            return res.status(200).json({ message: 'successfuly', user });
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
         await UserModel.findByIdAndUpdate({ _id: req.uerLogin._id }, req.body);
         return res.status(200).json({ message: 'Update Success' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }
}

export default new UserCtr();
