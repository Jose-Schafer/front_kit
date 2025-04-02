"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Card({
  children,
  imageUrl,
  gifUrl,
  href,
}: {
  children: React.ReactNode;
  imageUrl: string;
  gifUrl: string;
  href: string;
}) {
  return (
    <div className="max-w-md w-full">
      <Link href={href} className="block w-full h-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            `bg-[url(${imageUrl})] bg-cover`,
            // Preload hover image by setting it in a pseudo-element
            `before:bg-[url(${gifUrl})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
            `hover:bg-[url(${gifUrl})]`,
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500",
          )}
        >
          {children}
        </div>
      </Link>
    </div>
  );
}
