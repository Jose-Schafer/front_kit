import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function MyTimeline() {
  const data = [
    {
      title: "2022 - Hoy",
      content: (
        <div>
          <h1 className="text-black font-bold pb-2">Unholster</h1>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            Ingeniero de Software en Unholster.
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal">
            <b>Roles:</b>
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal">
            - Ingeniero de Datos
          </p>
          <p className="text-neutral-800 text-xs md:text-sm font-normal mb-8">
            - FullStack Developer
          </p>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <h1 className="text-black font-bold pb-2">Pangea Geotecnia</h1>
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
          <p className="text-black text-md font-bold">Corfo - USACH</p>
          <p className="text-secondary text-xs mb-2">2023</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              - Diplomado en Arquitectura Cloud
            </div>
          </div>
          <p className="text-black text-md font-bold">AWS</p>
          <p className="text-secondary text-xs mb-2">2023</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              - Certificación AWS - Cloud Practitioner
            </div>
          </div>
          <p className="text-black text-md font-bold">
            Universidad de Concepción
          </p>
          <p className="text-secondary text-xs mb-2">2014-2019</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              - Ingeniero Civil
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
