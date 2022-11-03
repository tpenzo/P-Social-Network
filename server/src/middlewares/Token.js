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
}

export default new Token();
