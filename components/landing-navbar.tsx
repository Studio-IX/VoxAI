"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export const LandingNavbar = () => {
  const navLinks = [
    {
      id: "features",
      title: "Features",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "testimonial",
      title: "Testimonial",
    },
    {
      id: "pricing",
      title: "Pricing",
    },
    {
      id: "faq",
      title: "FAQ",
    },
  ];

  const { isSignedIn } = useAuth();
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="py-7 md:py-5 bg-transparent flex flex-row items-center justify-between px-5 md:px-0">
      <div>
        <Link href="/" className="flex items-center">
          <Image width={155} height={35} alt="Logo" src="/vox.svg" />
        </Link>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-row border bg-[#14131C] border-[#2D2C54] rounded-full py-4 px-10 space-x-8">
          <a href="#features" className="text-white cursor-pointer font-dmSans">Features</a>
          <a href="#about" className="text-white cursor-pointer font-dmSans">About</a>
          <a href="#testimonial" className="text-white cursor-pointer font-dmSans">Testimonials</a>
          <a href="#pricing" className="text-white cursor-pointer font-dmSans">Pricing</a>
          <a href="#faq" className="text-white cursor-pointer font-dmSans">FAQ</a>
        </div>
      </div>

      <div className="hidden md:block">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button size="nav" variant="primary" className="rounded-full">
            {isSignedIn ? "Dashboard" : "Get Started"}
            <Image
              className="ml-2"
              width={24}
              height={24}
              src="/arrow_right.svg"
              alt="Arrow icon"
            />
          </Button>
        </Link>
      </div>

      <div className="md:hidden justify-end items-center">
        <div
          className="flex items-center justify-center w-11 h-11 bg-white rounded-lg"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <X /> : <MenuIcon />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-bg border bg-[#6666D4] border-[#242424] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-20`}
        >
          <ul className="list-none flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-dmSans font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
