import "./globals.css";
import localFont from "@next/font/local";
import cn from "clsx";
import About from "components/About";
import Navbar from "components/Navbar";

const Tanker = localFont({ src: "../public/fonts/Tanker.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#0B0C10]">
        <main
          className={cn(
            Tanker.className,
            "bg-[#0B0C10] relative flex-col overflow-auto p-4 space-y-6 flex text-center text-yellow-50 w-screen max-w-3xl m-auto h-screen items-center justify-center"
          )}
        >
          <Navbar />
          {children}
          <About />
        </main>
      </body>
    </html>
  );
}
