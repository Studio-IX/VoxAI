"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="py-5 bg-transparent flex flex-row items-center justify-between">
      <div>
        <Link href="/" className="flex items-center">
          <Image width={150} height={30} alt="Logo" src="/vox.svg" />
        </Link>
      </div>

      <div className="flex flex-row border bg-[#14131C] border-[#2D2C54] rounded-full py-4 px-10 space-x-8">
        <p className="text-white cursor-pointer">Features</p>
        <p className="text-white cursor-pointer">About</p>
        <p className="text-white cursor-pointer">Testimonials</p>
        <p className="text-white cursor-pointer">Pricing</p>
        <p className="text-white cursor-pointer">FAQ</p>
      </div>

      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button size="nav" variant="primary" className="rounded-full">
            Get Started
            <Image className="ml-2" width={24} height={24} src="/arrow_right.svg" alt="Arrow icon"/>
          </Button>
        </Link>
      </div>
    </nav>
  );
};
