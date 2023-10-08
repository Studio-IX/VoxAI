"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { FreeCounter } from "./free-counter";

const routes = [
  {
    label: "Dashboard",
    icon: "/dash.svg",
    activeIcon: "/dash_active.svg",
    href: "/dashboard",
  },
  {
    label: "Conversation",
    icon: "/conversation.svg",
    activeIcon: "/conversation_active.svg",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: "/image.svg",
    activeIcon: "/image_active.svg",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: "video.svg",
    activeIcon: "/video_active.svg",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: "/music.svg",
    activeIcon: "/music_active.svg",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: "/codeicon.svg",
    activeIcon: "/codeicon_active.svg",
    href: "/code",
  },
  {
    label: "Settings",
    icon: "/settings.svg",
    activeIcon: "/settings_active.svg",
    href: "/settings",
  },
];

interface SidebarProps {
  apiLimitCount: number;
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
  const pathname = usePathname();
return (
    <div className="space-y-4 py-4 flex flex-col h-screen bg-[#14131C] w-[330px] md:w-[350px] px-2 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-12 md:mb-14">
          <Image width={155} height={35} alt="Logo" src="/vox.svg" />
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-[16px] md:text-[18px] font-dmSans font-normal group flex p-3 w-[280px] md:w-full justify-start cursor-pointer hover:text-white hover:bg-[#6666D4]/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-[#6666D4] hover:bg-[#6666D4]"
                  : "text-[#B2B2B2]"
              )}
            >
              <div className="flex items-center flex-1">
                <Image
                  width={24}
                  height={24}
                  alt={route.label}
                  src={pathname === route.href ? route.activeIcon : route.icon}
                  className={cn("h-5 w-5 mr-3")}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default Sidebar;
