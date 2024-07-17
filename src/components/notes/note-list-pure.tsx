import type { Note } from "@prisma/client";
import NoteItem from "./note";

export default function Notes({
  data,
}: {
  data: Array<Note>;
}): React.ReactElement {
  const renderedNotes = data.map((note) => {
    return <NoteItem key={note.id} note={note} />;
  });

  return (
    <section>
      <div className="flex  flex-col gap-2">
        {data && data.length === 0 ? (
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
