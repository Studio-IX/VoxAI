"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { Button } from "./ui/button";

const LandingFooter = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="w-full flex flex-col mt-40 pt-32 pb-16 px-8 md:px-0">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <div>
            <Link href="/" className="flex items-center">
              <Image width={155} height={35} alt="Logo" src="/vox.svg" />
            </Link>
          </div>
          <p className="text-sm md:text-xl font-light text-[#CECECE] font-dmSans mt-6">
            Create content using AI <br /> 10 times faster.
          </p>
          <div className="mt-6 md:mt-12">
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
        </div>

        <div className="md:hidden">
          <div className="flex flex-row space-x-24">
            <div className="flex flex-col mt-12 md:mt-0">
              <p className="footer_title">Product</p>
              <p className="mt-6 footer_item">Pricing</p>
              <p className="mt-3 footer_item">Features</p>
              <p className="mt-3 footer_item">Testimonials</p>
            </div>

            <div className="flex flex-col mt-12 md:mt-0">
              <p className="footer_title">Resources</p>
              <p className="mt-6 footer_item">FAQ</p>
              <p className="mt-3 footer_item">Contact</p>
              <p className="mt-3 footer_item">Terms of service</p>
              <p className="mt-3 footer_item">Privacy policy</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-[55%]">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
              <p className="footer_title">Product</p>
              <p className="mt-6 footer_item">Pricing</p>
              <p className="mt-3 footer_item">Features</p>
              <p className="mt-3 footer_item">Testimonials</p>
            </div>

            <div className="flex flex-col">
              <p className="footer_title">Resources</p>
              <p className="mt-6 footer_item">FAQ</p>
              <p className="mt-3 footer_item">Contact</p>
              <p className="mt-3 footer_item">Terms of service</p>
              <p className="mt-3 footer_item">Privacy policy</p>
            </div>

            <div className="flex flex-col mt-12 md:mt-0">
              <p className="footer_title">More</p>
              <p className="mt-6 footer_item">Studio IX</p>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col mt-12 md:mt-0">
            <p className="footer_title">More</p>
            <p className="mt-6 footer_item">Studio IX</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between mt-20 md:mt-32 px-5 md:px-0">
        <div className="w-full">
          <p className="footer_item text-center md:text-start">
            © 2023 VOX-AI. All rights reserved. Created by{" "}
            <a className=" underline" href="https://studioix.agency">
              Studio IX
            </a>
          </p>
        </div>

        <div className="flex flex-row space-x-6 mt-8 md:mt-0 items-center w-full justify-center md:justify-end">
          <Image
            className=" cursor-pointer"
            width={23}
            height={23}
            src="instagram.svg"
            alt="Instagram logo"
          />
          <Image
            className=" cursor-pointer"
            width={23}
            height={23}
            src="twitter.svg"
            alt="Twitter logo"
          />
          <Image
            className=" cursor-pointer"
            width={23}
            height={23}
            src="github.svg"
            alt="Github logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
