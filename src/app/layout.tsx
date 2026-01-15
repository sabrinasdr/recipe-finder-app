import "./globals.css";
import type { Metadata } from "next";
import { Ephesis, Roboto } from "next/font/google";
import SearchBar from "./components/SearchBar";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Recipe finder",

}

const roboto = Roboto({ weight: ["100", "200", "300", "400", "500"], subsets: ['latin'] })
const ephesis = Ephesis({ weight: "400", subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <nav className=" flex  p-6 2xl:px-40 h-25 bg-light-sage justify-center items-center shadow-md shadow-black/50 z-2 relative">
          <Link href='/' className={`text-xl md:text-3xl ms-0 text-white  ${ephesis.className}`}>Recipe finder</Link>
          <div className="mx-auto text-white uppercase font-light  md:text-lg">
            <Link href='/' className="hidden sm:inline hover:border-b pb-1 transition-all ">Home</Link>
            <Link href='/explore' className="hover:border-b pb-1 mx-8 transition-all">Explore</Link>
          </div>
          <SearchBar />
        </nav>
        <div className="bg-butter">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
