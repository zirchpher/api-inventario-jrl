import express from 'express';
import { json } from 'body-parser';
import dotenv from 'dotenv';
import categoryRoutes from './routes/categoryRoutes';
import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app = express();

app.use(json());

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la empresa JRL E.I.R.L.');
});

app.use('/api', categoryRoutes);

// Middleware de manejo de errores debe ir al final después de todas las rutas
app.use(errorHandler);

export default app;
