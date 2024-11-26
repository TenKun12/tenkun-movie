"use client";
import { Search, UserCircle2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <div className="w-full bg-black sticky top-0  flex justify-center z-10">
      <div className="flex justify-between py-7 w-4/6   z-10 ">
        <Link href={"/"} className="text-amber-500 font-bold text-2xl">
          TENKUN
        </Link>
        <div className="flex text-white w-1/2 items-center z-20 ">
          <input
            onFocus={() => {
              setIsInputFocused(true);
            }}
            onBlur={() => {
              setIsInputFocused(false);
            }}
            type="text"
            className="w-full group-focus:border-blue-400 bg-black border-r-0 bg-transparent border border-white/30 rounded-l-full px-5 py-2 focus:border-blue-500 outline-none hover:outline-none"
          />
          <button className="border group-focus:border-blue-400 group border-white/30 p-2.5 rounded-r-full  px-5">
            <Search size={20} color="white" />
          </button>
        </div>
        <div className="text-white flex space-x-5 ">
          <Link href={"/"}>Home</Link>
          <Link href={"/movies"}>Movies</Link>
          <Link href={"tv-shows"}>Tv Shows</Link>

          <Link href={"#"}>
            <UserCircle2 />
          </Link>
        </div>
      </div>
      {/* {isInputFocused && (
        <div className="fixed  w-screen top-0 left-0 h-screen bg-white/20"></div>
      )} */}
    </div>
  );
};

export default Navbar;
