import harsh1 from '../../../public/harsh1.jpg'
import Footer from '../footer';
import Header from '../header';
import Image from "next/image";
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "UI/UX Thinking", icon: <SiFigma className="text-pink-500" /> },
  ];

  return (
    <>
      <Header/>

      <section id="about" className="container py-16 md:py-24">
        
        {/* Heading */}
        <div 
          className="text-center mb-12 opacity-0 animate-[fadeUp_0.6s_ease-out_forwards]"
        >
          <h2 className="text-3xl mt-5 md:text-4xl font-bold bg-linear-to-r 
            from-foreground to-foreground/60 dark:from-white dark:to-gray-300 
            bg-clip-text text-blue-400">
            About Me
          </h2>
          <p className="text-foreground/70 mt-2">
            A deeper look into my journey, skills, and philosophy.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          
          <div 
            className="md:col-span-1 space-y-3 opacity-0 animate-[fadeUp_0.7s_ease-out_forwards]"
          >
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-foreground/70">
              Front-end Developer • Problem Solver • Lifelong Learner
            </p>
          </div>

          {/* Right Section */}
          <div className="md:col-span-2 grid gap-8 md:grid-cols-2">

            {/* Image */}
            <div 
              className="relative aspect-square rounded-xl overflow-hidden 
              border border-foreground/10 dark:border-white/10 shadow-lg opacity-0 
              animate-[fadeUp_0.9s_ease-out_forwards]"
            >
              <Image
                src={harsh1}
                alt="Harsh Pratik"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div 
              className="rounded-xl border border-foreground/10  dark:border-white/10 
              p-6 bg-background/60 dark:bg-background/20 backdrop-blur shadow-sm opacity-0
              animate-[fadeUp_1.1s_ease-out_forwards]"
            >
              <p className="leading-7  text-foreground/80">
                As a passionate and self-motivated front-end developer, I specialize in
                building responsive, beautiful, and dynamic web applications using
                <span className="font-semibold text-blue-400"> React, Next.js, JavaScript, Tailwind, HTML & CSS</span>.
              </p>

              <p className="leading-7 text-foreground/80 mt-4">
                I love transforming ideas into reality through clean code, animations, and modern design.
              </p>
            </div>

          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 opacity-0 animate-[fadeUp_1.3s_ease-out_forwards]">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Skills & Tools</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group border hover:scale-110 border-foreground/40 dark:border-white/10 rounded-lg 
                py-4 px-4 flex flex-col items-center gap-3 
                bg-background/20 dark:bg-background/20 backdrop-blur shadow-sm 
                hover:bg-background/80 dark:hover:bg-background/30 transition-all cursor-default
                animate-[fadeUp_0.6s_ease-out_forwards] opacity-0"
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                
                <div className="text-3xl animate-[float_3s_ease-in-out_infinite]">
                  {skill.icon}
                </div>

                <p className="text-sm font-medium text-foreground/80">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div 
          className="mt-20 p-8 rounded-xl border border-foreground/10 dark:border-white/10 
          bg-background/80 dark:bg-background/10 backdrop-blur shadow-md opacity-0
          animate-[fadeUp_1.5s_ease-out_forwards]"
        >
          
          <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
          <p className="leading-7 text-foreground/80">
            I believe great web experiences come from a blend of creativity,
            empathy, meaningful interactions, and strong technical foundations.
          </p>

          <p className="mt-4 leading-7 text-foreground/80">
            My mission is to build interfaces that feel smooth, modern, and intuitive.
          </p>
        </div>

      </section>

    </>
  );
}
