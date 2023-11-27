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
              <a href="#pricing" className="mt-6 footer_item">
                Pricing
              </a>
              <a href="#features" className="mt-3 footer_item">
                Features
              </a>
              <a href="#testimonial" className="mt-3 footer_item">
                Testimonials
              </a>
            </div>

            <div className="flex flex-col mt-12 md:mt-0">
              <p className="footer_title">Resources</p>
              <a href="#faq" className="mt-6 footer_item">
                FAQ
              </a>
              <a
                href="mailto:hey@studioix.agency"
                className="mt-3 footer_item cursor-pointer"
              >
                Contact
              </a>
              <a
                href="https://childlike-brow-7b5.notion.site/Vox-Terms-of-Service-56262b0432404e52bfcfed923d9a773e"
                className="mt-3 footer_item"
              >
                Terms of service
              </a>
              <a
                href="https://childlike-brow-7b5.notion.site/Vox-Privacy-Policy-60b4d69668654adda42e9168982ad0ce?pvs=4"
                className="mt-3 footer_item"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-[55%]">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col">
              <p className="footer_title">Product</p>
              <a href="#pricing" className="mt-6 footer_item">
                Pricing
              </a>
              <a href="#features" className="mt-3 footer_item">
                Features
              </a>
              <a href="#testimonial" className="mt-3 footer_item">
                Testimonials
              </a>
            </div>

            <div className="flex flex-col">
              <p className="footer_title">Resources</p>
              <a href="#faq" className="mt-6 footer_item">
                FAQ
              </a>
              <a href="mailto:hey@studioix.agency" className="mt-3 footer_item">
                Contact
              </a>
              <a
                href="https://childlike-brow-7b5.notion.site/Vox-Terms-of-Service-56262b0432404e52bfcfed923d9a773e"
                className="mt-3 footer_item"
              >
                Terms of service
              </a>
              <a
                href="https://childlike-brow-7b5.notion.site/Vox-Privacy-Policy-60b4d69668654adda42e9168982ad0ce?pvs=4"
                className="mt-3 footer_item"
              >
                Privacy policy
              </a>
            </div>

            <div className="flex flex-col mt-12 md:mt-0">
              <p className="footer_title">More</p>
              <a href="https://dantedavisdesign.com" className="mt-6 footer_item">
                Dante Davis Design
              </a>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col mt-12 md:mt-0">
            <p className="footer_title">More</p>
            <a href="https://dantedavisdesign.com" className="mt-6 footer_item">
              Dante Davis Design
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between mt-20 md:mt-32 px-5 md:px-0">
        <div className="w-full">
          <p className="footer_item text-center md:text-start">
            © 2023 VOX-AI. All rights reserved. Created by{" "}
            <a className="underline" href="https://dantedavisdesign.com">
              Dante Davis Design
            </a>
          </p>
        </div>

        <div className="flex flex-row space-x-6 mt-8 md:mt-0 items-center w-full justify-center md:justify-end">
          <Link href="https://instagram.com/studioix.agency">
            <Image
              className="hover:brightness-200 transition-all cursor-pointer"
              width={23}
              height={23}
              src="instagram.svg"
              alt="Instagram logo"
            />
          </Link>

          <Link href="https://twitter.com/studioixagency">
            <Image
              className="hover:brightness-200 transition-all cursor-pointer"
              width={23}
              height={23}
              src="twitter.svg"
              alt="Twitter logo"
            />
          </Link>

          <Link href="https://github.com/studioix">
            <Image
              className="hover:brightness-200 transition-all cursor-pointer"
              width={23}
              height={23}
              src="github.svg"
              alt="Github logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
