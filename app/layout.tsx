import "./globals.css";
import localFont from "@next/font/local";
import cn from "clsx";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Tanker = localFont({
  src: "../public/fonts/Tanker.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0B0C10]">
      <head />
      <body>
        <main
          className={cn(
            Tanker.className,
            "bg-[#0B0C10] antialiased relative flex-col overflow-auto p-4 space-y-6 flex text-center text-yellow-50 min-h-screen w-screen max-w-3xl m-auto items-center justify-center"
          )}
        >
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
