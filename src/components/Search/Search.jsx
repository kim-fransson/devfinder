"use client";

import React from "react";
import { searchUser } from "./actions";
import SearchIcon from "../SearchIcon";

export default function SearchForm() {
  return (
    <form
      action={searchUser}
      className='rounded-2xl bg-card flex items-center gap-2 md:gap-5 shadow-card py-2.5 pr-3 pl-3 md:pl-6'
    >
      <div className='text-search-icon size-5 scale-80 md:scale-100'>
        <SearchIcon />
      </div>
      <input
        name='username'
        placeholder='Search GitHub username…'
        aria-label='Search GitHub username…'
        required
        className='text-sm flex-1 placeholder:text-foreground overflow-ellipsis md:text-lg'
      />
      <button
        type='submit'
        className='py-3 px-5 rounded-xl font-bold bg-button-background text-button-foreground'
      >
        Search
      </button>
    </form>
  );
}
