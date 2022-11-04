import express from 'express';
import UserCtr from '../Controllers/UserCtr.js';

const router = express.Router();

router.get('/search', UserCtr.search);


export default router