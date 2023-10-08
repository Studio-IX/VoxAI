interface HeadingProps {
  title: string;
  description: string;
}

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="flex flex-col items-start md:px-10 md:-mt-10 space-y-1 md:space-y-3">
      <h2 className="text-2xl md:text-[28px] font-semibold text-start text-white">
        {title}
      </h2>
      <p className="text-[#B2B2B2] font-light text-sm md:text-[18px] text-star">
        {description}
      </p>
    </div>
  );
};
