import jwt from 'jsonwebtoken';

class Token {
   access(payload, expires) {
      return jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: expires });
   }

   refresh(payload, expires) {
      return jwt.sign(payload, process.env.KEY_TOKEN_REFRESH, {
         expiresIn: expires,
      });
   }
   checkRefreshToken(req, res, next) {
      const refreshToken = req.cookies?.refreshToken;
      if (refreshToken) {
         jwt.verify(refreshToken, process.env.KEY_TOKEN_REFRESH, (err, user) => {
            if (err) {
               return res.status(403).json({ message: err });
            }
            req.user = user;
            next();
         });
      } else {
         return res.status(401).json("You're not authenticated");
      }
   }
   async verifyToken(req, res, next) {
      try {
         let token = req.headers.token;
         if (token) {
            token = token.split(' ')[1];
            jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
               if (err) {
                  return res.status(403).json({ message: err.message });
               }
               req.uerLogin = user; // GET USER
               next();
            });
         } else {
            return res.status(401).json({ message: "You're not authenticated" });
         }
      } catch (error) {
         return res.status(500).json({ message: error.message });
      }
   }
}

export default new Token();
