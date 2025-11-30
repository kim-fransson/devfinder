"use server";
import { redirect } from "next/navigation";

export async function search(formData) {
  redirect(`/${formData.get("username")}`);
}
