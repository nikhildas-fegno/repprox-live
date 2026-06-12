"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { createSession, deleteSession } from "@/lib/session";

export type AuthState = { error?: string };

// Dummy hash run when user is not found — keeps response time constant
// so an attacker can't enumerate valid email addresses via timing.
const DUMMY_HASH = "$2a$12$dummy.hash.that.never.matches.any.real.password.value";

export async function loginAction(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const email = (formData.get("email") as string | null)?.trim().toLowerCase();
  const password = formData.get("password") as string | null;

  if (!email || !password) return { error: "Email and password are required." };

  const user = await db.adminUser.findUnique({ where: { email } });

  // Always run bcrypt regardless of whether the user exists
  const hashToCheck = user?.password ?? DUMMY_HASH;
  const valid = await bcrypt.compare(password, hashToCheck);

  if (!user || !valid) return { error: "Invalid credentials." };

  await createSession({ adminId: user.id, email: user.email });
  redirect("/admin");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/admin/login");
}
