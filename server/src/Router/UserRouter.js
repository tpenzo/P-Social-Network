import express from 'express';
import UserCtr from '../Controllers/UserCtrl.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.get('/search', Token.verifyToken, UserCtr.search);
router.get('/:_id', Token.verifyToken, UserCtr.getUser);
router.post('/update', Token.verifyToken, UserCtr.updateUser);
router.get('/follow/:_id', Token.verifyToken, UserCtr.followUser);
router.get('/unfollow/:_id', Token.verifyToken, UserCtr.unFollowUser);

export default router;
