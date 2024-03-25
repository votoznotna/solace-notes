import NoteList from "@/components/notes/note-list";
import { fetchAllNotes } from "@/db/queries/notes";

export default async function Home() {
  return (
    <main>
      <NoteList fetchData={() => fetchAllNotes()} />
      <footer className="min-h-4"></footer>
    </main>
  );
}
