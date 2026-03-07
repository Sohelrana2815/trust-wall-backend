import { Server } from "http";
import app from "./app.js";
import { PrismaClient } from "@prisma/client";

// Singleton logic to prevent connection leaks during 'tsx watch'
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

let server: Server;

async function startServer() {
  try {
    // 1. Connect to PostgreSQL
    await prisma.$connect();
    console.log("🐘 Database connected successfully!");

    // 2. Start the Express Server
    server = app.listen(5000, () => {
      console.log(`🚀 Server is running on port 5000`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err);
    process.exit(1);
  }
}
startServer();
