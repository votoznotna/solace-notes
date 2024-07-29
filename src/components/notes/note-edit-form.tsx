"use client";

import type { Note } from "@prisma/client";
// import { startTransition, useState } from "react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";
import { IoTrashOutline } from "react-icons/io5";
import { Button, Textarea, Tooltip } from "@nextui-org/react";
import { useFormState } from "react-dom";

interface NoteEditFormProps {
  note: Note;
}

export default function NoteEditForm({ note }: NoteEditFormProps) {
  const [formState, editNoteAction] = useFormState(actions.editNote, {
    id: note.id,
    content: note.content,
    updatedAt: note.updatedAt,
    errors: {},
  });

  const deleteNote = actions.deleteNote.bind(null, note.id);

  const updatedDate =
    note.updatedAt instanceof Date
      ? note.updatedAt.toLocaleDateString()
      : new Date(note.updatedAt).toLocaleDateString();
  const updatedTime =
    note.updatedAt instanceof Date
      ? note.updatedAt.toLocaleTimeString()
      : new Date(note.updatedAt).toLocaleTimeString();
  return (
    <section className="relative">
      <label className="flex w-full justify-end text-sm">
        {`${updatedDate} ${updatedTime}`}
      </label>
      <form action={editNoteAction}>
        <Textarea
          name="content"
          minRows={7}
          labelPlacement="outside"
          placeholder="Content"
          className="mb-5"
          defaultValue={note.content}
          errorMessage={formState?.errors?.content?.join(", ")}
        />
        {formState.errors._form ? (
          <div className="rounded p-2 bg-red-200 border border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}
        <FormButton color="default">Save</FormButton>
      </form>
      <form action={deleteNote} className="absolute bottom-0 right-0">
        <Tooltip content="Delete Note">
          <Button type="submit">
            <IoTrashOutline size={20} />
          </Button>
        </Tooltip>
      </form>
    </section>
  );
}
