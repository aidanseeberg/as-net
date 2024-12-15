import type { Metadata } from "next";
import "./globals.css";
import { cormorant } from "./fonts";

export const metadata: Metadata = {
  title: "aseebs.net",
  description: "aidan seeberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white text-black ${cormorant.className}`}>
        {children}
      </body>
    </html>
  );
}
