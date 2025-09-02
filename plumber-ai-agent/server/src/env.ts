import { config } from 'dotenv'
import { z } from 'zod'

config()

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().min(1).default("postgresql://user:pass@localhost:5432/plumber_ai")
})

export const env = envSchema.parse(process.env)
