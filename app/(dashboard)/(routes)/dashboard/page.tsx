"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="md:px-10 md:-mt-10">
      <div className="mb-8 space-y-1 md:space-y-3">
        <h2 className="text-2xl md:text-[28px] font-semibold text-start text-white">
          Unlock the power of AI
        </h2>
        <p className="text-[#B2B2B2] font-light text-sm md:text-[18px] text-star">
          Get going with VOX AI using these insights and tools...
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="bg-[#242231] w-full md:w-[310px] h-[305px] rounded-[15px] cursor-pointer">
            <div className="h-[235px] w-full md:w-[310px] relative">
              <Image
                className=" rounded-t-[15px] w-full object-cover"
                src="/art1.svg"
                fill
                alt="AI Artwork"
              />
            </div>

            <div className="flex flex-row items-center p-5">
              <Image
                src="/image_active.svg"
                height={24}
                width={24}
                alt="Image icon"
              />
              <p className="text-[16px] md:text-[18px] ml-3 text-white font-medium font-dmSans">
                AI Generated Images
              </p>
            </div>
          </div>

          <div className="bg-[#242231] w-full md:w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-0 md:ml-4 mt-5 md:mt-0">
            <div className="h-[235px] w-full md:w-[310px] relative">
              <Image
                className=" rounded-t-[15px] w-full object-cover"
                src="/art2.svg"
                fill
                alt="AI Artwork"
              />
            </div>

            <div className="flex flex-row items-center p-5">
              <Image
                src="/image_active.svg"
                height={24}
                width={24}
                alt="Image icon"
              />
              <p className="text-[16px] md:text-[18px] ml-3 text-white font-medium font-dmSans">
                AI Generated Images
              </p>
            </div>
          </div>

          <div className="bg-[#242231] w-full md:w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-0 md:ml-4 mt-5 md:mt-0">
            <div className="h-[235px] w-full md:w-[310px] relative">
              <Image
                className=" rounded-t-[15px] w-full object-cover"
                src="/art3.svg"
                fill
                alt="AI Artwork"
              />
            </div>

            <div className="flex flex-row items-center p-5">
              <Image
                src="/image_active.svg"
                height={24}
                width={24}
                alt="Image icon"
              />
              <p className="text-[16px] md:text-[18px] ml-3 text-white font-medium font-dmSans">
                AI Generated Images
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-20 md:mt-12">
        <h3 className="text-white text-[20px] font-medium">Powerful Tools</h3>

        <div className="flex flex-col md:flex-row mt-8 md:mt-5">
          <div
            onClick={() => router.push("/image")}
            className="bg-[#242231] w-full md:w-[310px] h-[305px] rounded-[15px] cursor-pointer"
          >
            <div className="flex items-center justify-center bg-gradient-to-r from-[#E134DB] to-[#2B248E] h-[185px] rounded-t-[15px]">
              <Image
                src="/conversation_active.svg"
                height={60}
                width={60}
                alt="Conversation icon"
              />
            </div>

            <div className="flex flex-col p-5">
              <p className="text-[18px] text-white font-semibold font-dmSans">
                Image Generation
              </p>
              <p className="text-[16px] text-[#B2B2B2] font-normal font-dmSans">
                Create stunning images using our powerful models.
              </p>
            </div>
          </div>

          <div
            onClick={() => router.push("/video")}
            className="bg-[#242231] w-full md:w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-0 mt-5 md:ml-4 md:mt-0"
          >
            <div className="flex items-center justify-center bg-gradient-to-r from-[#34E14B] to-[#2B248E] h-[185px] rounded-t-[15px]">
              <Image
                src="/video_active.svg"
                height={60}
                width={60}
                alt="Video icon"
              />
            </div>

            <div className="flex flex-col p-5">
              <p className="text-[18px] text-white font-semibold font-dmSans">
                Video Generation
              </p>
              <p className="text-[16px] text-[#B2B2B2] font-normal font-dmSans">
                Generate creative videos using our powerful models.
              </p>
            </div>
          </div>

          <div
            onClick={() => router.push("/music")}
            className="bg-[#242231] w-full md:w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-0 mt-5 md:ml-4 md:mt-0"
          >
            <div className="flex items-center justify-center bg-gradient-to-r from-[#E13434] to-[#2B248E] h-[185px] rounded-t-[15px]">
              <Image
                src="/music_active.svg"
                height={60}
                width={60}
                alt="Music icon"
              />
            </div>

            <div className="flex flex-col p-5">
              <p className="text-[18px] text-white font-semibold font-dmSans">
                Music Generation
              </p>
              <p className="text-[16px] text-[#B2B2B2] font-normal font-dmSans">
                Generate music with the help of our powerful models.
              </p>
            </div>
          </div>

          <div
            onClick={() => router.push("/code")}
            className="bg-[#242231] w-full md:w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-0 mt-5 md:ml-4 md:mt-0 mb-10 md:mb-0"
          >
            <div className="flex items-center justify-center bg-gradient-to-r from-[#D8AE22] to-[#2B248E] h-[185px] rounded-t-[15px]">
              <Image
                src="/codeicon_active.svg"
                height={60}
                width={60}
                alt="Code icon"
              />
            </div>

            <div className="flex flex-col p-5">
              <p className="text-[18px] text-white font-semibold font-dmSans">
                Code Generation
              </p>
              <p className="text-[16px] text-[#B2B2B2] font-normal font-dmSans">
                Generate music with the help of our powerful models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
