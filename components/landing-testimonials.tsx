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
            VOX has become my go-to companion. It&apos;s like having a friend
            who&apos;s always there, ready to chat, share a joke, or lend a
            helping hand. The customization is incredible, making Nova feel
            truly like my own.
          </p>

          <div className="flex flex-row mt-4">
            <Image height={45} width={45} src="/user1.svg" alt="User image" />

            <div className="flex flex-col ml-4">
              <p className="text-[16px] text-white font-dmSans font-semibold">
                David Brown
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
