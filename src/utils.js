export async function getGithubUser(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();
  return data;
}
