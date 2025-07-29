import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Neeraj MR | Full Stack Developer",
  description: "Neeraj's developer portfolio",
  ogImage: 'https://neerajram.netlify.app/portfolio.png',
  verification: { google: "SS5GO0NWJv7wWHeWAgKj--lo-fU-WiuBrogioNJbUnM" },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
