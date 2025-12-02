import { Cpu, Database, Globe, Layers } from "lucide-react";

const skills = [
  { name: "Frontend", icon: Globe, items: ["React", "Next.js", "Tailwind"] },
  { name: "Backend", icon: Database, items: ["Node.js", "Postgres", "Prisma"] },
  { name: "Architecture", icon: Layers, items: ["Microservices", "CI/CD", "Testing"] },
  { name: "Performance", icon: Cpu, items: ["Caching", "Profiling", "Accessibility"] },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
      <p className="mt-2 text-foreground/70">Technologies and areas I work with.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-black/10 dark:border-white/10 p-6 transition-all hover:shadow-lg hover:-translate-y-1 animate-[fadeUp_0.6s_ease-out]"
          >
            <div className="flex items-center gap-3">
              <s.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold">{s.name}</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}