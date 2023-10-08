import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const BotAvatar = () => {
    return(
        <Avatar className="h-[50px] md:h-[60px] w-[50px] md:w-[60px]">
            <AvatarImage className="p-1" src="./bot_avatar.svg"/>
        </Avatar>
    )
}