"use client";

import { useRef } from "react";
import Hero from "./Hero";
import Overlay from "./Overlay";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { cormorant } from "@/fonts/fonts";

gsap.registerPlugin(useGSAP);

const Animation1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayTl = useRef<gsap.core.Timeline>(null);

  const openOverlay = () => overlayTl.current?.play();
  const closeOverlay = () => overlayTl.current?.reverse();

  useGSAP(
    () => {
      overlayTl.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.in",
          duration: 1,
        })
        .to(".menu-item .text-top", { yPercent: -100, stagger: 0.04 })
        .to(".menu-item .text-bottom", { yPercent: -100, stagger: 0.04 }, "<");
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={cn(cormorant.className, "w-full h-full relative")}
    >
      <Hero onOpen={openOverlay} />
      <Overlay overlayRef={overlayRef} onClose={closeOverlay} />
    </div>
  );
};

export default Animation1;
