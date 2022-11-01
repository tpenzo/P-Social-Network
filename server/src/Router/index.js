import express from 'express';
import AuthRouter from './AuthRouter.js';

const router = express.Router();

router.use('/auth', AuthRouter);

export default router;
