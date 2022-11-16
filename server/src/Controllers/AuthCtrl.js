import bcrypt from 'bcrypt';
import UserModel from '../Models/User.js';
import token from '../middlewares/Token.js';
import PostModel from '../Models/Post.js';

class AuthCtrl {
   // [POST] .../api/auth/login
   async login(req, res) {
      try {
         const user = await UserModel.findOne({ username: req.body.username }).populate(
            'followers following',
            '-password'
         );
         if (user) {
            // Check password
            const match = await bcrypt.compare(req.body.password, user.password);
            if (match) {
               // Create token and store refresh_token in cookie
               const accessToken = token.access(
                  { _id: user._id, role: user.role },
                  '500s'
               );
               // Get posts of userLogin
               const posts = await PostModel.find({
                  user: user._id,
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

               // Handle user for return
               const { password, ...others } = user._doc;
               return res.status(200).json({
                  message: 'Login Success',
                  user: { ...others },
                  accessToken,
                  posts,
               });
            } else {
               return res.status(403).json({ message: 'Incorrect password' });
            }
         } else {
            return res.status(400).json({ message: 'This username does not exist' });
         }
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] .../api/auth/logout
   async logout(req, res) {
      try {
         res.clearCookie('refreshToken');
         return res.status(200).json({ message: 'Logout success' });
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [POST] .../api/auth/register
   async register(req, res) {
      try {
         const isUser = await UserModel.findOne({ username: req.body.username });
         if (isUser) {
            return res.status(400).json({ message: 'This username already exists' });
         } else {
            // Hash password
            const hasPassword = await bcrypt.hash(req.body.password, 10);
            // Store in DB
            const dataUser = { ...req.body, password: hasPassword };
            const newUser = new UserModel(dataUser);
            await newUser.save();
            // Return
            return res.status(200).json({ message: 'Register Success', user: newUser });
         }
      } catch (error) {
         return res.status(500).json({ message: error.message, error });
      }
   }

   // [GET] .../api/auth/refreshtoken
   refresh_token(req, res) {
      res.send('This is refresh token');
   }
}

export default new AuthCtrl();
