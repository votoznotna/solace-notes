import { redirect } from "next/navigation";
import NoteList from "@/components/notes/note-list";
import { fetchNotesBySearchFilter } from "@/db/queries/notes";

interface SearchPageProps {
  searchParams: {
    filter: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { filter } = searchParams;

  if (!filter) {
    redirect("/");
  }

  return <NoteList fetchData={() => fetchNotesBySearchFilter(filter)} />;
}
