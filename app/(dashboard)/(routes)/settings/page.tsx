"use client";

import { Heading } from "@/components/heading";

const SettingsPage = () => {
  return (
    <div className="flex flex-col h-[85vh]">
      <Heading title="Settings" description="" />

      <div className="md:p-10">
        <h4 className="text-[#B2B2B2] font-dmSans font-medium text-[20px] mt-10 md:mt-0">Info</h4>

        <div className="flex flex-row items-center mt-4">
          <p className="font-dmSans font-normal text-[16px] text-white">
            Current plan
          </p>

          <div className="ml-3 bg-[#3D7253] px-[12px] py-[8px] rounded-lg">
            <p className="text-white text-[12px] font-dmSans font-normal">
              Free
            </p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default SettingsPage;
