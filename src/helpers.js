// The primary rate limit for unauthenticated requests is 60 requests per hour.
export async function getGithubUser(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { ok: false, status: res.status };
    }
    const data = await res.json();
    return { ...data, ok: !!data.id };
  } catch (error) {
    return { ok: false };
  }
}
