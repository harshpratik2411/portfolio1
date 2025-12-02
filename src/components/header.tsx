"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Github } from "lucide-react";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const next = (resolvedTheme === "dark" ? "light" : "dark") as "dark" | "light";
    setTheme(next);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b border-black/5 dark:border-white/10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight text-xl">
          Dev<span className="text-blue-600 dark:text-blue-400">Portfolio</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/skills", label: "Skills" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-all border-black/10 hover:border-black/20 dark:border-white/15 dark:hover:border-white/25"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="group inline-flex items-center rounded-full bg-black/5 dark:bg-white/10 px-1 py-1 transition-all hover:shadow-sm"
          >
            <div className="relative h-7 w-14">
              <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10" />
              <div
                className="absolute top-0 h-7 w-7 rounded-full bg-white text-black dark:bg-black dark:text-white grid place-items-center transition-transform translate-x-0 dark:translate-x-7"
              >
                <Sun className="h-4 w-4 dark:hidden" />
                <Moon className="h-4 w-4 hidden dark:block" />
              </div>
            </div>
          </button>
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 dark:bg-white/10"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="container py-3 flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/skills", label: "Skills" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}