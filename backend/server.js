import express from 'express'
import { config } from 'dotenv';

//modules
import offenderRouter from './routes/offenderRouter.js'
import userRouter from './routes/userRouter.js';
import { NotFound, errorHandler } from './middleware/errorHandler.js';

//brings .env through process.env variables here
config();

//middlewares
const app = express();

//middlewares
app.use('/user/api', userRouter);
app.use('/offender/api', offenderRouter);
app.use(NotFound);
app.use(errorHandler);

app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`))