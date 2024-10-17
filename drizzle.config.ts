import { defineConfig } from "drizzle-kit";
// import ds from './src/app/_lib/_db/'
 export default defineConfig({
  dialect: "postgresql",
  schema: "./src/app/_lib/_db/schema.ts",
  out: "./src/app/_lib/_db/migrations",
//   driver: "pglite", // Use the imported driver object
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
  verbose: true,    
  strict: true,
  casing: 'snake_case'
});
