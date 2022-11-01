import UserModel from '../Models/User.js';
import bcrypt from 'bcrypt';

class AuthCtrl {
   // [GET] .../api/auth/login
   async login(req, res) {
      try {
         const user = await UserModel.findOne({ username: req.body.username });
         if (user) {
            // Check password
            const match = bcrypt.compare(req.body.password, user.password);
            if (match) {
               // Create token and store refresh_token in cookie

               // Handle user for return

               return res.status(200).json({
                  message: 'Login Success',
                  user,
                  accessToken: 'This is token for you',
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
