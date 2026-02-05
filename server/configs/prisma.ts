import "dotenv/config";
import pg from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
// Keep your custom path here
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

// This check prevents the DNS crash
if (!connectionString || connectionString === "undefined") {
  throw new Error(
    "❌ DATABASE_URL is missing! Check if your .env file is in the /server folder.",
  );
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export { prisma };
