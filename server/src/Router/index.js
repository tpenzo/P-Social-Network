import express from 'express';
import AuthRouter from './AuthRouter.js';
import UserRouter from './UserRouter.js';
import PostRouter from './PostRouter.js'

const router = express.Router();

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);
router.use('/post', PostRouter)

export default router;
