import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <Image alt="Empty" width={525} height={395} src="/empty.png" />
      <p className="text-[#B2B2B2] font-light text-sm md:text-[18px] text-star mt-5">
        {label}
      </p>
    </div>
  );
};
