// import NoteListPure from "@/components/notes/note-list-pure";
import NoteList from "@/components/notes/note-list";
import { fetchAllNotes } from "@/db/queries/notes";
import { Note } from "@prisma/client";

export default async function Home() {
  return (
    <main>
      <NoteList fetchData={() => fetchAllNotes()} />
      <footer className="min-h-4"></footer>
    </main>
  );
}

// export async function getStaticProps() {
//   const notes = await fetchAllNotes();

//   return {
//     props: { notes },
//   };
// }

// export default function Home({
//   notes,
// }: {
//   notes: Array<Note>;
// }): React.ReactElement {
//   return (
//     <main>
//       <NoteListPure data={notes} />
//       <footer className="min-h-4"></footer>
//     </main>
//   );
// }
