import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const db = new PrismaClient({ adapter } as never);

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@repprox.com";
  const password = process.env.ADMIN_PASSWORD ?? "Admin@123456";

  const existing = await db.adminUser.findUnique({ where: { email } });
  if (existing) {
    console.log("Admin user already exists:", email);
    return;
  }

  const hashed = await bcrypt.hash(password, 12);
  await db.adminUser.create({ data: { email, password: hashed, name: "Admin" } });
  console.log("✓ Admin user created:", email);
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
