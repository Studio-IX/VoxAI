"use client";

import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  ArrowRight,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="px-10 -mt-10">
      <div className="mb-8 space-y-3">
        <h2 className="text-2xl md:text-[28px] font-semibold text-start text-white">
          Unlock the power of AI
        </h2>
        <p className="text-[#B2B2B2] font-light text-sm md:text-[18px] text-star">
          Get going with VOX AI using these insights and tools...
        </p>
      </div>
      {/* <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div> */}

      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="bg-[#242231] w-[310px] h-[305px] rounded-[15px] cursor-pointer">
            <Image
              className=" rounded-t-[15px]"
              src="/art1.svg"
              height={235}
              width={310}
              alt="AI Artwork"
            />

            <div className="flex flex-row items-center p-5">
              <Image
                src="/image_active.svg"
                height={24}
                width={24}
                alt="Image icon"
              />
              <p className="text-[18px] ml-3 text-white font-medium font-dmSans">
                AI Generated Images
              </p>
            </div>
          </div>

          <div className="bg-[#242231] w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-4">
            <Image
              className=" rounded-t-[15px]"
              src="/art2.svg"
              height={235}
              width={310}
              alt="AI Artwork"
            />

            <div className="flex flex-row items-center p-5">
              <Image
                src="/image_active.svg"
                height={24}
                width={24}
                alt="Image icon"
              />
              <p className="text-[18px] ml-3 text-white font-medium font-dmSans">
                AI Generated Images
              </p>
            </div>
          </div>
          
          <div className="bg-[#242231] w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-4">
            <Image
              className=" rounded-t-[15px]"
              src="/art3.svg"
              height={235}
              width={310}
              alt="AI Artwork"
            />

            <div className="flex flex-row items-center p-5">
              <Image
                src="/image_active.svg"
                height={24}
                width={24}
                alt="Image icon"
              />
              <p className="text-[18px] ml-3 text-white font-medium font-dmSans">
                AI Generated Images
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col mt-12">
        <h3 className="text-white text-[20px] font-medium">Powerful Tools</h3>

        <div className="flex flex-row mt-5">
          <div onClick={() => router.push("/image")} className="bg-[#242231] w-[310px] h-[305px] rounded-[15px] cursor-pointer">
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

          <div onClick={() => router.push("/video")} className="bg-[#242231] w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-4">
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

          <div onClick={() => router.push("/music")} className="bg-[#242231] w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-4">
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

          <div onClick={() => router.push("/code")} className="bg-[#242231] w-[310px] h-[305px] rounded-[15px] cursor-pointer ml-4">
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
