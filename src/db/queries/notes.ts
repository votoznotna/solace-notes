import type { Note } from "@prisma/client";
import { db } from "@/db";
import { cache } from "@/lib/cache";

export function fetchNotesBySearchFilter(filter: string): Promise<Note[]> {
  return db.note.findMany({
    where: {
      OR: [{ content: { contains: filter, mode: "insensitive" } }],
    },
    orderBy: [
      {
        updatedAt: "desc",
      },
    ],
  });
}

// export function fetchAllNotes(): Promise<Note[]> {
//   return db.note.findMany({
//     orderBy: [
//       {
//         updatedAt: "desc",
//       },
//     ],
//   });
// }

export const fetchAllNotes = cache(
  () => {
    return db.note.findMany({
      orderBy: [
        {
          updatedAt: "desc",
        },
      ],
    });
  },
  ["/", "fetchAllNotes"],
  { revalidate: 60 * 60 * 24, tags: ["notes"] }
);

export const getNoteById = cache(
  (id: number) => {
    return db.note.findFirst({
      where: { id },
    });
  },
  ["notes", "getNoteById"]
);

// export const getPostById = cache(
//   async function getPostById(postId) {
//     return await Post.findById(postId).populate("author", "username").lean();
//   },
//   ["posts", "getPostById"]
// );
