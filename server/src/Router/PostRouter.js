import express from 'express';
import PostCtrl from '../Controllers/PostCtrl.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.post('/create', Token.verifyToken, PostCtrl.createPost);
router.get('/', Token.verifyToken, PostCtrl.getPosts);

export default router;
