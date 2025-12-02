import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import Header from "../header"; 
import wovtours from '../../../public/wovtours.png'
import consultancy from '../../../public/consultancy.png'
import fashion from '../../../public/fashion.png' 
import resturant from '../../../public/resturant.png'
const projects = [
  {
    title: "WOV Tours",
    description:
      "A modern travel and tours website with booking flow, destination pages, gallery, and responsive UI.",
    tech: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    href: "https://wovtours.com",
    image: "/wovtours.png",
  },
  {
    title: "Nilay Hospitality",
    description:
      "A hospitality website showcasing rooms, amenities, booking system and elegant branding.",
    tech: ["Next.js", "Motion", "EmailJS"],
    href: "https://nilayhospitality.com",
    image: "/consultancy.png",
  },
  {
    title: "Food Website",
    description: "Restaurant website featuring menu, reservation form, and vibrant imagery.",
    tech: ["Next.js", "Sanity CMS"],
    href: "#",
    image: "/resturant.png",
  },
  {
    title: "Coffee Cafe",
    description: "Warm-toned café website with shop section, menu, and location details.",
    tech: ["React", "Tailwind"],
    href: "#",
    image: "/projects/cafe.jpg",
  },
  {
    title: "Portfolio",
    description: "A clean animated developer portfolio built for speed and accessibility.",
    tech: ["Next.js", "Framer Motion"],
    href: "#",
    image: "/projects/portfolio.jpg",
  },
  {
    title: "Fashion Store",
    description: "A trendy ecommerce store with cart, filters, and product listings.",
    tech: ["Next.js", "Stripe"],
    href: "#",
    image: "/fashion.png",
  },
];

export default function Projects() {
  return ( 
    <>
   <Header/>
    <section
      id="projects"
      className="
        py-20 md:py-28 
        bg-blue-50 dark:bg-transparent 
        bg-opacity-60
      "
    >
      <div className="container">

        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
            Projects
          </h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto">
            A collection of professional client work and custom-built web projects.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="
                group overflow-hidden rounded-xl 
                border border-blue-200 dark:border-white/10 
                bg-white/70 dark:bg-black/30 
                backdrop-blur-sm
                shadow-sm hover:shadow-[0_8px_20px_-4px_rgba(59,130,246,0.35)]
                hover:-translate-y-1 
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                    {p.title}
                  </h3>

                  <Link
                    href={p.href}
                    target="_blank"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                  </Link>
                </div>

                <p className="mt-2 text-foreground/70 text-sm">{p.description}</p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        rounded-full border 
                        border-blue-200 dark:border-white/15 
                        bg-blue-100/60 dark:bg-white/10 
                        px-3 py-1 
                        text-xs text-blue-700 dark:text-blue-300
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 
    </>
  );
}
