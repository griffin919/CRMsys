import express from 'express'
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import path from 'path'

//modules
import apiRouter from './routes/apiRouter.js';
import { NotFound, errorHandler } from './middleware/errorHandler.js';
import { connectMongo } from './config/dbconfig.js';


config(); //brings .env through process.env variables here

//initializing packages and importe d function
const app = express();
const __dirname = path.resolve();
app.use(cookieParser());
connectMongo();

//middlewares
app.use(express.json()); //border-parser
app.use(express.urlencoded({extended: true})); // Parse URL-encoded data
app.use(cors());
// app.use(express.static('public'));
app.use('/public', express.static('uploads'));

app.get('/api/uploads/:filename', (req, res) => {
    const { filename } = req.params;
    const imagePath = path.join(__dirname, "backend/public", 'uploads', filename);

    res.sendFile(imagePath);
});
  

app.use('/api', apiRouter);
app.use(NotFound); 
app.use(errorHandler);

app.listen(process.env.PORT, console.log(`Server started on port ${process.env.PORT}`))