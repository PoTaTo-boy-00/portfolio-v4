import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "w-full min-h-[180px] rounded-[10px] bg-transparent border-2 border-white/20 px-6 py-4",
        "outline-none text-white placeholder:text-white/30",
        "hover:border-white/40 focus:border-accent",
        "focus:ring-0 focus:bg-transparent",
        "transition-all duration-300 resize-none",
        "text-base font-light",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:border-white/20 dark:focus:border-accent",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
