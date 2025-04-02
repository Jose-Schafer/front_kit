"use client";
import { cn } from "@/lib/utils";

import { BackgroundBoxes } from "@/components/background-boxes";
import { Card } from "@/components/card";
import { MyTimeline } from "@/components/my-timeline";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <BackgroundBoxes>
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Hola! Soy José Schafer!
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Este es mi portafolio de desarrollo!
        </p>
      </BackgroundBoxes>

      {/* About Me */}
      <div className="mx-96 pt-16">
        <h1 className="text-2xl text-accent font-semibold pb-4">About me</h1>
        <p className="text-text pb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Projects */}
      <div className="mx-96 pt-16">
        <h1 className="text-2xl text-accent font-semibold pb-4">Projects</h1>
        <p className="text-text pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="flex justify-between pb-16">
          <div className="mr-4">
            <Card
              href="/whatsapp-clone"
              gifUrl="https://raw.githubusercontent.com/Jose-Schafer/front_kit/refs/heads/feature/home-enhancements/public/gifs/whatsapp-clone.gif"
              imageUrl="/imgs/whatsapp-clone.png"
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  Whatsapp Clone
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Card>
          </div>
          <div>
            <Card
              href="https://front-corfo-mod8-ep2-1ls8kxqr5-joseschafers-projects.vercel.app/"
              gifUrl="https://raw.githubusercontent.com/Jose-Schafer/front_kit/refs/heads/feature/home-enhancements/public/gifs/hospital.gif"
              imageUrl="https://raw.githubusercontent.com/Jose-Schafer/front_kit/refs/heads/feature/home-enhancements/public/imgs/hospital.png"
            >
              <div className="text relative z-50">
                <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                  Web Hospital
                </h1>
                <p className="font-normal text-base text-gray-50 relative my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mx-96 pt-16">
        <h1 className="text-2xl text-accent font-semibold pb-4">Skills</h1>
        <p className="text-text pb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Experience */}
      <div className="mx-96 pt-16">
        <h1 className="text-2xl text-accent font-semibold pb-4">Experience</h1>
        <p className="text-text pb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <MyTimeline />
      </div>

      {/* Contact */}
      <div className="mx-96 pt-16">
        <h1 className="text-2xl text-accent font-semibold pb-4">Contact</h1>
        <p className="text-text pb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
