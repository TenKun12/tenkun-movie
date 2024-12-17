import Link from "next/link";
import React from "react";

const PaginationNumber = ({ currentPage }) => {
  const page = [1, 2, 3, 4, 5];

  console.log({ currentPage });
  return (
    <div className=" justify-end flex ">
      <div className="flex">
        {page.map((item, index) => (
          <div key={index}>
            <Link href={`${item}`}>
              <div
                className={`p-3  
                    ${currentPage == item ? "text-amber-500" : "text-white"}
                    hover:text-amber-500 hover:transition-colors
                 hover:scale-159 transition-transform relative  border-transparent border-b-2 hover:w-full hover:border-amber-500`}
              >
                {item}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginationNumber;
