import express from 'express';
import PostCtrl from '../Controllers/PostCtrl.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.post('/create', Token.verifyToken, PostCtrl.createPost);
router.delete('/:_id', Token.verifyToken, PostCtrl.deletePost);
router.get('/', Token.verifyToken, PostCtrl.getPosts);

export default router;
