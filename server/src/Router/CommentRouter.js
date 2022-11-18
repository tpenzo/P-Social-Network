import express from 'express';
import CommentCtrl from '../Controllers/CommentCtrl.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.post('/create', Token.verifyToken, CommentCtrl.create);
router.delete('/:_id/delete', Token.verifyToken, CommentCtrl.delete)
router.patch('/:_id/update', Token.verifyToken, CommentCtrl.update)

export default router;
