import { getGithubUser } from "@/utils";
import Image from "next/image";
import React from "react";

async function GithubUser() {
  const res = await getGithubUser("octocat");

  // if res?.status === 404 -> render not found

  const {
    avatar_url,
    name,
    login,
    html_url,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = res;

  return (
    <article className='py-8 px-6 rounded-2xl bg-card shadow-card'>
      <div className='size-[75px] rounded-full relative overflow-clip'>
        <Image src={avatar_url} fill alt='' />
      </div>
      <header>
        <hgroup>
          <h2>{name}</h2>
          <a href={html_url} target='_blank'>
            {login}
          </a>
        </hgroup>
        <time dateTime={created_at}>{created_at}</time>
      </header>
      <p>{bio || "This profile has no bio"}</p>

      <ul>
        <li>
          Repos <span>{public_repos}</span>
        </li>
        <li>
          Followers <span>{followers}</span>
        </li>
        <li>
          Following <span>{following}</span>
        </li>
      </ul>

      <ul>
        <li>{location}</li>
        <li>
          <a href={blog} target='_blank'>
            {blog}
          </a>
        </li>
        <li>
          <a href={`https://x.com/${twitter_username}`}>
            {twitter_username}
          </a>
        </li>
        <li>{company}</li>
      </ul>
    </article>
  );
}

export default GithubUser;
