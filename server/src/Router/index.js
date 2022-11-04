import express from 'express';
import AuthRouter from './AuthRouter.js';
import UserRouter from './UserRouter.js';

const router = express.Router();

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);

export default router;
