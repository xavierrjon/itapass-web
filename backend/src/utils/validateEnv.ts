import { cleanEnv, port, str } from 'envalid';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const defaultOrigins = 'http://localhost:3000';

export default function getEnv() {
  const env = cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
    DATABASE_URL: str(),
    CORS_ORIGINS: str({ default: defaultOrigins }),
  });

  return {
    ...env,
    corsOrigins: env.CORS_ORIGINS.split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  };
}
