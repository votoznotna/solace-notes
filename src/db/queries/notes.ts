import type { Note } from "@prisma/client";
import { db } from "@/db";

export function fetchNotesBySearchFilter(filter: string): Promise<Note[]> {
  return db.note.findMany({
    where: {
      OR: [{ content: { contains: filter } }],
    },
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  });
}

export function fetchAllNotes(): Promise<Note[]> {
  return db.note.findMany({
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  });
}
