class AuthCtrl {
   // [GET] ...api/auth/login
   login(req, res) {
      res.send('This is login page');
   }

   // [GET] ...api/auth/logout
   logout(req, res) {
      res.send('This is login page');
   }

   // [POST] ...api/auth/register
   register(req, res) {
      res.send('This is login page');
   }

   // [GET] ...api/auth/refreshtoken
   refresh_token(req, res) {
      res.send('This is login page');
   }
}

export default new AuthCtrl();
