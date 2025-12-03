import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import SkillsMarquee from "@/components/skills-marquee"; 
import Footer from "@/components/footer";
import { Code2, Search, Gauge, Shield, CheckCircle } from "lucide-react";  
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";



export default function Home() {
  return ( 
    <>
   
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SkillsMarquee />
        <section className="container py-12"> 
        </section>
       <section className="container py-16 md:py-24">
  <h2 className="text-2xl md:text-3xl lg:mt-20 font-semibold text-foreground">Our Services</h2>
  <p className="mt-2 text-foreground/70">Web development, optimization, and technical consulting.</p>
  <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
    {[
      { Icon: Code2, title: "Websites", desc: "Modern, responsive, accessible websites." },
      { Icon: Search, title: "SEO", desc: "On‑page, technical SEO and best practices." },
      { Icon: Gauge, title: "Performance", desc: "Fast loads, Core Web Vitals focused." },
      { Icon: Shield, title: "Maintenance", desc: "Monitoring, updates, and CI/CD." },
    ].map(({ Icon, title, desc }) => (
      <div
        key={title}
        className="rounded-xl p-6 bg-linear-to-r from-blue-100 to-teal-200 text-black border border-transparent shadow-lg hover:shadow-2xl hover:scale-105 hover:translate-y-1 transition-all duration-300 hover:bg-linear-to-r hover:from-teal-200 hover:to-blue-100"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="mt-4 text-lg font-semibold text-gray-900">{title}</div>
        <p className="mt-2 text-gray-600">{desc}</p>
      </div>
    ))}
  </div>
</section>

       
      </main>
    </div> 
     
    </>
  );
}
