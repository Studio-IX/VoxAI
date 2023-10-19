"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold pt-12 md:pt-20 pb-36 text-center space-y-5">
      <div className="w-full items-center flex flex-col justify-center">
        <div className="hidden md:block">
          <div className="absolute -left-[20rem] -top-[25rem] z-0">
            <Image
              className=""
              height={1000}
              width={1000}
              src="/circle.png"
              alt="Circle"
            />
          </div>
        </div>
        <div className="w-fit flex flex-row justify-between items-center px-1 md:px-2 py-2 md:py-3 cursor-pointer rounded-full border border-[#2D2C54] bg-[#14131C] z-10">
          <div className="flex flex-row items-center ml-4 mr-2">
            <p className="font-normal text-[#6666D4] font-dmSans text-[13px] md:text-[16px]">
              Introducing VOX-AI
            </p>
          </div>
          <div className="mr-4">
            <ArrowRight color="#6666D4" className=" -rotate-45" />
          </div>
        </div>
      </div>

      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-dmSans font-bold z-10">
        <h1>The Best AI Tool for</h1>
        <div className="text-[#6666D4] bg-clip-text">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Video Generation.",
                "Mail Writing.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-[16px] md:text-[18px] font-light text-[#CECECE] font-dmSans z-10">
        Create content using AI 10x faster.
      </div>

      <div className="flex flex-row items-center justify-center space-x-4 py-10 z-10">
        <div>
          <a href="#pricing">
            <Button size="nav" variant="primary" className="rounded-full">
              Learn Pricing
              <ChevronRight />
            </Button>
          </a>
        </div>

        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              size="nav"
              variant="primary_outline"
              className="rounded-full"
            >
              Login
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-5 md:p-0 z-10">
        <Image
          height={800}
          width={1420}
          src="/hero_img.png"
          alt="Vox-ai dashabord"
        />
      </div>

      <div className="w-full flex items-center justify-start pt-20 px-5 md:px-0">
        <p className="font-normal text-[#CECECE] font-dmSans">
          It&apos;s for pretty much everyone
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:items-center px-5 md:px-0">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-fit flex flex-row justify-between items-center px-2 py-3 cursor-pointer rounded-full border border-[#2D2C54] bg-[#14131C] z-10">
            <Image
              className="ml-4"
              width={24}
              height={24}
              src="/design.svg"
              alt="Designers icon"
            />
            <div className="flex flex-row items-center ml-4 mr-2">
              <p className="font-dmSans font-normal text-white mr-4">
                For Designers
              </p>
            </div>
          </div>

          <div className="w-fit flex flex-row justify-between items-center px-2 py-3 cursor-pointer rounded-full border border-[#2D2C54] bg-[#14131C] z-10">
            <Image
              className="ml-4"
              width={24}
              height={24}
              src="/code.svg"
              alt="Designers icon"
            />
            <div className="flex flex-row items-center ml-4 mr-2">
              <p className="font-dmSans font-normal text-white mr-4">
                For Developers
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-fit flex flex-row justify-between items-center px-2 py-3 cursor-pointer rounded-full border border-[#2D2C54] bg-[#14131C] z-10">
            <Image
              className="ml-4"
              width={24}
              height={24}
              src="/write.svg"
              alt="Writers icon"
            />
            <div className="flex flex-row items-center ml-4 mr-2">
              <p className="font-dmSans font-normal text-white mr-4">
                For Writers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
