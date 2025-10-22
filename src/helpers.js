export async function getGithubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { ok: false };
    }
    const data = await res.json();
    return { ...data, ok: data.status !== "404" };
  } catch (error) {
    return { ok: false };
  }
}
