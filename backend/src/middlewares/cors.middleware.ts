import cors, { type CorsOptions } from 'cors';
import getEnv from '../utils/validateEnv.js';

const { corsOrigins } = getEnv();

const options: CorsOptions = {
  origin: corsOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

export const corsMiddleware = cors(options);
