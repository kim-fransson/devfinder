"use client";

import React from "react";
import { searchUser } from "./actions";

export default function SearchForm() {
  return (
    <form
      action={searchUser}
      style={{ display: "flex", gap: 8, alignItems: "center" }}
    >
      <input
        name='username'
        placeholder='GitHub username'
        aria-label='GitHub username'
        required
        style={{
          padding: "8px 10px",
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />
      <button
        type='submit'
        style={{ padding: "8px 12px", borderRadius: 6 }}
      >
        Search
      </button>
    </form>
  );
}
