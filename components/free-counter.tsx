"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { useUser } from "@clerk/clerk-react";
import { UserAvatar } from "./user-avatar";

interface FreeCounterProps {
  apiLimitCount: number;
}

export const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-2">
      <Card className="bg-[#1D1B29] border-0 mb-[30px]">
        <CardContent className="py-6 ">
          <div className="text-center text-sm text-white mb-4">
            <div className="flex flex-row items-center">
              <UserAvatar />
              <div className="flex flex-col ml-4 w-full">
                <div className="flex flex-row items-center w-full justify-between">
                  <p className="text-start text-[15px] font-dmSans font-medium">
                    {user?.fullName}
                  </p>
                  <div className="ml-3 bg-[#3D7253] px-[5px] py-[2px] rounded-md">
                    <p className="text-white text-[12px] font-dmSans font-normal">
                      Free
                    </p>
                  </div>
                </div>
                <p className="text-start text-[#B2B2B2] text-[15px] font-dmSans font-normal">
                  {
                    user?.emailAddresses.find((address) => address)
                      ?.emailAddress
                  }
                </p>
              </div>
            </div>
            <p className="font-dmSans font-normal mt-4">
              {MAX_FREE_COUNTS - apiLimitCount} Free Generations Left
            </p>
            <Progress
              className="h-3 mt-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            size="pro"
            onClick={proModal.onOpen}
            className="w-full mt-4"
            variant="premium"
          >
            Upgrade to Pro
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
