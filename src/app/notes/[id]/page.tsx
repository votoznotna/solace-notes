import { notFound, usePathname } from "next/navigation";
import NoteEditForm from "@/components/notes/note-edit-form";
import { getNoteById } from "@/db/queries/notes";

interface NoteEditPageProps {
  params: {
    id: string;
  };
}

export default async function NoteEditPage(props: NoteEditPageProps) {
  const id = parseInt(props.params.id);
  const note = await getNoteById(id);
  if (!note) {
    return notFound();
  }

  return (
    <section>
      <NoteEditForm note={note} />
    </section>
  );
}
