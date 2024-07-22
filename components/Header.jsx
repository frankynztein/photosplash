'use client';

import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-black fixed w-full py-4 z-[1000]">
      <div className="container mx-auto lg:px-0 md:px-5 sm:px-5 xs:px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <SearchBar buttonStyles="bg-slate-600 hover:bg-slate-700 text-white" />
        </div>
      </div>
    </header>
  )
}

export { Header };