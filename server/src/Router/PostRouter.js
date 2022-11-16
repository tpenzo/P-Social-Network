import express from 'express';
import PostCtrl from '../Controllers/PostCtrl.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.post('/create', Token.verifyToken, PostCtrl.createPost);
router.post('/update/:_id', Token.verifyToken, PostCtrl.updatePost);
router.delete('/delete/:_id', Token.verifyToken, PostCtrl.deletePost);
router.get('/', Token.verifyToken, PostCtrl.getPosts);
router.get('/like/:_id', Token.verifyToken, PostCtrl.likePost);
router.get('/unlike/:_id', Token.verifyToken, PostCtrl.unlikePost);

export default router;
