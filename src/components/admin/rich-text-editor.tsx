"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExt from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useState, useCallback } from "react";
import {
  Bold, Italic, Strikethrough,
  List, ListOrdered, Quote,
  Link as LinkIcon, Undo, Redo,
  Minus,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

const TEXT_TYPES = [
  { value: "p",  label: "Paragraph" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
  { value: "h5", label: "Heading 5" },
  { value: "h6", label: "Heading 6" },
];

interface Props {
  name: string;
  defaultValue?: string;
  placeholder?: string;
}

export function RichTextEditor({ name, defaultValue = "", placeholder = "Start writing…" }: Props) {
  const [html, setHtml] = useState(defaultValue);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
      LinkExt.configure({ openOnClick: false, autolink: true }),
      Placeholder.configure({ placeholder }),
    ],
    content: defaultValue,
    onUpdate({ editor }) {
      setHtml(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[180px] px-4 py-3",
      },
    },
  });

  const setLink = useCallback(() => {
    const prev = editor?.getAttributes("link").href ?? "";
    const url = window.prompt("URL", prev);
    if (url === null) return;
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  }, [editor]);

  // Derive current block type for the dropdown
  const activeLevel = ([1, 2, 3, 4, 5, 6] as Level[]).find(
    (l) => editor?.isActive("heading", { level: l })
  );
  const currentType = activeLevel ? `h${activeLevel}` : "p";

  function handleTypeChange(val: string) {
    if (!editor) return;
    if (val === "p") {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().setHeading({ level: parseInt(val[1]) as Level }).run();
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden focus-within:border-[#2081ED] focus-within:ring-2 focus-within:ring-[#2081ED]/10 transition-all">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-slate-100 bg-slate-50 px-2 py-1.5">

        {/* Text type dropdown */}
        <select
          value={currentType}
          onChange={(e) => handleTypeChange(e.target.value)}
          className="h-7 rounded border border-slate-200 bg-white px-1.5 text-xs font-medium text-slate-700 focus:outline-none focus:border-[#2081ED] cursor-pointer mr-1"
        >
          {TEXT_TYPES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>

        <Divider />

        <ToolBtn onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive("bold")} title="Bold"><Bold className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive("italic")} title="Italic"><Italic className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn onClick={() => editor?.chain().focus().toggleStrike().run()} active={editor?.isActive("strike")} title="Strikethrough"><Strikethrough className="w-3.5 h-3.5" /></ToolBtn>

        <Divider />

        <ToolBtn onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive("bulletList")} title="Bullet list"><List className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive("orderedList")} title="Ordered list"><ListOrdered className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn onClick={() => editor?.chain().focus().toggleBlockquote().run()} active={editor?.isActive("blockquote")} title="Blockquote"><Quote className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn onClick={() => editor?.chain().focus().setHorizontalRule().run()} title="Divider"><Minus className="w-3.5 h-3.5" /></ToolBtn>

        <Divider />

        <ToolBtn onClick={setLink} active={editor?.isActive("link")} title="Link"><LinkIcon className="w-3.5 h-3.5" /></ToolBtn>

        <Divider />

        <ToolBtn onClick={() => editor?.chain().focus().undo().run()} disabled={!editor?.can().undo()} title="Undo"><Undo className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn onClick={() => editor?.chain().focus().redo().run()} disabled={!editor?.can().redo()} title="Redo"><Redo className="w-3.5 h-3.5" /></ToolBtn>
      </div>

      {/* Editor body */}
      <EditorContent editor={editor} />

      {/* Hidden input — stays in sync via onUpdate */}
      <input type="hidden" name={name} value={html} />
    </div>
  );
}

function ToolBtn({
  onClick, active, disabled, title, children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        "p-1.5 rounded transition-colors cursor-pointer",
        active ? "bg-[#2081ED]/10 text-[#2081ED]" : "text-slate-500 hover:bg-slate-200 hover:text-slate-800",
        disabled && "opacity-30 cursor-not-allowed pointer-events-none",
      )}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-4 bg-slate-200 mx-1" />;
}
