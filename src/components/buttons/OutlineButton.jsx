import React from "react";
import { twMerge } from "tailwind-merge";

export const OutlineButton = ({ children, className, ...rest }) => {
  return (
    <button
      className={twMerge(
        `relative z-0 inline-flex items-center gap-2 overflow-hidden rounded-md
        border border-accent bg-accent px-4 py-2 text-sm font-medium text-bg
        transition-colors duration-300 ease-out

        before:absolute before:inset-0 before:-z-10
        before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-bg before:content-['']
        before:transition-transform before:duration-700 before:ease-out

        hover:text-fg
        hover:before:translate-x-0 hover:before:translate-y-0
        active:scale-[0.97]`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
