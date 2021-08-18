import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());

export default app;