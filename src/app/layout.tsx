import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://veruntools.com"),
  title: { default: "VERUN TOOLS — Fast, private online utilities", template: "%s | VERUN TOOLS" },
  description: "Fast, private online tools for images, PDFs, text, development and everyday calculations.",
  openGraph: { type: "website", siteName: "VERUN TOOLS", title: "VERUN TOOLS", description: "Fast, private online utilities." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
