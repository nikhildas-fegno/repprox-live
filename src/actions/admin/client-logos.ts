"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";
import { z } from "zod";

const ClientLogoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  logoUrl: z.string().min(1, "Logo image is required"),
  order: z.string().optional().transform((v) => (v ? parseInt(v) : 0)),
  active: z.string().optional().transform((v) => v === "true"),
});

async function requireAuth() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
}

export type ClientLogoState = { error?: string; fieldErrors?: Record<string, string[]> };

export async function createClientLogoAction(
  _prev: ClientLogoState,
  formData: FormData
): Promise<ClientLogoState> {
  await requireAuth();
  const result = ClientLogoSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.clientLogo.create({ data: result.data });
  revalidatePath("/admin/client-logos");
  redirect("/admin/client-logos");
}

export async function updateClientLogoAction(
  id: string,
  _prev: ClientLogoState,
  formData: FormData
): Promise<ClientLogoState> {
  await requireAuth();
  const result = ClientLogoSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) return { fieldErrors: result.error.flatten().fieldErrors };
  await db.clientLogo.update({ where: { id }, data: result.data });
  revalidatePath("/admin/client-logos");
  redirect("/admin/client-logos");
}

export async function deleteClientLogoAction(id: string) {
  await requireAuth();
  await db.clientLogo.delete({ where: { id } });
  revalidatePath("/admin/client-logos");
}
