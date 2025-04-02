import { Boxes } from "@/components/ui/background-boxes";

export function BackgroundBoxes({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900/60 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="absolute inset-0 w-full h-full">
        <Boxes />
      </div>
      {children}
    </div>
  );
}
