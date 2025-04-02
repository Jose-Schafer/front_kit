import Link from "next/link";

const sections = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <div className="flex justify-between h-16 border-b-2 px-64 border-[#DEE2E6]">
      <div className="flex my-auto mx-16">
        {sections.map((section) => (
          <div key={section.href} className="mx-4">
            <Link
              href={section.href}
              className="text-primary hover:text-text font-medium"
            >
              {section.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex my-auto mx-16">
        <Link
          href="/contact"
          className="text-primary hover:text-text font-medium"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
