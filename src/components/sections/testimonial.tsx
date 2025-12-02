// src/components/sections/testimonials.tsx
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aakash",
    role: "Founder",
    quote:
      "Delivered a fast, clean website and improved our search rankings. Great attention to detail.",
  },
  {
    name: "Priya",
    role: "Product Manager",
    quote:
      "Collaborative and proactive. The UI components were reusable and boosted our dev speed.",
  },
  {
    name: "Ravi",
    role: "Engineer",
    quote:
      "Solid performance optimizations and clear documentation. Learned a lot working together.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-16 md:py-24">
      <h2 className="text-2xl md:text-3xl font-semibold">Testimonials</h2>
      <p className="mt-2 text-foreground/70">What collaborators say.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="group rounded-xl border border-black/10 dark:border-white/10 p-6 transition-all hover:shadow-lg hover:-translate-y-1 animate-[fadeUp_0.6s_ease-out]"
          >
            <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110" />
            <p className="mt-3 text-foreground/80">“{t.quote}”</p>
            <div className="mt-4 text-sm text-foreground/70">
              <span className="font-medium">{t.name}</span> • {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}