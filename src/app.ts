import 'reflect-metadata'
import express, { NextFunction, Request, Response} from 'express'
import 'express-async-errors';
import routes from './routes';
import './database'
import AppError from './errors/AppError';
const app = express();

app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(error)
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'internal server error'
  })
});

export default app;