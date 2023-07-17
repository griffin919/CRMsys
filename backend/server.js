import express from 'express'
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

//modules
import apiRouter from './routes/apiRouter.js';
import { NotFound, errorHandler } from './middleware/errorHandler.js';
import { connectMongo } from './config/dbconfig.js';


config(); //brings .env through process.env variables here

//initializing packages and importe d function
const app = express();
app.use(cookieParser());
connectMongo();

//middlewares
app.use(express.json()); //border-parser
app.use(express.urlencoded({extended: true})); // Parse URL-encoded data

app.use('/api', apiRouter);
app.use(NotFound); 
app.use(errorHandler);

app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`))