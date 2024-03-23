import { notFound } from "next/navigation";
import { db } from "@/db";
import NoteEditForm from "@/components/notes/note-edit-form";

interface NoteEditPageProps {
  params: {
    id: string;
  };
}

export default async function NoteEditPage(props: NoteEditPageProps) {
  const id = parseInt(props.params.id);
  const note = await db.note.findFirst({
    where: { id },
  });

  if (!note) {
    return notFound();
  }

  return (
    <section>
      <NoteEditForm note={note} />
    </section>
  );
}
