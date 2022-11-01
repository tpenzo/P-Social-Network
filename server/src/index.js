import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import router from './Router/index.js';
import dbConnect from './Configs/dbConnect.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Instance Server
const app = express();

// SETUP Server
dotenv.config();
morgan('tiny');
app.use(cors());
app.use(express.json({ extends: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connecttion DB
dbConnect();

// Create API
app.use('/api', router);

app.listen(process.env.PORT, () => {
   console.log(`app listening at http://localhost:${process.env.PORT}`);
});
