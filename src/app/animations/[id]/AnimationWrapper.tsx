"use client";

import AnimationHeader from "@/components/layout/AnimationHeader";
import { AnimationItem } from "@/data/registry";
import React from "react";

interface AnimationWrapperProps {
  children: React.ReactNode;
  metadata: AnimationItem;
  fileSources: {
    fileName: string;
    code: string;
  }[];
}

const AnimationWrapper = ({
  children,
  metadata,
  fileSources,
}: AnimationWrapperProps) => {
  return (
    <div className="h-screen bg-[#1877F2] pb-4 px-4 flex flex-col">
      <AnimationHeader />
      <main className="bg-white h-full w-full rounded-xl border flex items-center justify-center overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default AnimationWrapper;
