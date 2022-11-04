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
}

export default new UserCtr();
