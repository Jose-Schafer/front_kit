"use client";
import { cn } from "@/lib/utils";

export function Card({
  children,
  gif,
}: {
  children: React.ReactNode;
  gif: string;
}) {
  console.log(gif);
  return (
    <div className="max-w-xl w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://raw.githubusercontent.com/Jose-Schafer/front_kit/refs/heads/feature/home-enhancements/public/imgs/whatsapp-clone.png)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://raw.githubusercontent.com/Jose-Schafer/front_kit/refs/heads/feature/home-enhancements/public/gifs/whatsapp-clone.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://raw.githubusercontent.com/Jose-Schafer/front_kit/refs/heads/feature/home-enhancements/public/gifs/whatsapp-clone.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500",
        )}
      >
        {children}
      </div>
    </div>
  );
}
