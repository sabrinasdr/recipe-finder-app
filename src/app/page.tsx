import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home • Recipe finder',
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[calc(100dvh-6.25rem)]  bg-[url('../assets/img/background.jpg')]   bg-cover bg-start flex bg-blend-color md:bg-white/15 bg-white/35">
        <div className="mx-auto my-auto xl:w-1/2 px-[2rem] md:px-[6rem] ">
          <p className="lg:text-6xl text-3xl">Cook like a Pro with our <span className="text-light-sage drop-shadow-sm drop-shadow-white/50">Easy</span> and <span className="text-light-sage  drop-shadow-sm drop-shadow-white/60">Tasty</span> recipes</p>
          <p className="text-xl mt-4 mb-6 text-gray-700">From quick and easy meals to gourmet delight, we have something for every taste and occasion</p>
          <Link href="/explore" className=" px-6 py-3 rounded-sm bg-rust text-white hover:bg-rust/90 shadow-sm shadow-black/20">Explore recipes</Link>
        </div>
      </div>
    </div>
  )
}
