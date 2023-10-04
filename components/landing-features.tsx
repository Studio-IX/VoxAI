import Image from "next/image";

const LandingFeatures = () => {
  return (
    <div id="features" className="flex flex-col w-full md:py-20">
      <div>
        <p className="section_headers">IT DOES THE JOB</p>
        <h2 className="section_titles mt-5">
          Cutting edge AI tools <br /> with no compromises
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-y-0 items-center mt-20 px-5 md:px-0">
        <div className="flex flex-col items-center w-full md:w-[445px] h-[305px] bg-[#19192A] rounded-[20px] justify-between">
          <div className="mt-6">
            <Image
              height={135}
              width={135}
              src="/dashboard.png"
              alt="Dashboard icon"
            />
          </div>
          <div className="flex flex-col h-[130px] w-full bg-[#171728] items-center justify-center rounded-b-[20px]">
            <p className="text-white font-dmSans font-medium text-[18px] md:text-[20px]">
              Dashboard
            </p>
            <p className="text-[#CECECE] font-dmSans font-normal text-[16px] md:text-[18px] mt-1">
              Access all AI tools in one place.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-[445px] h-[305px] bg-[#19192A] rounded-[20px] justify-between">
          <div className="mt-6">
            <Image
              height={135}
              width={135}
              src="/conversation.png"
              alt="Conversation icon"
            />
          </div>
          <div className="flex flex-col h-[130px] w-full bg-[#171728] items-center justify-center rounded-b-[20px]">
            <p className="text-white font-dmSans font-medium text-[18px] md:text-[20px]">
              Conversation
            </p>
            <p className="text-[#CECECE] font-dmSans font-normal text-[16px] md:text-[18px] mt-1">
              Converse freely with VOX-AI in real time.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-[445px] h-[305px] bg-[#19192A] rounded-[20px] justify-between">
          <div className="mt-6">
            <Image
              height={135}
              width={135}
              src="/image.png"
              alt="Image generation icon"
            />
          </div>
          <div className="flex flex-col h-[130px] w-full bg-[#171728] items-center justify-center rounded-b-[20px]">
            <p className="text-white font-dmSans font-medium text-[18px] md:text-[20px]">
              Image Generation
            </p>
            <p className="text-[#CECECE] font-dmSans font-normal text-[16px] md:text-[18px] mt-1">
              Generate images using our powerful model.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-5 space-y-5 md:space-y-0 items-center mt-5 md:mt-20 px-5 md:px-0">
        <div className="flex flex-col items-center w-full md:w-[445px] h-[305px] bg-[#19192A] rounded-[20px] justify-between">
          <div className="mt-6">
            <Image
              height={135}
              width={135}
              src="/video.png"
              alt="Video generation icon"
            />
          </div>
          <div className="flex flex-col h-[130px] w-full bg-[#171728] items-center justify-center rounded-b-[20px]">
            <p className="text-white font-dmSans font-medium text-[18px] md:text-[20px]">
              Video Generation
            </p>
            <p className="text-[#CECECE] font-dmSans font-normal text-[16px] md:text-[18px] mt-1">
              Generate videos using our powerful model.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-[445px] h-[305px] bg-[#19192A] rounded-[20px] justify-between">
          <div className="mt-6">
            <Image
              height={135}
              width={135}
              src="/music.png"
              alt="Music generation icon"
            />
          </div>
          <div className="flex flex-col h-[130px] w-full bg-[#171728] items-center justify-center rounded-b-[20px]">
            <p className="text-white font-dmSans font-medium text-[18px] md:text-[20px]">
              Music Generation
            </p>
            <p className="text-[#CECECE] font-dmSans font-normal text-[16px] md:text-[18px] mt-1">
              Generate music using our powerful model.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-[445px] h-[305px] bg-[#19192A] rounded-[20px] justify-between">
          <div className="mt-6">
            <Image
              height={135}
              width={135}
              src="/codegen.png"
              alt="Code generation icon"
            />
          </div>
          <div className="flex flex-col h-[130px] w-full bg-[#171728] items-center justify-center rounded-b-[20px]">
            <p className="text-white font-dmSans font-medium text-[18px] md:text-[20px]">
              Code Generation
            </p>
            <p className="text-[#CECECE] font-dmSans font-normal text-[16px] md:text-[18px] mt-1">
              Generate code using our powerful model.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFeatures;
