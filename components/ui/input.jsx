import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full h-[52px] rounded-[10px] bg-[#18181b] border-2 border-white/20 px-6 outline-none focus:border-accent text-white placeholder:text-white/30 hover:border-white/40 transition-all duration-300",
        "text-base font-light",
        "focus:ring-0 focus:bg-transparent focus:border-accent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:border-white/20 dark:focus:border-accent",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
