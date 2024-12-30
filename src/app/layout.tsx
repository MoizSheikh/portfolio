
import type { Metadata } from "next";
import "./../app/_lib/_styles/globals.css";
import Header from "./(public)/(Home)/_components/Header/Header";
// import { ThemeProvider } from "./_lib/context/ThemeController";

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
    // <ThemeProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen bg-white antialiased">
          <Header />
          <main className="flex-grow bg-white">{children}</main>
        </body>
      </html>
    // </ThemeProvider>
  );
}
