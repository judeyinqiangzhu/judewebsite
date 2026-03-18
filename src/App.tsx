import {
  ArrowUpRight,
  BarChart3,
  Palette,
  Play,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "motion/react";

import { BlurText } from "@/components/blur-text";
import { HlsVideo } from "@/components/hls-video";
import { Button } from "@/components/ui/button";

const navItems = ["Home", "Services", "Work", "Process", "Pricing"];

const capabilityRows = [
  {
    title: "Designed to convert. Built to perform.",
    description:
      "Every pixel is intentional. Our AI studies what works across thousands of top sites-then builds yours to outperform them all.",
    action: "Learn more",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard floating on a dark glass surface.",
  },
  {
    title: "It gets smarter. Automatically.",
    description:
      "Your site evolves on its own. AI monitors every click, scroll, and conversion-then optimizes in real time. No manual updates. Ever.",
    action: "See how it works",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Dark interface with a live optimization workflow.",
    reverse: true,
  },
];

const featureCards = [
  {
    icon: Zap,
    title: "Days, Not Months",
    description: "Concept to launch at a pace that redefines fast.",
  },
  {
    icon: Palette,
    title: "Obsessively Crafted",
    description: "Every detail considered. Every element refined.",
  },
  {
    icon: BarChart3,
    title: "Built to Convert",
    description: "Layouts informed by data. Decisions backed by performance.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade protection comes standard.",
  },
];

const stats = [
  { value: "200+", label: "Sites launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "3.2x", label: "More conversions" },
  { value: "5 days", label: "Average delivery" },
];

const testimonials = [
  {
    quote: "A complete rebuild in five days. It felt impossible until Studio showed us the first draft.",
    name: "Sarah Chen",
    role: "CEO, Luminary",
  },
  {
    quote: "Conversions up 4x, bounce down dramatically, and the whole brand suddenly feels ten times sharper.",
    name: "Marcus Webb",
    role: "Head of Growth, Arcline",
  },
  {
    quote: "They didn't just design our site. They clarified our positioning and made it obvious why we matter.",
    name: "Elena Voss",
    role: "Brand Director, Helix",
  },
];

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="liquid-glass mb-4 inline-block rounded-full px-3.5 py-1 font-body text-xs font-medium text-white">
      {children}
    </span>
  );
}

