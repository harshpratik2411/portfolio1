import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiNextdotjs, SiGit } from "react-icons/si";
import { Sparkles } from "lucide-react";

const items = [
  { label: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { label: "CSS", icon: SiCss3, color: "text-blue-500" },
  { label: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { label: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { label: "AOS", icon: Sparkles, color: "text-pink-500" },
  { label: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-black" },
  { label: "Git", icon: SiGit, color: "text-red-500" },
];

type IconType = React.ComponentType<React.ComponentProps<"svg">>;

export default function SkillsMarquee() {
  const row = [...items, ...items];  // Duplicate items for marquee effect

  return (
    <div className="container py-10"> 
     <h1 className="mt-6 text-4xl  font-bold tracking-tight">
           <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h1>
      <div className="relative mt-10 overflow-hidden">
        {/* Mask effect for left and right */}
        <div className="mask-lr pointer-events-none absolute inset-y-0 left-0 w-24" />
        <div className="mask-rl pointer-events-none absolute inset-y-0 right-0 w-24" />
        
        <div className="flex gap-6 animate-[marquee_20s_linear_infinite]">
          {row.map((it, i) => {
            const Icon = it.icon as IconType;
            return (
              <div
                key={i}
                className="flex items-center gap-3 rounded-full border px-4 py-2"
                // Use dynamic classes for light and dark mode
                style={{
                  borderColor: 'var(--border-color)',
                  backgroundColor: 'var(--bg-color)',
                  color: 'var(--text-color)',
                }}
              >
                <Icon className={`h-7 w-7 ${it.color}`} />
                <span className="text-sm">{it.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
