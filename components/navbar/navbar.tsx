import Link from "next/link";
import React from "react";
import { FaEmpire } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { BsCart4 } from "react-icons/bs";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 h-16 inline-flex drop-shadow-lg items-center justify-between bg-gray-400 drop-shadow-md">
      <li className="list-none font-bold text-lg cursor-pointer ml-4">
        <Link href="/">
          <a>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2.5em",
                className: "hover:scale-110",
              }}
            >
              <FaEmpire />
            </IconContext.Provider>
          </a>
        </Link>
      </li>
      {/* Links */}
      <ul className="inline-flex mr-4 flex-wrap">
        <li>
          <Link href="/">
            <a className="text-white inline-flex mr-8 hover:border-gray-300 hover:text-black">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className="text-white inline-flex mr-8 hover:border-gray-300 hover:text-black">
              Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a className="text-white inline-flex mr-8 hover:border-gray-300 hover:text-black">
              <IconContext.Provider
                value={{
                  color: "white",
                  size: "1.2em",
                  className: "hover:scale-110",
                }}
              >
                <BsCart4 />
              </IconContext.Provider>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
