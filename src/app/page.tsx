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
          Desarrollador de Software con experiencia en AWS e Ingeniería de
          Datos. Construyo aplicaciones completas usando tecnologías como React,
          Django y Python, y diseño soluciones en la nube con Lambda, S3, EC2,
          StepFunctions, ECS y RDS. También desarrollo pipelines de datos
          eficientes con herramientas como Airflow y DBT. Me enfoco en crear
          sistemas escalables, limpios y orientados a datos.
        </p>
      </div>

      {/* Projects */}
      <div className="mx-96 pt-16">
        <h1 className="text-2xl text-accent font-semibold pb-4">Projects</h1>
        <p className="text-text pb-4">
          Aquí encontrarás una selección de proyectos en los que he trabajado,
          enfocados en desarrollo Full Stack.
        </p>
      </div>

      <div className="mx-64 pt-16">
        <div className="flex justify-between pb-16">
          <div className="mr-4">
            <Card
              href="/whatsapp-clone"
              gifUrl="/gifs/whatsapp-clone.gif"
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
              gifUrl="/gifs/hospital.gif"
              imageUrl="/imgs/hospital.png"
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
        <div className="p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-text">Frontend</h3>
              <ul className="list-disc list-inside space-y-1 text-text">
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-text">Backend</h3>
              <ul className="list-disc list-inside space-y-1 text-text">
                <li>Node.js</li>
                <li>Python</li>
                <li>API REST / GraphQL</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-text">
                DevOps & Cloud
              </h3>
              <ul className="list-disc list-inside space-y-1 text-text">
                <li>AWS (Lambda, S3, EC2, RDS, API Gateway)</li>
                <li>Vercel (despliegue y hosting)</li>
                <li>CI/CD, serverless architectures</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-text">
                Ingeniería de Datos
              </h3>
              <ul className="list-disc list-inside space-y-1 text-text">
                <li>Airflow</li>
                <li>Spark</li>
                <li>Pandas</li>
                <li>Redshift</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-text">
                Otras herramientas
              </h3>
              <ul className="list-disc list-inside space-y-1 text-text">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>Postman</li>
                <li>
                  Bases de datos relacionales (PostgreSQL, MySQL) y NoSQL
                  (MongoDB)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mx-96 pt-16">
        <h1 className="text-2xl text-accent font-semibold pb-4">Experience</h1>
        <p className="text-text">
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
      <div className="mx-96 max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-base-100 p-8">
          <h1 className="text-3xl text-accent font-bold mb-6 border-b border-accent/20 pb-3">
            Contact
          </h1>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/jose-schafer/"
                className="flex items-center gap-2 text-primary hover:text-primary-focus transition-colors duration-300 font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <span className="text-text font-medium">Email: </span>
                <a
                  href="mailto:joseignacio.schafer@gmail.com"
                  className="text-primary hover:text-primary-focus transition-colors duration-300"
                >
                  joseignacio.schafer@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-base-300">
            <p className="text-text/70 text-sm">
              Por favor contáctame para colaborar u otras solicitudes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
