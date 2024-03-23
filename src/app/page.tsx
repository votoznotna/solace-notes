import NoteList from "@/components/notes/note-list";
import { fetchAllNotes } from "@/db/queries/notes";

export default async function Home() {
  return (
    <section>
      <NoteList fetchData={() => fetchAllNotes()} />
    </section>
  );
}
