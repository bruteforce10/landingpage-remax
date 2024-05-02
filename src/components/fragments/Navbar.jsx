import Image from "next/image";
import React from "react";
import Montserratt from "@/services/FontPremier";

const Navbar = () => {
  return (
    <div
      className={`navbar bg-base-100 container px-8 ${Montserratt.className}`}
    >
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <Image
            src={"/logo-remax.webp"}
            width={1300}
            height={100}
            className="w-full h-auto min-w-28 max-w-32"
            alt="remax-indonesia"
          />
        </a>
      </div>
      <div className="flex-none max-md:hidden">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold border-b-2 border-blue-remax">
            <a>HOME</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <a>WHY RE/MAX</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content space-y-4 mt-3 -ml-36 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li className="font-bold border-b-2 border-blue-remax py-2">
            <a>HOME</a>
          </li>
          <li className="border-b-2 border-gray-100 py-2">
            <a>ABOUT US</a>
          </li>
          <li className="border-b-2 border-gray-100 py-2">
            <a>WHY RE/MAX</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
