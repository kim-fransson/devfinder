import { Redacted_Script, Space_Mono } from "next/font/google";
import {
  DARK_COLORS,
  LIGHT_COLORS,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "@/constants";
import { cookies } from "next/headers";

import "./globals.css";
import DarkLightToggle from "@/components/DarkLightToggle";
import SearchForm from "@/components/Search";
import { Suspense } from "react";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const loadingFont = Redacted_Script({
  variable: "--loading-font",
  weight: ["400"],
  subsets: ["latin"],
  display: "block",
});

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default async function RootLayout({ children }) {
  const savedTheme = (await cookies()).get("color-theme");
  const theme = savedTheme?.value || "light";

  const themeColors = theme === "light" ? LIGHT_COLORS : DARK_COLORS;

  return (
    <html lang='en' data-color-theme={theme} style={themeColors}>
      <body
        className={`${spaceMono.variable} ${loadingFont.variable} antialiased px-4 py-8 md:px-8 md:py-10 lg:py-20 
        2xl:py-32 font-mono`}
      >
        <div className='grid mx-auto gap-8 max-w-180'>
          <header className='flex justify-between'>
            <h1 className='font-bold text-2xl text-logo'>
              devfinder
            </h1>
            <DarkLightToggle initialTheme={theme} />
          </header>
          <SearchForm />
          <Suspense>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
