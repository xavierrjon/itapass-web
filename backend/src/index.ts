import express from 'express';
import getEnv from './utils/validateEnv.js';
import router from './router/index.js';
import { corsMiddleware } from './middlewares/cors.middleware.js';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js';
import { prisma } from './database/prisma.js';

const app = express();
const { PORT } = getEnv();

app.use(corsMiddleware);
app.use(express.json());
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function shutdown(signal: string) {
  console.log(`${signal} received, closing server`);

  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on('SIGINT', () => void shutdown('SIGINT'));
process.on('SIGTERM', () => void shutdown('SIGTERM'));
