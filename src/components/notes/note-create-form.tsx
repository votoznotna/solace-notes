"use client";

import { useFormState } from "react-dom";
import * as actions from "@/actions";
import FormButton from "@/components/common/form-button";

import { Textarea } from "@nextui-org/react";

export default function NoteCreateForm() {
  const [formState, action] = useFormState(actions.createNote, {
    errors: {},
  });
  return (
    <section className="space-y-3 mt-10">
      <h1 className="font-bold mb-5">Create a Note</h1>
      <div className="space-y-2 px-1">
        <form action={action} className="gap-4">
          <Textarea
            name="content"
            minRows={7}
            defaultValue=""
            labelPlacement="outside"
            placeholder="Content"
            className="mb-5"
            errorMessage={formState.errors.content?.join(", ")}
          />

          {formState.errors._form ? (
            <div className="rounded p-2 bg-red-200 border border-red-400">
              {formState.errors._form?.join(", ")}
            </div>
          ) : null}

          <FormButton color="default">Create</FormButton>
        </form>
      </div>
    </section>
  );
}
