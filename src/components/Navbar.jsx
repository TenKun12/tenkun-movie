"use client";
import { UserCircle2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SearchMovie from "./SearchMovie";

const Navbar = () => {
  return (
    <div className="w-full bg-black sticky top-0  flex justify-center z-10">
      <div className="flex justify-between py-7 min-w-[66.666667%]   z-10 ">
        <Link href={"/"} className="text-amber-500 font-bold text-2xl">
          TENKUN
        </Link>
        <SearchMovie />
        <div className="text-white lg:flex space-x-5 hidden  ">
          <Link href={"/"}>Home</Link>
          <Link href={"/movies/pages/1"}>Movies</Link>
          <Link href={"/tv-shows"}>Tv Shows</Link>

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
