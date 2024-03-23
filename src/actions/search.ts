"use server";

import { redirect } from "next/navigation";

export async function search(formData: FormData) {
  const filter = formData.get("search");

  if (typeof filter !== "string" || !filter) {
    redirect("/");
  }

  redirect(`/search?filter=${filter}`);
}

export async function resetSearch(formData: FormData) {
  redirect(`/`);
}
