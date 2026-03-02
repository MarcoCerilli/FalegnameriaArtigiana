import { HardHat } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <HardHat className="h-7 w-7 text-primary" />
      <span className="font-headline text-2xl font-bold text-primary">
        Massimo Artigiano
      </span>
    </div>
  );
}
