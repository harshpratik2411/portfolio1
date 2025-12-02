import { ArrowRight, Sparkles } from "lucide-react"; 
import harsh from '../../../public/harsh.jpg'

export default function Hero() {
  return (
    <section id="home" className="container py-24 md:py-32">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div> 
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm border-black/10 dark:border-white/15">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            Building delightful developer experiences
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Harsh Pratik</span>
          </h1>
          <p className="mt-4 text-foreground/70 text-lg">
            Full‑stack engineer crafting performant web apps with modern tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="group inline-flex hover:scale-110 items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 transition-all cursor-default">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="group inline-flex  items-center gap-2 rounded-full border px-6 py-3 transition-all border-black/10 dark:border-white/15 cursor-default">
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right side frame with image */}
        <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20 overflow-hidden">
          {/* Decorative frame */}
          <div className="absolute inset-6 rounded-2xl bg-background border border-black/10 dark:border-white/10 shadow-xl" />
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-600/30 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-600/30 blur-2xl" />

          {/* Harsh's image */}
          <img
            src={harsh.src}
            alt="Harsh Pratik"
            className="absolute inset-6 rounded-2xl object-cover w-[calc(100%-3rem)] h-[calc(100%-3rem)]"
          />
        </div>
      </div>
    </section>
  );
}
