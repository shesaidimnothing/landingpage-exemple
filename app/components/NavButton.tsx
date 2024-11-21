import Image from "next/image";

interface NavButtonProps {
  iconSrc: string;
  alt: string;
}

export default function NavButton({ iconSrc, alt }: NavButtonProps) {
  return (
    <button className="p-2 rounded-lg hover:bg-white/10">
      <Image
        src={iconSrc}
        alt={alt}
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </button>
  );
} 