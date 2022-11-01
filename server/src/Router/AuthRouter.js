import express from 'express';
import AuthCtrl from '../Controllers/AuthCtrl.js';

const router = express.Router();

router.get('/login', AuthCtrl.login);
router.post('/register', AuthCtrl.register);
router.get('/logout', AuthCtrl.logout);
router.get('/refreshtoken', AuthCtrl.refresh_token);

export default router;
