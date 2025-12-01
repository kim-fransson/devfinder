import { LoremIpsum } from "lorem-ipsum";

import LocationIcon from "@/components/LocationIcon";
import TwitterIcon from "@/components/TwitterIcon";
import WebsiteIcon from "@/components/WebsiteIcon";
import CompanyIcon from "@/components/CompanyIcon";
import { formatCreatedAt } from "./helpers";
import { random } from "@/utils";

export default function Loading() {
  const lorem = new LoremIpsum();

  return (
    <article
      className={`py-8 px-6 rounded-2xl bg-card shadow-card grid grid-cols-[auto_1fr] md:grid-rows-[min-content_1fr] 
        gap-y-6 gap-x-5 md:py-12 md:px-8 md:gap-x-8`}
    >
      <div
        className='relative size-[70px] col-span-1 md:size-[117px] md:row-span-full
          rounded-full bg-image-background overflow-hidden animate-pulse'
      ></div>
      <header className='md:flex md:content-baseline font-loading'>
        <hgroup>
          <h2 className='text-2xl font-bold text-heading '>
            {lorem.generateWords(2)}
          </h2>
          <span
            className={`text-username block mt-0.5 mb-1 rounded-sm `}
          >
            {`@${lorem.generateWords(2)}`}
          </span>
        </hgroup>
        <time className='md:ml-auto ' dateTime={new Date()}>
          {formatCreatedAt(new Date())}
        </time>
      </header>

      <div className='col-span-full grid gap-6 md:col-start-2 '>
        <p className='font-loading'>
          {lorem.generateSentences(random(2, 3))}
        </p>

        <ul className='grid gap-4 px-5 py-4 rounded-xl bg-stats-background md:px-8 md:grid-cols-3'>
          <Stat
            label='Repos'
            value={lorem.generateWords(random(2, 3))}
          />
          <Stat
            label='Followers'
            value={lorem.generateWords(random(2, 3))}
          />
          <Stat
            label='Following'
            value={lorem.generateWords(random(2, 3))}
          />
        </ul>

        <ul className='grid gap-4 md:grid-cols-2'>
          <Link icon={LocationIcon}>
            {lorem.generateWords(random(2, 3))}
          </Link>
          <Link icon={TwitterIcon}>
            {lorem.generateWords(random(2, 3))}
          </Link>
          <Link icon={WebsiteIcon}>
            {lorem.generateWords(random(2, 3))}
          </Link>
          <Link icon={CompanyIcon}>
            {lorem.generateWords(random(2, 3))}
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
      <span className='text-stats text-xl font-bold font-loading'>
        {value}
      </span>
    </li>
  );
}

function Link({ children, icon: Icon }) {
  return (
    <li className='flex gap-[18px] items-center font-loading'>
      <span aria-hidden='true' className='text-stats-icon'>
        <Icon />
      </span>
      {children}
    </li>
  );
}
