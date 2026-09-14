import { cleanEnv, port } from 'envalid';
import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export default function getEnv() {
  return cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
  });
}