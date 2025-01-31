import type { Metadata } from "next";
import "./../app/_lib/_styles/globals.css";
import ScrollToTop from "./_components/ScrollToTop";

export const metadata: Metadata = {
  title: "ABDUL MOIZ SHEIKH",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white antialiased">
        <main className="flex-grow bg-white">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}
