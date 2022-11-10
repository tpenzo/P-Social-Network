import express from 'express';
import PostCtrl from '../Controllers/PostCtrl.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.get('/create', Token.verifyToken, PostCtrl.createPost);

export default router;
