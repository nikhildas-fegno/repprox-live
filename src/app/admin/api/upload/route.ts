import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { uploadToS3 } from "@/lib/s3";

const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
const MAX_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: `Unsupported file type. Allowed: JPEG, PNG, WebP, GIF, SVG` },
      { status: 415 }
    );
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File exceeds 5 MB limit" }, { status: 413 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const url = await uploadToS3(buffer, file.name, file.type);
    return NextResponse.json({ url });
  } catch (err) {
    console.error("S3 upload error:", err);
    return NextResponse.json({ error: "Upload failed. Try again." }, { status: 500 });
  }
}
