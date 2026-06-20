import Image from "next/image";

interface HeroProps {
  onOpen: () => void;
}

const Hero = ({ onOpen }: HeroProps) => {
  return (
    <div className="w-full h-full rounded-xl relative">
      <div className="relative w-full h-full rounded-xl">
        <Image
          src="/animation-1.jpg"
          alt="hero image"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <button
        onClick={() => onOpen()}
        className="absolute top-6 right-6 text-white uppercase cursor-pointer"
      >
        Menu
      </button>
    </div>
  );
};

export default Hero;
