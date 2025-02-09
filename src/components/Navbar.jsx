"use client";
import { Menu, UserCircle2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SearchMovie from "./SearchMovie";
import Sheet from "./Sheet";

const Navbar = () => {
  const [showSheet, setShowSheet] = useState(false);
  return (
    <>
      <div className="w-full bg-black sticky top-0  flex justify-center z-10">
        <div className="flex justify-between py-7 w-full md:w-[66.666667%] items-center space-x-3 px-3  z-10 ">
          <Link href={"/"} className="text-amber-500 font-bold text-2xl">
            TENKUN
          </Link>
          {/* <div className="w-full"> */}
          <SearchMovie />
          <div className="md:hidden">
            <button
              onClick={() => {
                setShowSheet(true);
              }}
            >
              <Menu color="white" size={30} />
            </button>
          </div>
          {/* </div> */}
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
      <Sheet showSheet={showSheet} setShowSheet={setShowSheet} />
    </>
  );
};

export default Navbar;
