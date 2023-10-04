import { Sparkles, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export const LandingPricing = () => {
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
            Nova comes loaded with pre-created personalities and popular
            individuals dead and alive, Try Albert Einstein or Elon Musk for
            example.
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
                <p className="pricing_features">Maximum 2 personalities</p>
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
                <p className="pricing_features">Email support</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Button
                variant="primary_outline_white"
                size="nav"
                className="rounded-full w-[85%] mt-10"
              >
                Get Started
                <Image
                  className="ml-2"
                  width={24}
                  height={24}
                  src="/arrow_right.svg"
                  alt="Arrow icon"
                />
              </Button>
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
            Nova comes loaded with pre-created personalities and popular
            individuals dead and alive, Try Albert Einstein or Elon Musk for
            example.
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
                <p className="pricing_features">Maximum 20 personalities</p>
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
              <Button
                variant="primary"
                size="nav"
                className="rounded-full w-[85%] mt-10"
              >
                Get Started
                <Image
                  className="ml-2"
                  width={24}
                  height={24}
                  src="/arrow_right.svg"
                  alt="Arrow icon"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
