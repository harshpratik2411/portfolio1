import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-foreground/70">Let’s build something great.</p>
          <div className="mt-6 rounded-xl border border-black/10 dark:border-white/10 p-6">
            <div className="text-sm text-foreground/80">Email</div>
            <div className="text-lg font-semibold">harsh@example.com</div>
            <div className="mt-4 text-sm text-foreground/80">Location</div>
            <div className="text-lg font-semibold">India</div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-1 animate-[fadeUp_0.6s_ease-out]">
            <form className="rounded-xl border border-black/10 dark:border-white/10 bg-background p-6 grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm">Name</label>
                <input
                  id="name"
                  type="text"
                  className="h-11 rounded-md border border-black/10 dark:border-white/15 bg-background px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm">Email</label>
                <input
                  id="email"
                  type="email"
                  className="h-11 rounded-md border border-black/10 dark:border-white/15 bg-background px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea
                  id="message"
                  className="min-h-28 rounded-md border border-black/10 dark:border-white/15 bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell me about your project"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/30"
              >
                Send Message
                <Mail className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              </button>
              <p className="text-xs text-foreground/60">This demo form doesn’t submit yet.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}