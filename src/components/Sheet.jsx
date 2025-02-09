import { Clapperboard, House, Tv, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

const Sheet = ({ showSheet, setShowSheet }) => {
  return (
    <div
      onClick={() => {
        setShowSheet(false);
      }}
      className={`fixed inset-0 transition-opacity duration-300 bg-black/70 ${
        showSheet ? "opacity-100 visible" : "opacity-0 invisible"
      } z-50 flex justify-start`}
    >
      <div
        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam sheet menutupnya
        className={`w-[50%] bg-gray-900 h-full transition-transform duration-300 ${
          showSheet ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-3">
          <button
            className="hover:bg-white/10 p-2 rounded-full"
            onClick={() => {
              setShowSheet(false);
            }}
          >
            <X size={25} color="white" />
          </button>
        </div>

        <Link
          onClick={() => {
            setShowSheet(false);
          }}
          href="/"
          className="flex px-4 gap-5 hover:bg-white/10 w-full py-4"
        >
          <House size={25} color="white" />
          <div className="text-white">Home</div>
        </Link>
        <Link
          onClick={() => {
            setShowSheet(false);
          }}
          href="/movies"
          className="flex px-4 gap-5 hover:bg-white/10 w-full py-4"
        >
          <Clapperboard size={25} color="white" />
          <div className="text-white">Movies</div>
        </Link>
        <Link
          onClick={() => {
            setShowSheet(false);
          }}
          href="/tv-shows"
          className="flex px-4 gap-5 hover:bg-white/10 w-full py-4"
        >
          <Tv size={25} color="white" />
          <div className="text-white">Tv Series</div>
        </Link>
      </div>
    </div>
  );
};

export default Sheet;
