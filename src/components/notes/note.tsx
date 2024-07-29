"use client";

import type { Note } from "@prisma/client";
import Link from "next/link";

interface NoteProps {
  note: Note;
}

export default function NoteItem({ note }: NoteProps) {
  return (
    <section className="bg-yellow-200 shadow">
      <Link
        href={`/notes/${note.id}`}
        className="flex justify-between items-center p-2 border rounded"
        aria-label="Go to Note Edit Page"
      >
        <div>{note.content}</div>
      </Link>
    </section>
  );
}
