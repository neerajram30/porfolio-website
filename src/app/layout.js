import { Space_Grotesk } from "next/font/google";

import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Neeraj MR | Full stack developer",
  description: "Neeraj's developer portfolio",
  ogImage: '/portfolio.png'
};

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
        <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
