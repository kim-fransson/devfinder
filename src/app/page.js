import GithubUser from "@/components/GithubUser";
import Search from "@/components/Search";
import { COOKIE_GITHUB_USERNAME, DEFAULT_USER } from "@/constants";
import { cookies } from "next/headers";
import React from "react";

export default async function Home() {
  const savedUsername = (await cookies()).get(COOKIE_GITHUB_USERNAME);
  const username = savedUsername?.value ?? DEFAULT_USER;
  return (
    <main className='grid gap-8'>
      <Search />
      <GithubUser username={username} />
    </main>
  );
}
