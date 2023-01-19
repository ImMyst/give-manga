import "./globals.css";
import localFont from "@next/font/local";
import cn from "clsx";

const Tanker = localFont({ src: "../public/fonts/Tanker.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          Tanker.className,
          "flex bg-[#0B0C10] text-center text-yellow-50 w-screen max-w-3xl m-auto h-screen items-center justify-center"
        )}
      >
        {children}
      </body>
    </html>
  );
}
