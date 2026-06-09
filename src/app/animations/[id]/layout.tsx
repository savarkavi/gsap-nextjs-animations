import fs from "fs";
import path from "path";
import { animationRegistry } from "@/data/registry";
import React from "react";
import AnimationWrapper from "./AnimationWrapper";

interface AnimationLayoutProps {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
}

const AnimationLayout = async ({ params, children }: AnimationLayoutProps) => {
  const { id } = await params;
  const animation = animationRegistry[id];

  const fileSourceCodes = animation.files.map((fileName) => {
    const filePath = path.join(
      process.cwd(),
      "src",
      "components",
      "animations",
      id,
      fileName,
    );
    const codeString = fs.readFileSync(filePath, "utf8");
    return {
      fileName,
      code: codeString,
    };
  });

  return (
    <AnimationWrapper metadata={animation} fileSources={fileSourceCodes}>
      {children}
    </AnimationWrapper>
  );
};

export default AnimationLayout;
