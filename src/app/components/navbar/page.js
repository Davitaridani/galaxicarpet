"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { home_asset } from "@/assets/images";

import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  const navlinks = [
    { title: "Product", url: "/products" },
    { title: "SERVICES & MAINTENANCE", url: "/services" },
    { title: "Project", url: "/project" },
  ];

  return (
    <nav className="bg-black md:ps-7 ps-6 leading-[80px] h-[80px] z-50">
      <div className="lg:flex items-center uppercase text-white">
        <Link href="/">
          <Image
            src={home_asset.logoHead}
            alt="Logo Galaxi-Carpet"
            className="xl:w-auto lg:w-9 w-48 pt-5 lg:pt-0 xl:pt-0 sticky "
          />
        </Link>
        <div className="lg:flex hidden mx-auto items-center">
          <ul className="flex">
            {navlinks?.map((item, i) => (
              <li key={i} className="px-4">
                <Link href={item.url} className="text-[15px] tracking-wide">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <li className="lg:flex hidden justify-end pe-12">
          <Link href="/about" className="text-[15px] tracking-wide">
            ABOUT GALAXI CARPET
          </Link>
        </li>
        <div className="lg:inline-block hidden h-full justify-center leading-[80px] bg-red">
          <Link
            className="tracking-wide text-center px-10 text-[15px]"
            href={"/contact"}
          >
            Contact Us
          </Link>
        </div>

        <div className="lg:hidden flex flex-col justify-end items-center ">
          <button
            onClick={() => setMenuMobile(!menuMobile)}
            className="absolute top-[26px] right-5"
          >
            {menuMobile ? (
              <span className="text-[28px]">
                <MdClose />
              </span>
            ) : (
              <span className="text-[28px]">
                <HiOutlineMenuAlt3 />
              </span>
            )}
          </button>

          <div
            className={`${
              menuMobile ? "flex flex-col" : "hidden"
            } pt-6 pb-10 absolute top-16 right-0 my-2 min-w-full bg-black  z-50`}
          >
            <ul className="flex flex-col items-center flex-1">
              {navlinks.map((item, i) => (
                <li
                  key={i}
                  className={`font-normal cursor-pointer text-[15px] leading-10`}
                >
                  <Link
                    href={item.url}
                    className="text-white"
                    onClick={() => setMenuMobile(!menuMobile)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <li className="flex justify-center leading-10">
              <Link
                href="/about"
                className="text-[15px] tracking-wide"
                onClick={() => setMenuMobile(!menuMobile)}
              >
                ABOUT GALAXI CARPET
              </Link>
            </li>
            <div className="inline-block w-fit mx-auto justify-center leading-[45px] bg-red mt-4">
              <Link
                className="tracking-wide text-center px-6 text-[15px]"
                href={"/contact"}
                onClick={() => setMenuMobile(!menuMobile)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
