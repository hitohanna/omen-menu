import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-xl border border-black bg-white px-3 py-1 text-sm transition-colors file:border-0 file:bg-kuning/30 file:rounded-lg file:cursor-pointer file:placeholder:italic file:text-sm file:font-medium placeholder:text-black/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kuning disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
