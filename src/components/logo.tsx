import { HardHat } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <HardHat className="h-8 w-8 text-primary" />
      <div>
        <span className="font-headline text-2xl font-bold text-primary leading-none">
          Mave
        </span>
        <p className="text-xs text-muted-foreground -mt-1">
          di Simonelli Massimo
        </p>
      </div>
    </div>
  );
}
