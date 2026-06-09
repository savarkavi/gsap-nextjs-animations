import { permanantMarker } from "@/fonts/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Code2, RotateCcw } from "lucide-react";

const AnimationHeader = () => {
  return (
    <header className="py-3 px-1 text-white flex justify-between items-center">
      <div className="flex items-center gap-4">
        <ArrowLeft className="size-5 cursor-pointer" />
        <ArrowRight className="size-5 cursor-pointer" />
      </div>
      <p className={cn(permanantMarker.className, "text-lg cursor-pointer")}>
        GSAP ANIMATIONS
      </p>
      <div className="flex items-center gap-5 h-full">
        <div className="flex items-center gap-2 cursor-pointer">
          <span>Code</span>
          <Code2 className="size-5" />
        </div>
        <div className="w-px h-[80%] bg-white" />
        <div className="flex items-center gap-2 cursor-pointer">
          <span>Replay</span>
          <RotateCcw className="size-4" />
        </div>
      </div>
    </header>
  );
};

export default AnimationHeader;
