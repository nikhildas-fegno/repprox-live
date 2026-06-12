"use client";

import { useActionState, useCallback } from "react";
import { createBlogAction, updateBlogAction } from "@/actions/admin/blogs";
import { FormField, TextInput, Select, FormActions } from "@/components/admin/form-field";
import { ImageUpload } from "@/components/admin/image-upload";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import type { Blog, Category } from "@/generated/prisma/client";

interface Props {
  categories: Category[];
  blog?: Blog;
  allBlogs?: Pick<Blog, "id" | "title">[];
  relatedIds?: string[];
}

export default function BlogForm({ categories, blog, allBlogs = [], relatedIds = [] }: Props) {
  const action = blog ? updateBlogAction.bind(null, blog.id) : createBlogAction;
  const [state, formAction, pending] = useActionState(action, {});

  const slugify = useCallback((val: string) =>
    val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), []);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const slugEl = document.getElementById("slug") as HTMLInputElement;
    if (slugEl && !blog) slugEl.value = slugify(e.target.value);
  }

  function handleSlugChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Prevent spaces — replace with hyphens as user types
    e.target.value = e.target.value.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }

  const otherBlogs = allBlogs.filter((b) => b.id !== blog?.id);

  return (
    <form action={formAction} className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 bp-corners">
      {state?.error && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{state.error}</div>
      )}

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Title" name="title" required error={state?.fieldErrors?.title}>
          <TextInput id="title" name="title" defaultValue={blog?.title} placeholder="Blog post title" onChange={handleTitleChange} />
        </FormField>
        <FormField label="Slug" name="slug" required error={state?.fieldErrors?.slug}>
          <TextInput id="slug" name="slug" defaultValue={blog?.slug} placeholder="url-friendly-slug" onChange={handleSlugChange} />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Author" name="author" required error={state?.fieldErrors?.author}>
          <TextInput name="author" defaultValue={blog?.author} placeholder="Author name" />
        </FormField>
        <FormField label="Category" name="categoryId" error={state?.fieldErrors?.categoryId}>
          <Select name="categoryId" defaultValue={blog?.categoryId ?? ""}>
            <option value="">No category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField label="Excerpt" name="excerpt" error={state?.fieldErrors?.excerpt}>
        <TextInput name="excerpt" defaultValue={blog?.excerpt ?? ""} placeholder="Short description (optional)" />
      </FormField>

      <FormField label="Content" name="content" required error={state?.fieldErrors?.content}>
        <RichTextEditor name="content" defaultValue={blog?.content} placeholder="Blog content..." />
      </FormField>

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Cover Image" name="imageUrl" error={state?.fieldErrors?.imageUrl}>
          <ImageUpload name="imageUrl" defaultValue={blog?.imageUrl} label="Cover Image" />
        </FormField>
        <FormField label="Image Alt Text" name="imageAlt" error={state?.fieldErrors?.imageAlt}>
          <TextInput name="imageAlt" defaultValue={blog?.imageAlt ?? ""} placeholder="Descriptive alt text" />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <FormField label="Status" name="status" required error={state?.fieldErrors?.status}>
          <Select name="status" defaultValue={blog?.status ?? "DRAFT"}>
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </Select>
        </FormField>
        <FormField label="Featured" name="featured" error={state?.fieldErrors?.featured}>
          <Select name="featured" defaultValue={blog?.featured ? "true" : "false"}>
            <option value="false">No</option>
            <option value="true">Yes — show as featured</option>
          </Select>
        </FormField>
      </div>

      {otherBlogs.length > 0 && (
        <FormField label="Related Blogs" name="relatedIds" error={state?.fieldErrors?.relatedIds}>
          <div className="rounded-lg border border-slate-200 bg-white divide-y divide-slate-100 max-h-48 overflow-y-auto">
            {otherBlogs.map((b) => (
              <label key={b.id} className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  name="relatedIds"
                  value={b.id}
                  defaultChecked={relatedIds.includes(b.id)}
                  className="w-4 h-4 rounded border-slate-300 text-[#2081ED] cursor-pointer"
                />
                <span className="text-sm text-slate-700">{b.title}</span>
              </label>
            ))}
          </div>
        </FormField>
      )}

      <FormActions>
        <button type="submit" disabled={pending} className="inline-flex items-center gap-2 rounded-lg bg-[#2081ED] hover:bg-[#1A6FD6] text-white text-sm font-medium px-5 py-2.5 transition-colors disabled:opacity-60 cursor-pointer">
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? "Saving…" : blog ? "Update Blog" : "Create Blog"}
        </button>
        <Link href="/admin/blogs" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Cancel</Link>
      </FormActions>
    </form>
  );
}
