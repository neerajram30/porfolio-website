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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
        <head>
          <script dangerouslySetInnerHTML={{ __html: `(function(){try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='light'?'light':'dark'}catch(e){}})();` }} />
        </head>
        <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
