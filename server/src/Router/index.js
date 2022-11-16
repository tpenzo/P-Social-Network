import express from 'express';
import AuthRouter from './AuthRouter.js';
import UserRouter from './UserRouter.js';
import PostRouter from './PostRouter.js';
import CommentRouter from '../Router/CommentRouter.js';

const router = express.Router();

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);
router.use('/post', PostRouter);
router.use('/comment', CommentRouter);

export default router;
