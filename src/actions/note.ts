"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";

const RESTAPI_TIMEOUT = 100;
const createNoteSchema = z.object({
  content: z
    .string()
    .min(20, { message: "Content must contain at least 20 character(s)" })
    .max(300, { message: "Content must contain at most 300 character(s)" }),
});

const editNoteSchema = z.object({
  content: z.string().min(20).max(300),
});

interface EditNoteFormState {
  id: number;
  updatedAt: Date;
  content?: string;
  errors: {
    content?: string[];
    _form?: string[];
  };
}

export async function editNote(
  formState: EditNoteFormState,
  formData: FormData
): Promise<EditNoteFormState> {
  await new Promise((resolve) => setTimeout(resolve, RESTAPI_TIMEOUT));

  const result = editNoteSchema.safeParse({
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      id: formState.id,
      updatedAt: formState.updatedAt,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await db.note.update({
    where: { id: formState.id },
    data: { content: result.data.content },
  });

  revalidatePath("/");
  redirect("/");
}

export async function deleteNote(id: number) {
  await db.note.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

interface CreateNoteFormState {
  errors: {
    content?: string[];
    _form?: string[];
  };
}

export async function createNote(
  formState: CreateNoteFormState,
  formData: FormData
): Promise<CreateNoteFormState> {
  await new Promise((resolve) => setTimeout(resolve, RESTAPI_TIMEOUT));
  const result = createNoteSchema.safeParse({
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.note.create({
      data: {
        content: result.data.content,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");
  redirect("/");
}
