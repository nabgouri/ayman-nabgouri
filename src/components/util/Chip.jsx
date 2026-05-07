import React from "react";

export const Chip = ({ children }) => {
  return (
    <span className="text-xs px-2 py-1 rounded bg-bg-elevated text-fg-muted tracking-[0.04em]">
      {children}
    </span>
  );
};
