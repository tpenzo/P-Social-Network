import UserModel from '../Models/User.js';
import bcrypt from 'bcrypt';
import token from '../middlewares/Token.js';

class AuthCtrl {
   // [POST] .../api/auth/login
   async login(req, res) {
      try {
         const user = await UserModel.findOne({ username: req.body.username });
         if (user) {
            // Check password
            const match = await bcrypt.compare(req.body.password, user.password);
            if (match) {
               // Create token and store refresh_token in cookie
               const accessToken = token.access(
                  { _id: user._id, role: user.role },
                  '500s'
               );
               const refreshToken = token.refresh(
                  { _id: user._id, role: user.role },
                  '500s'
               );
               res.cookie('refreshToken', refreshToken, {
                  httpOnly: true,
                  secure: false,
                  sameStime: 'strict',
                  path: '/auth/refresh_token',
                  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
               });
               // Handle user for return
               return res.status(200).json({
                  message: 'Login Success',
                  user,
                  accessToken,
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
   logout(req, res) {
      try {
      } catch (error) {}
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
      res.send('This is login page');
   }
}

export default new AuthCtrl();
