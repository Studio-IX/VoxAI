"use client";

import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

export const LandingPricing = () => {
  const { isSignedIn } = useAuth();

  return (
    <div
      id="pricing"
      className="w-full flex flex-col items-center px-5 md:px-0 pt-40 md:py-20"
    >
      <div>
        <p className="section_headers">PRICING PLANS</p>
        <h2 className="section_titles mt-5">Pricing Plans</h2>
      </div>

      {/* Monthly / Yearly */}
      <div></div>

      <div className="flex flex-col md:flex-row items-center w-full md:w-fit justify-between space-y-5 md:space-y-0 space-x-0 md:space-x-10 mt-10 md:mt-20">
        <div className="flex flex-col items-center justify-center w-full md:w-[385px] h-[720px] pt-[52px] bg-[#19192A] border border-[#6666D4]/10 rounded-[1.8rem]">
          <h6 className="pricing_title">Free</h6>
          <p className="pricing_description w-[310px] mt-4">
            VOX-AI comes loaded with five useful and powerful AI tools to help
            you create 10 times faster and easier.
          </p>

          <h6 className="mt-10 text-[16px] font-dmSans font-normal text-[#9B9CA1]">
            <span className="text-[38px] font-dmSans font-semibold text-white">
              $0{" "}
            </span>
            /month
          </h6>

          <div className="w-full flex flex-col items-start justify-center">
            <div className="flex w-full justify-center items-center my-12">
              <div className="h-[0.1rem] w-[280px] bg-[#303040]" />
            </div>
            <div className="w-full px-10 space-y-2">
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Limited access</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Normal Chats</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Basic AI model</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Slower response</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <button className="flex border border-white bg-transparent text-white py-4 md:py-5 font-dmSans px-24 w-fit items-center justify-center rounded-full text-[16px] md:text-[18px] font-medium mt-10">
                  Get Started
                  <Image
                    className="ml-2"
                    width={24}
                    height={24}
                    src="/arrow_right.svg"
                    alt="Arrow icon"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-[385px] h-[720px] bg-[#19192A] border border-[#6666D4] rounded-[1.8rem]">
          <div className="w-fit flex flex-row justify-between items-center px-4 py-2 cursor-pointer rounded-full border border-[#404081] bg-transparent">
            <div className="flex flex-row items-center justify-center">
              <Sparkles color="white" />
              <p className="section_tag_title ml-1 mr-1">Best Value</p>
            </div>
          </div>
          <h6 className="pricing_title mt-4">Premium</h6>
          <p className="pricing_description w-[310px] mt-4">
            VOX-AI comes loaded with five useful and powerful AI tools to help
            you create 10 times faster and easier.
          </p>

          <h6 className="mt-10 text-[16px] font-dmSans font-normal text-[#9B9CA1]">
            <span className="text-[38px] font-dmSans font-semibold text-white">
              $19{" "}
            </span>
            /month
          </h6>

          <div className="w-full flex flex-col items-start justify-center">
            <div className="flex w-full justify-center items-center my-12">
              <div className="h-[0.1rem] w-[280px] bg-[#303040]" />
            </div>
            <div className="w-full px-10 space-y-2">
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Unlimited access</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Secure & Encrypted Chats</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Advanced AI model</p>
              </div>
              <div className="flex flex-row space-x-5">
                <Image
                  width={20}
                  height={20}
                  alt="Check icon"
                  src="/check.svg"
                />
                <p className="pricing_features">Email support</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Link href="https://studioixagency.lemonsqueezy.com/checkout/buy/285a3cd1-cf55-44db-aeea-b02ccec3c111">
                <button className="flex bg-[#6666D4] text-white hover:bg-[#6666D4]/90 transition-all py-4 md:py-5 font-dmSans px-20 w-fit items-center justify-center rounded-full text-[16px] md:text-[18px] font-medium mt-10">
                  Purchase Now
                  <Image
                    className="ml-2"
                    width={24}
                    height={24}
                    src="/arrow_right.svg"
                    alt="Arrow icon"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
