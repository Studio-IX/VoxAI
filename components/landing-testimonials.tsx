import Image from "next/image";
import Marquee from "react-fast-marquee";

const LandingTestimonials = () => {
  return (
    <div
      id="testimonial"
      className="w-full flex flex-col items-center md:px-0 pt-40 md:py-40"
    >
      <div className="mb-20 px-5">
        <p className="section_headers">TESTIMONIALS</p>
        <h2 className="section_titles mt-5">What are users saying</h2>
      </div>

      <Marquee autoFill>
        <div className="flex flex-col p-5 w-[300px] h-fit bg-[#19192A] border border-[#30305D] rounded-[20px] mx-5">
          <p className="text-[16px] text-white font-dmSans font-normal">
            VOX AI is a versatile tool that has helped my marketing team
            immensely. From generating images for social media to crafting
            engaging chatbot responses, it&apos;s a must-have for businesses
            looking to stay ahead in the digital world.
          </p>

          <div className="flex flex-row mt-4">
            <Image height={45} width={45} src="/laura.png" alt="User image" />

            <div className="flex flex-col ml-4">
              <p className="text-[16px] text-white font-dmSans font-semibold">
                Laura Miller
              </p>
              <p className="text-[16px] text-white font-dmSans font-normal">
                User
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 w-[300px] h-fit bg-[#19192A] border border-[#30305D] rounded-[20px] mx-5">
          <p className="text-[16px] text-white font-dmSans font-normal">
            VOX AI&apos;s video generation is a real time-saver for my YouTube
            channel. It&apos;s like having a personal video editor that works
            around the clock. I can&apos;t imagine producing content without it.
            Highly recommended tool for creatives out there.
          </p>

          <div className="flex flex-row mt-4">
            <Image height={45} width={45} src="/alex.png" alt="User image" />

            <div className="flex flex-col ml-4">
              <p className="text-[16px] text-white font-dmSans font-semibold">
                Alex Bennett
              </p>
              <p className="text-[16px] text-white font-dmSans font-normal">
                User
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 w-[300px] h-fit bg-[#19192A] border border-[#30305D] rounded-[20px] mx-5">
          <p className="text-[16px] text-white font-dmSans font-normal">
            I run a small e-commerce business, and VOX AI&apos;s image
            generation has helped me create product images and advertisements
            effortlessly. It&apos;s user-friendly and incredibly powerful and
            has helped streamline my design process.
          </p>

          <div className="flex flex-row mt-4">
            <Image height={45} width={45} src="/daniel.png" alt="User image" />

            <div className="flex flex-col ml-4">
              <p className="text-[16px] text-white font-dmSans font-semibold">
                Daniel Park
              </p>
              <p className="text-[16px] text-white font-dmSans font-normal">
                User
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 w-[300px] h-fit bg-[#19192A] border border-[#30305D] rounded-[20px] mx-5">
          <p className="text-[16px] text-white font-dmSans font-normal">
            VOX AI is a true innovation in content creation. Whether it&apos;s
            generating code, designing visuals, or crafting music, it&apos;s a
            valuable asset for anyone looking to take their creative projects to
            the next level.
          </p>

          <div className="flex flex-row mt-4">
            <Image height={45} width={45} src="/sophia.png" alt="User image" />

            <div className="flex flex-col ml-4">
              <p className="text-[16px] text-white font-dmSans font-semibold">
                Sophia Lewis
              </p>
              <p className="text-[16px] text-white font-dmSans font-normal">
                User
              </p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default LandingTestimonials;
