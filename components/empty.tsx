"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  const pathname = usePathname();

  // Define the default src
  let src = "/empty.png";

  // Check the current path and update src accordingly
  if (pathname === "/conversation" || pathname === "/video" || pathname === "/code") {
    src = "/empty2.png";
  }

  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <Image alt="Empty" width={525} height={395} src={src} />
      <p className="text-[#B2B2B2] font-light text-sm md:text-[18px] text-star mt-5">
        {label}
      </p>
    </div>
  );
};
