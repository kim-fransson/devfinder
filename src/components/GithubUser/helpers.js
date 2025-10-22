import { format } from "date-fns";

export function createGoogleMapsLink(location) {
  const searchQuery = location.replace(" ", "+");
  return `https://www.google.com/maps/place/${searchQuery}`;
}

export function createTwitterLink(username) {
  return `https://x.com/${username}`;
}

export function createGoogleSearchLink(terms) {
  const searchQuery = terms.join(" ").replace(" ", "+");
  return `https://www.google.com/search?q=${searchQuery}`;
}

export function formatCreatedAt(date) {
  return format(date, "'Joined ' d MMM yyyy");
}
