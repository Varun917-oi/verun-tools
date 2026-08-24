import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://verun-tools.vercel.app"
  ),

  title: {
    default: "VERUN TOOLS",
    template: "%s | VERUN TOOLS",
  },

  description:
    "Fast, private online tools for images, PDFs, text, development and everyday calculations.",

  openGraph: {
    type: "website",
    siteName: "VERUN TOOLS",
    title: "VERUN TOOLS",
    description:
      "Fast, private online utilities for everyone.",
  },

  verification: {
  google: "v99GZzMFq1EQQkI4hibUdlJwWjuV7sbRPpilb3eswBg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}