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
    <div className="text-white font-bold pt-20 pb-36 text-center space-y-5">
      <div className="w-full items-center flex flex-col justify-center">
        <div className="w-fit flex flex-row justify-between items-center px-2 py-3 cursor-pointer rounded-full border border-[#2D2C54] bg-[#14131C] z-10">
          <div className="flex flex-row items-center ml-4 mr-2">
            <p className="font-normal">Introducing VOX-AI</p>
          </div>
          <div className="mr-4">
            <ArrowRight color="#6666D4" className=" -rotate-45" />
          </div>
        </div>
      </div>

      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-[#6666D4] bg-clip-text">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-[#CECECE]">
        Create content using AI 10x faster.
      </div>

      <div className="flex flex-row items-center justify-center space-x-4 py-10">
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button size="nav" variant="primary" className="rounded-full">
              Learn Pricing
              <ChevronRight />
            </Button>
          </Link>
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

      <div>
        <Image
          height={800}
          width={1420}
          src="/dashboard.svg"
          alt="Vox-ai dashabord"
        />
      </div>
    </div>
  );
};
