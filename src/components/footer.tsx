import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      mt-20 
      border-t border-black/10 dark:border-white/10 

      /* NEW LIGHT THEME SUNSET GRADIENT */
      bg-gradient-to-b from-[#FFD8BE] via-[#FFE4C4] to-[#FFF3E0]

      /* DARK THEME GLASS */
      dark:bg-gradient-to-b dark:from-black/40 dark:via-black/20 dark:to-black/10

      backdrop-blur-xl
      py-14
    "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left: Name + Links */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 w-full md:w-auto">
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span className="text-orange-600 dark:text-blue-400">Harsh Pratik</span>
          </h1>

          <nav className="flex lg:ml-5 flex-col md:flex-row gap-10 text-base font-medium">
            {[
              { name: "About", href: "/about" },
              { name: "Skills", href: "/skills" },
              { name: "Projects", href: "/projects" },
              { name: "Skills", href: "/skills" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  transition 
                  hover:text-orange-600 
                  dark:hover:text-blue-400 
                  text-black/70 
                  dark:text-white/90
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/"
            className="
              p-3 rounded-full transition
              bg-black/5 dark:bg-white/10 
              hover:bg-black/10 dark:hover:bg-white/20
            "
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-black dark:text-white" />
          </Link>

          <Link
            href="https://linkedin.com/"
            className="
              p-3 rounded-full transition
              bg-black/5 dark:bg-white/10 
              hover:bg-black/10 dark:hover:bg-white/20
            "
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-black dark:text-white" />
          </Link>

          <Link
            href="/contact"
            className="
              p-3 rounded-full transition
              bg-orange-500 hover:bg-orange-600 
              text-white shadow-md shadow-orange-300/30
            "
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-black/60 dark:text-white/70">
        © {new Date().getFullYear()} Harsh Pratik — All Rights Reserved
      </div>
    </footer>
  );
}
