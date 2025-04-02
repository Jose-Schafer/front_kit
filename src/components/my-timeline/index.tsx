import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MyTimeline() {
  const data = [
    {
      title: "2022 - Hoy",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Ingeniero de Software en Unholster.
          </p>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Desarrollador Python en área de investigación de Constructora
            Geotécnica.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "Estudios",
      content: (
        <div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            Universidad de Concepción
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              ✅ Ingeniero Civil
            </div>
          </div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            Corfo - USACH
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              ✅ Diplomado en Arquitectura Cloud
            </div>
          </div>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-4">
            AWS
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              ✅ Certificación AWS - Cloud Practitioner
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
