"use client";

import React from "react";
import SunIcon from "../SunIcon";
import MoonIcon from "../MoonIcon";
import Cookie from "js-cookie";
import { DARK_COLORS, LIGHT_COLORS } from "@/constants";

function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    Cookie.set("color-theme", nextTheme, {
      expires: 1000,
    });

    // 3 — Update the DOM to present the new colors
    const root = document.documentElement;
    const colors = nextTheme === "light" ? LIGHT_COLORS : DARK_COLORS;

    // 3.1 — Edit the data-attribute, so that we can apply CSS
    // conditionally based on the theme.
    root.setAttribute("data-color-theme", nextTheme);

    // 3.2 — Swap out the actual colors on the <html> tag.
    //       We do this by iterating over each CSS variable
    //       and setting it as a new inline style.
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button
      className='cursor-pointer rounded-sm flex items-center gap-3 
      text-theme-toggle text-sm font-bold tracking-[0.15em] transition-colors 
      hover:text-theme-toggle-hover outline-none focus-visible:ring-2 focus-visible:ring-focus 
      focus-visible:ring-offset-2 focus-visible:ring-offset-background'
      onClick={handleClick}
    >
      {theme === "light" ? (
        <>
          <span aria-hidden='true'>DARK</span>{" "}
          <span className='sr-only'>Toggle dark theme</span>
        </>
      ) : (
        <>
          <span aria-hidden='true'>LIGHT</span>{" "}
          <span className='sr-only'>Toggle light theme</span>
        </>
      )}

      {theme === "light" ? (
        <MoonIcon aria-hidden='true' />
      ) : (
        <SunIcon aria-hidden='true' />
      )}
    </button>
  );
}

export default DarkLightToggle;
