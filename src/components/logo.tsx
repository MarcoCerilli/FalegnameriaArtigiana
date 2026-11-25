import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center group select-none">
      <div className="relative flex items-center justify-center h-14 md:h-16 w-auto overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.jpg"
          alt="Mave Arredamenti Logo"
          width={140}
          height={140}
          sizes="(max-width: 768px) 112px, 128px"
          className="object-contain h-full w-auto rounded-xl"
          priority
        />
      </div>
    </div>
  );
}
