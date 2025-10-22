"use server";

import { COOKIE_GITHUB_USERNAME } from "@/constants";
import { getGithubUser } from "@/helpers";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function searchUser(formData) {
  const username = formData.get("username");

  const user = await getGithubUser(username);

  if (!user.ok) {
    // throw to surface failure to the client
  }

  // Set server-side cookie
  (await cookies()).set(COOKIE_GITHUB_USERNAME, username, {
    maxAge: 60 * 60 * 24 * 1000, // 1000 days
  });

  // Revalidate the root path so the server will re-render with the new cookie value
  revalidatePath("/");
}
