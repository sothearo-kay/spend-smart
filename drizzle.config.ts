import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/app/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});