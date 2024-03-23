import type { Note } from "@prisma/client";
import Link from "next/link";

interface PostListProps {
  fetchData: () => Promise<Note[]>;
}

export default async function NoteList({ fetchData }: PostListProps) {
  const notes = await fetchData();

  const renderedNotes = notes.map((note) => {
    return (
      <section key={note.id} className="bg-yellow-200 shadow">
        <Link
          href={`/notes/${note.id}`}
          className="flex justify-between items-center p-2 border rounded"
        >
          <div>{note.content}</div>
        </Link>
      </section>
    );
  });

  return (
    <section>
      <div className="flex  flex-col gap-2">
        {notes && notes.length === 0 ? (
          <div className="flex justify-center">
            <h1>NO DATA</h1>
          </div>
        ) : (
          renderedNotes
        )}
      </div>
    </section>
  );
}