function App() {
  return (
    <div className="overflow-visible bg-black text-white">
      <header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          <a href="#home" className="shrink-0">
            <img
              src="/images/logo.svg"
              alt="Studio Black logo"
              className="h-12 w-12 rounded-full object-cover"
            />
          </a>

          <div className="liquid-glass hidden items-center gap-2 rounded-full px-3 py-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 font-body text-sm font-medium text-foreground/90 transition-colors hover:text-white"
              >
                {item}
              </a>
            ))}
            <Button variant="solid" size="default" className="px-4">
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="overflow-visible bg-black">
        <section
          id="home"
          className="relative flex h-[1000px] flex-col overflow-visible bg-black px-6 md:px-10"
        >
          <img
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
            src="/images/hero_bg.jpeg"
            alt="Hero background"
          />
          <div className="absolute inset-0 z-0 bg-black/5" />
          <div className="absolute bottom-0 left-0 right-0 z-[1] h-[300px] bg-gradient-to-b from-transparent to-black" />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center pt-[150px] text-center">
            <div className="liquid-glass mb-8 inline-flex items-center gap-3 rounded-full px-3 py-2">
              <span className="rounded-full bg-white px-3 py-1 font-body text-xs font-medium text-black">
                New
              </span>
              <span className="font-body text-sm font-light text-white/80">
                Introducing AI-powered web design.
              </span>
            </div>

            <BlurText
              text="The Website Your Brand Deserves"
              className="max-w-5xl text-6xl font-heading italic leading-[0.8] tracking-[-4px] text-foreground md:text-7xl lg:text-[5.5rem]"
            />

            <motion.p
              initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl font-body text-sm font-light text-white/60"
            >
              Stunning design. Blazing performance. Built by AI, refined by experts.
              This is web design, wildly reimagined.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button variant="glassStrong" size="lg">
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" className="px-0">
                <Play className="h-4 w-4 fill-white" />
                Watch the Film
              </Button>
            </motion.div>

            <div className="mt-auto w-full pb-8 pt-16">
              <section id="work" className="mx-auto flex max-w-5xl flex-col items-center">
                <SectionBadge>Trusted by the teams behind</SectionBadge>
                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
                  {["Stripe", "Vercel", "Linear", "Notion", "Figma"].map((name) => (
                    <span
                      key={name}
                      className="font-heading text-2xl italic text-white md:text-3xl"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="relative min-h-[700px] overflow-hidden px-6 py-32 md:px-16 lg:px-24"
        >
          <div className="absolute inset-0 z-0">
            <HlsVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" />
            <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[500px] max-w-4xl flex-col items-center justify-center text-center">
            <SectionBadge>How It Works</SectionBadge>
            <h2 className="section-heading max-w-4xl">You dream it. We ship it.</h2>
            <p className="section-body mt-6 max-w-2xl">
              Share your vision. Our AI handles the rest-wireframes, design, code,
              launch. All in days, not quarters.
            </p>
            <Button variant="glassStrong" size="lg" className="mt-8">
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="services" className="px-6 py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionBadge>Capabilities</SectionBadge>
              <h2 className="section-heading">Pro features. Zero complexity.</h2>
            </div>

            <div className="mt-16 space-y-12">
              {capabilityRows.map((row) => (
                <div
                  key={row.title}
                  className={`flex flex-col items-center gap-8 lg:gap-16 ${
                    row.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl font-heading italic leading-[0.95] tracking-tight text-white md:text-4xl">
                      {row.title}
                    </h3>
                    <p className="mt-5 max-w-xl font-body text-sm font-light text-white/60">
                      {row.description}
                    </p>
                    <Button variant="glassStrong" size="lg" className="mt-7">
                      {row.action}
                    </Button>
                  </div>

                  <div className="liquid-glass w-full overflow-hidden rounded-2xl p-2 lg:w-1/2">
                    <div className="overflow-hidden rounded-[1.25rem]">
                      <img
                        src={row.image}
                        alt={row.alt}
                        className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionBadge>Why Us</SectionBadge>
              <h2 className="section-heading">The difference is everything.</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featureCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.title} className="liquid-glass rounded-2xl p-6">
                    <div className="liquid-glass-strong flex h-10 w-10 items-center justify-center rounded-full">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg italic text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-body text-sm font-light text-white/60">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-24">
          <div className="absolute inset-0 z-0">
            <HlsVideo
              src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
              desaturated
            />
            <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="liquid-glass rounded-[2rem] p-12 md:p-16">
              <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-4xl italic text-white md:text-5xl lg:text-6xl">
                      {stat.value}
                    </div>
                    <div className="mt-3 font-body text-sm font-light text-white/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-16 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <SectionBadge>What They Say</SectionBadge>
              <h2 className="section-heading">Don&apos;t take our word for it.</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="liquid-glass rounded-2xl p-8">
                  <p className="font-body text-sm italic font-light text-white/80">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-8">
                    <div className="font-body text-sm font-medium text-white">
                      {item.name}
                    </div>
                    <div className="font-body text-xs font-light text-white/50">
                      {item.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="relative overflow-hidden px-6 pb-12 pt-24 md:px-16 lg:px-24">
          <div className="absolute inset-0 z-0">
            <HlsVideo src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" />
            <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-black to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl text-center">
            <SectionBadge>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                Start now
              </span>
            </SectionBadge>
            <h2 className="section-heading mx-auto max-w-5xl text-5xl md:text-6xl lg:text-7xl">
              Your next website starts here.
            </h2>
            <p className="section-body mx-auto mt-6 max-w-2xl">
              Book a free strategy call. See what AI-powered design can do.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button variant="glassStrong" size="lg">
                Book a Call
              </Button>
              <Button variant="solid" size="lg">
                View Pricing
              </Button>
            </div>

            <footer className="mt-32 border-t border-white/10 pt-8">
              <div className="flex flex-col items-center justify-between gap-4 font-body text-xs text-white/40 md:flex-row">
                <span>婕?2026 Studio</span>
                <div className="flex items-center gap-6">
                  <a href="#privacy" className="transition-colors hover:text-white/70">
                    Privacy
                  </a>
                  <a href="#terms" className="transition-colors hover:text-white/70">
                    Terms
                  </a>
                  <a href="#contact" className="transition-colors hover:text-white/70">
                    Contact
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
