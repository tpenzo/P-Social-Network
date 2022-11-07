import express from 'express';
import UserCtr from '../Controllers/UserCtr.js';
import Token from '../middlewares/Token.js';

const router = express.Router();

router.get('/search', Token.verifyToken, UserCtr.search);
router.get('/:_id', Token.verifyToken, UserCtr.getUser);
router.post('/update', Token.verifyToken, UserCtr.updateUser);

export default router;
