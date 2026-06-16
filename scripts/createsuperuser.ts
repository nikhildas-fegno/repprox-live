/**
 * Create or update an admin user (upsert by email).
 *
 * Values: CLI args override environment variables.
 *
 * CLI (local):
 *   node_modules/.bin/tsx scripts/createsuperuser.ts -- --email=admin@example.com --password=secret
 *
 * Env (e.g. .env):
 *   ADMIN_EMAIL=admin@example.com
 *   ADMIN_PASSWORD=your-secure-password
 *   ADMIN_NAME=Optional display name
 *
 * Docker:
 *   docker compose exec app node scripts/createsuperuser.js -- -e admin@example.com -p secret
 */

import { parseArgs } from "node:util";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

function createDb() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({ adapter } as never);
}

function argvForParseArgs(): string[] {
  const slice = process.argv.slice(2);
  let i = 0;
  if (i < slice.length && slice[i] && !slice[i].startsWith("-")) i += 1;
  if (i < slice.length && slice[i] === "--") i += 1;
  return slice.slice(i);
}

function expandEqualsFlags(args: string[]): string[] {
  const out: string[] = [];
  for (const arg of args) {
    if (arg.startsWith("--") && arg.length > 2 && arg.includes("=") && !arg.startsWith("--no-")) {
      const eq = arg.indexOf("=");
      out.push(arg.slice(0, eq), arg.slice(eq + 1));
      continue;
    }
    if (arg.startsWith("-") && arg.length > 2 && arg[1] !== "-" && arg.includes("=")) {
      const eq = arg.indexOf("=");
      out.push(arg.slice(0, eq), arg.slice(eq + 1));
      continue;
    }
    out.push(arg);
  }
  return out;
}

function printHelp() {
  console.log(`
createsuperuser — add or update an admin user in the database

Usage:
  node_modules/.bin/tsx scripts/createsuperuser.ts -- [options]

Options:
  -e, --email     Admin email (required)
  -p, --password  Plain password; will be hashed (required)
  -n, --name      Display name (optional, defaults to email prefix)
  -h, --help      Show this help

Environment (used when flag omitted):
  ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME

Examples:
  node_modules/.bin/tsx scripts/createsuperuser.ts -- --email=you@co.com --password='Str0ng!'
  ADMIN_EMAIL=a@b.com ADMIN_PASSWORD=x node_modules/.bin/tsx scripts/createsuperuser.ts

Docker:
  docker compose exec app node scripts/createsuperuser.js -- -e you@co.com -p 'Str0ng!'
`);
}

async function main() {
  const args = expandEqualsFlags(argvForParseArgs());

  const { values } = parseArgs({
    args,
    options: {
      email: { type: "string", short: "e" },
      password: { type: "string", short: "p" },
      name: { type: "string", short: "n" },
      help: { type: "boolean", short: "h" },
    },
    allowPositionals: false,
  });

  if (values.help) {
    printHelp();
    process.exit(0);
  }

  const email = (values.email ?? process.env.ADMIN_EMAIL)?.trim();
  const password = values.password ?? process.env.ADMIN_PASSWORD;
  const name = (values.name ?? process.env.ADMIN_NAME)?.trim() || undefined;

  if (!email) {
    console.error("Error: email is required (--email or ADMIN_EMAIL).");
    printHelp();
    process.exit(1);
  }

  if (!password || String(password).length < 1) {
    console.error("Error: password is required (--password or ADMIN_PASSWORD).");
    process.exit(1);
  }

  if (values.password !== undefined) {
    console.warn(
      "Note: passing --password on the command line may expose it in shell history.",
    );
  }

  const db = createDb();

  try {
    const hashedPassword = await bcrypt.hash(String(password), 10);
    const existed = Boolean(await db.adminUser.findUnique({ where: { email } }));

    const user = await db.adminUser.upsert({
      where: { email },
      create: {
        email,
        name: name ?? email.split("@")[0] ?? "Admin",
        password: hashedPassword,
      },
      update: {
        password: hashedPassword,
        ...(name !== undefined ? { name } : {}),
      },
    });

    console.log("Done.");
    console.log(`  Email: ${user.email}`);
    console.log(`  Name:  ${user.name}`);
    console.log(existed ? "  (updated existing user)" : "  (created)");
  } finally {
    await db.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
