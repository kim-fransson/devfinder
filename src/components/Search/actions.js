"use server";

import { COOKIE_GITHUB_USERNAME } from "@/constants";
import { getGithubUser } from "@/helpers";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function searchUser(_prevState, queryData) {
  const username = queryData.get("username");

  const user = await getGithubUser(username);
  let error = "";

  if (!user.ok) {
    error = "Server error";
  }
  if (!user.ok && user.status === 404) {
    error = "No results";
  }

  // Set server-side cookie
  (await cookies()).set(COOKIE_GITHUB_USERNAME, username, {
    maxAge: 60 * 60 * 24 * 1000, // 1000 days
  });

  // Revalidate the root path so the server will re-render with the new cookie value
  revalidatePath("/");
  return { error };
}
