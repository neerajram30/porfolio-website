import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import { profile } from "../components/config/profile";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.summary,
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
