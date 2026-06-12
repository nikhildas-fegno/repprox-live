"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Upload, X, Loader2, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  defaultValue?: string | null;
  label?: string;
}

export function ImageUpload({ name, defaultValue, label = "Image" }: Props) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setError(null);
    setUploading(true);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/admin/api/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      setUrl(data.url);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  return (
    <div className="space-y-2">
      {/* Hidden input carries the S3 URL to the server action */}
      <input type="hidden" name={name} value={url} />

      {url ? (
        <div className="relative group rounded-lg overflow-hidden border border-slate-200 bg-slate-50 w-full aspect-video max-h-48">
          <Image
            src={url}
            alt={label}
            fill
            className="object-contain"
            unoptimized
          />
          <button
            type="button"
            onClick={() => setUrl("")}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600 cursor-pointer"
            title="Remove image"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className={cn(
            "relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed cursor-pointer transition-colors px-4 py-8",
            uploading
              ? "border-[#2081ED]/40 bg-[#2081ED]/5 cursor-not-allowed"
              : "border-slate-200 bg-slate-50 hover:border-[#2081ED]/50 hover:bg-[#2081ED]/5"
          )}
        >
          {uploading ? (
            <>
              <Loader2 className="w-6 h-6 text-[#2081ED] animate-spin" />
              <p className="text-xs text-slate-500">Uploading Image…</p>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-slate-400" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-slate-700">
                  <span className="text-[#2081ED]">Click to upload</span> or drag & drop
                </p>
                <p className="text-xs text-slate-400 mt-0.5">JPEG, PNG, WebP, GIF, SVG · max 5 MB</p>
              </div>
              <Upload className="w-4 h-4 text-slate-300 absolute bottom-3 right-3" />
            </>
          )}
        </div>
      )}

      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <X className="w-3 h-3" /> {error}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
        className="sr-only"
        onChange={handleChange}
        disabled={uploading}
      />
    </div>
  );
}
