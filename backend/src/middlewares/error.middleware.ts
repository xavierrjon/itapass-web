import type { ErrorRequestHandler, RequestHandler } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/AppError.js';
import { formatZodError } from '../utils/validateRequest.js';

export const notFoundHandler: RequestHandler = (req, res) => {
  res.status(404).json({ message: `Rota não encontrada: ${req.method} ${req.path}` });
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError) {
    res.status(422).json({ message: formatZodError(err) });
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  console.error(err);

  res.status(500).json({ message: 'Erro interno do servidor' });
};
