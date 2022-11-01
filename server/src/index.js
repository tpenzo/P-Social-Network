import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import router from './Router/index.js';

// Instance Server
const app = express();

// Config
dotenv.config();
morgan('tiny');

// Create API
app.use('/api', router);

app.listen(process.env.PORT, () => {
   console.log(`app listening at http://localhost:${process.env.PORT}`);
});
