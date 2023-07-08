import express from 'express'
import { config } from 'dotenv';

//modules
import offenderRouter from './routes/offenderRouter.js'
import userRouter from './routes/userRouter.js';
import { NotFound, errorHandler } from './middleware/errorHandler.js';
import { connectMongo } from './config/dbconfig.js';

config(); //brings .env through process.env variables here

//initializing packages and imported function
const app = express();
connectMongo();


//middlewares
app.use(express.json()); //border-parser
app.use(express.urlencoded({extended: true})); // Parse URL-encoded data
app.use('/user/api', userRouter);
app.use('/offender/api', offenderRouter);
app.use(NotFound); 
app.use(errorHandler);

app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`))