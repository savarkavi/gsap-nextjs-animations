"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const MenuItem = ({ item }: { item: { id: number; title: string } }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const topTextRef = useRef<HTMLParagraphElement | null>(null);
  const bottomTextRef = useRef<HTMLParagraphElement | null>(null);
  const hoverTl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;

      const topText = new SplitText(topTextRef.current, { type: "chars" });
      const bottomText = new SplitText(bottomTextRef.current, {
        type: "chars",
      });

      hoverTl.current = gsap
        .timeline({ paused: true })
        .to(topText.chars, { yPercent: -100, stagger: 0.04 })
        .to(bottomText.chars, { yPercent: -100, stagger: 0.04 }, 0);

      const handleMouseEnter = contextSafe(() => hoverTl.current?.play());
      const handleMouseLeave = contextSafe(() => hoverTl.current?.reverse());

      itemRef.current?.addEventListener("mouseenter", handleMouseEnter);
      itemRef.current?.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        itemRef.current?.removeEventListener("mouseenter", handleMouseEnter);
        itemRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: itemRef },
  );

  return (
    <div
      ref={itemRef}
      className="menu-item relative overflow-hidden text-9xl uppercase
 h-30 w-fit cursor-pointer whitespace-nowrap px-2"
    >
      <p className="invisible">{item.title}</p>

      <p
        ref={topTextRef}
        className="text-top absolute inset-0 translate-y-full"
      >
        {item.title}
      </p>
      <p
        ref={bottomTextRef}
        className="text-bottom absolute inset-0 translate-y-[200%]"
      >
        {item.title}
      </p>
    </div>
  );
};

export default MenuItem;
