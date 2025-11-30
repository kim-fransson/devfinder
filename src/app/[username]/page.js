import Image from "next/image";
import { notFound } from "next/navigation";

import {
  createGoogleMapsLink,
  createGoogleSearchLink,
  createTwitterLink,
  formatCreatedAt,
  getGithubUser,
} from "./helpers";

import LocationIcon from "@/components/LocationIcon";
import TwitterIcon from "@/components/TwitterIcon";
import WebsiteIcon from "@/components/WebsiteIcon";
import CompanyIcon from "@/components/CompanyIcon";

export async function generateMetadata({ params }) {
  const { username } = await params;

  const user = await getGithubUser(username);

  if (!user) {
    notFound();
  }

  return {
    title: `Devfinder | ${username}`,
    icons: {
      icon: user.avatar_url,
    },
  };
}

export default async function UserPage({ params }) {
  const { username } = await params;

  const user = await getGithubUser(username);

  if (!user) {
    notFound();
  }

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
  } = user;

  return (
    <article
      className={`py-8 px-6 rounded-2xl bg-card shadow-card grid grid-cols-[auto_1fr] md:grid-rows-[min-content_1fr] 
        gap-y-6 gap-x-5 md:py-12 md:px-8 md:gap-x-8`}
    >
      <div className='relative size-[70px] col-span-1 md:size-[117px] md:row-span-full'>
        <Image
          className='rounded-full  bg-image-background'
          src={avatar_url}
          fill
          alt=''
        />
      </div>
      <header className='md:flex md:content-baseline'>
        <hgroup>
          <h2 className='text-2xl font-bold text-heading'>{name}</h2>
          <span className='sr-only'>{name} github page</span>
          <a
            href={html_url}
            target='_blank'
            className={`text-username block mt-0.5 mb-1 rounded-sm outline-0 focus-visible:ring-2 
              focus-visible:ring-focus`}
          >
            {`@${login}`}
          </a>
        </hgroup>
        <time className='md:ml-auto' dateTime={created_at}>
          {formatCreatedAt(created_at)}
        </time>
      </header>

      <div className='col-span-full grid gap-6 md:col-start-2 '>
        {bio || <p className='opacity-75'>This profile has no bio</p>}

        <ul className='grid gap-4 px-5 py-4 rounded-xl bg-stats-background md:px-8 md:grid-cols-3'>
          <Stat label='Repos' value={public_repos} />
          <Stat label='Followers' value={followers} />
          <Stat label='Following' value={following} />
        </ul>

        <ul className='grid gap-4 md:grid-cols-2'>
          <Link
            icon={LocationIcon}
            href={createGoogleMapsLink(location)}
            label='Google map link'
          >
            {location}
          </Link>
          <Link
            icon={TwitterIcon}
            href={createTwitterLink(twitter_username)}
            label='twitter link'
          >
            {twitter_username}
          </Link>
          <Link
            label={`${name} blog website`}
            icon={WebsiteIcon}
            href={blog}
          >
            {blog}
          </Link>
          <Link
            label='Company google search'
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

function Link({ href, label, children, icon: Icon }) {
  const isNotAvailable = !children;

  const Template = !isNotAvailable ? (
    <a
      href={href}
      target='_blank'
      className='outline-0 focus-visible:ring-2 focus-visible:ring-focus rounded-sm'
    >
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
      <span className='sr-only'>{label}</span>
      <span aria-hidden='true' className='text-stats-icon'>
        <Icon />
      </span>
      {Template}
    </li>
  );
}
