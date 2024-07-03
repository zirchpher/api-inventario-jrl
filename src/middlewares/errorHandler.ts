import { Request, Response, NextFunction } from 'express';

// Interface para los errores
interface Error {
  status?: number;
  message?: string;
  stack?: string;
}

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Establecemos un código de estado por defecto si no se proporciona
  const status = err.status || 500;
  // Establecemos un mensaje por defecto si no se proporciona
  const message = err.message || 'Internal Server Error';

  // Enviamos la respuesta de error
  res.status(status).json({
    message,
    // Incluimos la pila de errores solo en desarrollo
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

export default errorHandler;
