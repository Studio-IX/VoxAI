import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[50px] md:h-[60px] w-full rounded-[10px] border border-input bg-[#242231] text-white px-3 py-2 text-[16px] md:text-[18px] font-normal font-dmSans ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#B2B2B2] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
