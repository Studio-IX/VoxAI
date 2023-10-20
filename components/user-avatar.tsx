import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className="h-10 md:h-11 w-10 md:w-11">
      <AvatarImage src={user?.profileImageUrl} />
      <AvatarFallback>
        <p className="text-white font-dmSans font-normal">
          {user?.firstName?.charAt(0)}
        </p>
        <p className="text-white font-dmSans font-normal">
          {user?.lastName?.charAt(0)}
        </p>
      </AvatarFallback>
    </Avatar>
  );
};
