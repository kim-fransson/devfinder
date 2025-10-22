import GithubUser from "@/components/GithubUser";
import { getGithubUser } from "@/helpers";

export default async function Home() {
  const res = await getGithubUser("octocat");

  return (
    <main className='grid gap-8'>
      {res.status !== "404" ? <GithubUser {...res} /> : "No user"}
    </main>
  );
}
