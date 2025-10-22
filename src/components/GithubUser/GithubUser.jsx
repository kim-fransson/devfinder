import Image from "next/image";
import React from "react";
import {
  createGoogleMapsLink,
  createGoogleSearchLink,
  createTwitterLink,
  formatCreatedAt,
} from "./helpers";
import CompanyIcon from "../CompanyIcon";
import LocationIcon from "../LocationIcon";
import TwitterIcon from "../TwitterIcon";
import WebsiteIcon from "../WebsiteIcon";

function GithubUser({
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
}) {
  return (
    <article className='py-8 px-6 rounded-2xl bg-card shadow-card grid grid-cols-[auto_1fr] gap-y-6 gap-x-5'>
      <div className='relative size-[70px] col-span-1'>
        <Image
          className='rounded-full  bg-image-background'
          src={avatar_url}
          fill
          alt=''
        />
      </div>
      <header>
        <hgroup>
          <h2 className='text-2xl font-bold text-heading'>{name}</h2>
          <a
            href={html_url}
            target='_blank'
            className='text-username block mt-0.5 mb-1'
          >
            {`@${login}`}
          </a>
        </hgroup>
        <time dateTime={created_at}>
          {formatCreatedAt(created_at)}
        </time>
      </header>

      <div className='col-span-full grid gap-6'>
        {bio || <p className='opacity-75'>This profile has no bio</p>}

        <ul className='grid gap-4 px-5 py-4 rounded-xl bg-stats-background'>
          <Stat label='Repos' value={public_repos} />
          <Stat label='Followers' value={followers} />
          <Stat label='Following' value={following} />
        </ul>

        <ul className='grid gap-4'>
          <Link
            icon={LocationIcon}
            href={createGoogleMapsLink(location)}
          >
            {location}
          </Link>
          <Link
            icon={TwitterIcon}
            href={createTwitterLink(twitter_username)}
          >
            {twitter_username}
          </Link>
          <Link icon={WebsiteIcon} href={blog}>
            {blog}
          </Link>
          <Link
            icon={CompanyIcon}
            href={createGoogleSearchLink([company, location])}
          >
            {company}
          </Link>
        </ul>
      </div>
    </article>
  );
}

function Stat({ label, value }) {
  return (
    <li className='grid gap-1'>
      <span className='text-sm'>{label}</span>
      <span className='text-stats text-xl font-bold'>{value}</span>
    </li>
  );
}

function Link({ href, children, icon: Icon }) {
  const isNotAvailable = !children;

  const Template = !isNotAvailable ? (
    <a href={href} target='_blank'>
      {children}
    </a>
  ) : (
    "Not Available"
  );

  return (
    <li
      style={{ opacity: isNotAvailable && "0.70" }}
      className='flex gap-[18px] items-center'
    >
      <span className='text-stats-icon'>
        <Icon />
      </span>
      {Template}
    </li>
  );
}

export default GithubUser;
