import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 inline-flex drop-shadow-lg items-center justify-between bg-transparent">
      <li className="list-none font-bold text-lg cursor-pointer ml-4">
        <Link href="/">
          <span className="text-xl flex items-center">
            <Image
              className="mr-2"
              src="https://en.wikipedia.org/wiki/Galactic_Empire_%28Star_Wars%29"
              width="60"
              height="60"
              alt="Logo"
            />
          </span>
        </Link>
      </li>
      {/* Links */}
      <ul className="inline-flex mr-4 flex-wrap">
        <li>
          <Link href="/">
            <a className="text-white inline-flex mr-5 hover:bg-white hover:border-gray-300 hover:text-black">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="text-white inline-flex mr-5 hover:bg-white hover:border-gray-300 hover:text-black">
              Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white inline-flex mr-5 hover:bg-white hover:border-gray-300 hover:text-black">
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
