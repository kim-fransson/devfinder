"use client";

import React from "react";
import SearchIcon from "../SearchIcon";
import { useRouter } from "next/navigation";
import { useSpinDelay } from "spin-delay";
import BouncingBalls from "../BouncingBalls";

export default function SearchForm() {
  const router = useRouter();
  const [loading, startTransition] = React.useTransition();
  const showSpinner = useSpinDelay(loading, {
    delay: 500,
    minDuration: 200,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");

    if (username) {
      startTransition(() => {
        router.push(`/${username}`);
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='rounded-2xl bg-card flex items-center gap-2 md:gap-5 shadow-card flex-wrap
        py-2.5 pr-3 pl-3 md:pl-6 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus'
    >
      <div
        aria-hidden='true'
        className='text-search-icon size-5 scale-80 md:scale-100'
      >
        <SearchIcon />
      </div>

      <input
        name='username'
        placeholder='Search GitHub username…'
        aria-label='Search GitHub username…'
        required
        autoComplete='off'
        className='text-sm flex-1 placeholder:text-foreground overflow-ellipsis md:text-lg outline-none'
      />

      <button
        type='submit'
        className='cursor-pointer py-3 px-5 rounded-xl font-bold bg-button-background text-button-foreground 
          transition-colors hover:bg-button-hover disabled:opacity-50 disabled:cursor-not-allowed
          outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus 
          focus-visible:ring-offset-card h-12 min-w-[98px] flex items-center justify-center'
      >
        {showSpinner ? <BouncingBalls /> : "Search"}
      </button>
      {showSpinner && (
        <p className='sr-only' aria-live='polite'>
          Loading takes a bit longer than usual
        </p>
      )}
    </form>
  );
}
