import { Space_Mono } from "next/font/google";
import {
  DARK_COLORS,
  LIGHT_COLORS,
  SITE_DESCRIPTION,
  SITE_TITLE,
} from "@/constants";
import { cookies } from "next/headers";

import "./globals.css";
import DarkLightToggle from "@/components/DarkLightToggle";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
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
        className={`${spaceMono.variable} antialiased p-2 font-mono grid gap-8`}
      >
        <header className='flex justify-between'>
          <h1 className='font-bold text-2xl text-logo'>devfinder</h1>
          <DarkLightToggle initialTheme={theme} />
        </header>
        {children}
      </body>
    </html>
  );
}
