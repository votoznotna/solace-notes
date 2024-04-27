import type { Note } from "@prisma/client";
import NoteItem from "./note";

interface PostListProps {
  fetchData: () => Promise<Note[]>;
}

export default async function NoteList({ fetchData }: PostListProps) {
  const notes = await fetchData();

  const renderedNotes = notes.map((note) => {
    return <NoteItem key={note.id} note={note} />;
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
