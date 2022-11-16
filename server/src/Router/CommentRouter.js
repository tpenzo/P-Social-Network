import express from 'express';
import CommentCtrl from '../Controllers/CommentCtrl.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.post('/create', Token.verifyToken, CommentCtrl.create);

export default router;
