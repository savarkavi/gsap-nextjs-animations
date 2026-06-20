import React from "react";
import MenuItem from "./MenuItem";

interface OverlayProps {
  overlayRef: React.RefObject<HTMLDivElement | null>;
  onClose: () => void;
}

const items = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Work" },
  { id: 4, title: "Studio" },
  { id: 5, title: "Contact" },
];

const Overlay = ({ overlayRef, onClose }: OverlayProps) => {
  return (
    <div
      ref={overlayRef}
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      className="absolute top-0 left-0 w-full h-full bg-[#cdb290] text-black"
    >
      <button
        onClick={() => onClose()}
        className="absolute top-6 right-6 uppercase  cursor-pointer"
      >
        Close
      </button>

      <div className="flex flex-col p-12 gap-8">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      <div className="absolute bottom-0 w-full left-0 flex items-center justify-between py-4 px-12 text-xl">
        <p className="uppercase">Sushant productions</p>
        <div className="flex items-center gap-6">
          <p className="cursor-pointer">Instagram ↗</p>
          <p className="cursor-pointer">Youtube ↗</p>
          <p className="cursor-pointer">Twitter ↗</p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
