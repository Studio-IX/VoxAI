import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const BotAvatar = () => {
    return(
        <Avatar className="h-[60px] w-[60px]">
            <AvatarImage className="p-1" src="./bot_avatar.svg"/>
        </Avatar>
    )
}