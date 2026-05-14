import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tonik — Design Studio for Visionaries",
  description: "Founder-first, 0→1 studio that defines, designs, and builds products and other digital wizardry. Trusted by 200+ YCombinator & Speedrun founders.",
  openGraph: {
    title: "Tonik — Design Studio for Visionaries",
    description: "Founder-first, 0→1 studio that defines, designs, and builds products.",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
