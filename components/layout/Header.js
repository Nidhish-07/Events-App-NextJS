import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between align-baseline py-4 px-[10%] h-20 bg-[#202020]">
      <div className="text-2xl text-white h-full flex justify-center items-center  md:text-4xl no-underline ">
        <Link href="/" className="">
          NextEvents
        </Link>
      </div>
      <nav className="no-underline text-[#74dacc] text-lg md:text-2xl">
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

//text-[#94fdfd]
