import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center group cursor-pointer select-none">
      <div className="relative flex items-center justify-center h-24 w-auto overflow-hidden transition-all duration-300 group-hover:scale-105">
        <Image 
          src="/logo.jpg" 
          alt="Mave Arredamenti Logo" 
          width={180} 
          height={180} 
          className="object-contain h-full w-auto scale-160"
          priority
        />
      </div>
    </div>
  );
}