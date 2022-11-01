import express from 'express';
import AuthCtrl from '../Controllers/AuthCtrl.js';

const router = express.Router();

router.get('/login', AuthCtrl.login);

export default router;
