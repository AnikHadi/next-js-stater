import React from "react";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <div className="min-h-screen sm:px-2 md:px-4 xl:px-20 2xl:px-32">
      {children}
    </div>
  );
}
