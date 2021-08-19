import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import skillsRoutes from './routes/skills.routes';
const app = express();

//MIDDLEWARES from configurate
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());

//ROUTES
app.use('/api/skills', skillsRoutes);

export default app;