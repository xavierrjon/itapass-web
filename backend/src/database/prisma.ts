import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';
import getEnv from '../utils/validateEnv.js';

const { DATABASE_URL } = getEnv();

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: DATABASE_URL });

  return new PrismaClient({ adapter });
}

export const prisma = globalThis.__itapassPrisma ?? createPrismaClient();

declare global {
  // eslint-disable-next-line no-var
  var __itapassPrisma: ReturnType<typeof createPrismaClient> | undefined;
}

if (process.env.NODE_ENV !== 'production') {
  globalThis.__itapassPrisma = prisma;
}
