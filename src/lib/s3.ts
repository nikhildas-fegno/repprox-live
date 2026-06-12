import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_S3_REGION_NAME!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.AWS_STORAGE_BUCKET_NAME!;
const REGION = process.env.AWS_S3_REGION_NAME!;
const FOLDER = "repprox";
const FOLDER_KEY = `${FOLDER}/`; // zero-byte placeholder key

// Module-level flag so we only check/create the folder once per process.
let folderEnsured = false;

async function ensureFolder(): Promise<void> {
  if (folderEnsured) return;
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: FOLDER_KEY }));
    // Placeholder already exists
  } catch {
    // Placeholder missing — create it
    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: FOLDER_KEY,
        Body: "",
        ContentType: "application/x-directory",
      })
    );
  }
  folderEnsured = true;
}

export async function uploadToS3(
  buffer: Buffer,
  filename: string,
  contentType: string
): Promise<string> {
  // Ensure the repprox/ folder placeholder exists in S3
  await ensureFolder();

  // Sanitize filename — keep extension, replace everything else with safe chars
  const ext = filename.split(".").pop()?.toLowerCase() ?? "bin";
  const safe = filename
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 60);
  const key = `${FOLDER_KEY}${Date.now()}-${safe}.${ext}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    })
  );

  return `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`;
}

export async function deleteFromS3(url: string): Promise<void> {
  try {
    const prefix = `https://${BUCKET}.s3.${REGION}.amazonaws.com/`;
    if (!url.startsWith(prefix)) return;
    const key = url.slice(prefix.length);
    await s3.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
  } catch {
    // Non-fatal — log but don't throw
    console.warn("S3 delete failed for", url);
  }
}
