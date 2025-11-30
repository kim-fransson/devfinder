import React from "react";
import { format } from "date-fns";

// The primary rate limit for unauthenticated requests is 60 requests per hour.
export const getGithubUser = React.cache(async function (username) {
  const url = `https://api.github.com/users/${username}`;

  try {
    const res = await fetch(url);

    if (res.status === 404) {
      return null; // user not found → return null, do not throw
    }

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`); // error.js will catch this
    }

    return await res.json();
  } catch (error) {
    throw error; // network errors bubble up
  }
});

export function createGoogleMapsLink(location) {
  if (!location) {
    return "";
  }
  const searchQuery = location.replace(" ", "+");
  return `https://www.google.com/maps/place/${searchQuery}`;
}

export function createTwitterLink(username) {
  return `https://x.com/${username}`;
}

export function createGoogleSearchLink(terms) {
  if (terms.length === 0) {
    return "";
  }
  const searchQuery = terms.join(" ").replace(" ", "+");
  return `https://www.google.com/search?q=${searchQuery}`;
}

export function formatCreatedAt(date) {
  return format(date, "'Joined ' d MMM yyyy");
}
