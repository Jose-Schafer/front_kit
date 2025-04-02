"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-md w-full">
      <Link href={href} className="block w-full h-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-64 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "transition-all duration-500",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Static background image */}
          <div
            className="absolute inset-0 z-0 transition-opacity duration-500"
            style={{ opacity: isHovered ? 0 : 1 }}
          >
            <Image
              src={imageUrl}
              alt="Project preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* GIF that shows on hover */}
          <div
            className="absolute inset-0 z-0 transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <Image
              src={gifUrl}
              alt="Project animation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay on hover */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${isHovered ? "opacity-50" : "opacity-0"}`}
          ></div>

          {children}
        </div>
      </Link>
    </div>
  );
}
