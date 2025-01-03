import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
    url: "postgresql://neondb_owner:jlIwvu6fU2GX@ep-shrill-voice-a5o44jw3.us-east-2.aws.neon.tech/neondb?sslmode=require",
  }
});
