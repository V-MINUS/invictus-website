import Image from "next/image";

const navLinks = [
  { label: "Artists", href: "#artists" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Launch Strategy",
    description:
      "Integrated PR, DSP pitching, and paid media stacks that turn first releases into headline moments.",
    highlights: ["Roadmap in 10 days", "DSP + radio targeting", "Hybrid press kit"],
  },
  {
    title: "Growth & Touring",
    description:
      "Audience development, creator partnerships, and experiential activations for national tours.",
    highlights: ["Community funnels", "Influencer pods", "Tour press ops"],
  },
  {
    title: "Agency Retainer",
    description:
      "Full-stack marketing squad plugged into your label or management team with weekly reporting.",
    highlights: ["Ops dashboard", "Paid + organic sync", "Realtime analytics"],
  },
];

const caseStudies = [
  {
    artist: "LYRA",
    metric: "+184% IG growth",
    summary:
      "Fang-inspired campaign blending cinematic teasers and guerrilla projections across Dublin city core.",
  },
  {
    artist: "Kojaque",
    metric: "4 sold-out nights",
    summary:
      "Hybrid radio + TikTok creator wave that translated into rapid ticketing momentum for the tour finale.",
  },
  {
    artist: "47SOS",
    metric: "6M Spotify streams",
    summary:
      "24/7 DSP war-room with editorial targeting, smart covers, and data-driven ad retargeting loops.",
  },
];

const testimonials = [
  {
    quote:
      "Invictus treat each drop like a startup launch—clear positioning, relentless iteration, and zero fluff.",
    name: "Aine Gallagher",
    role: "Label Director, Shoreline Records",
  },
  {
    quote:
      "They bridged artist vision with commercial growth without diluting the culture. That's rare in Ireland.",
    name: "Marty Flynn",
    role: "Manager, Northbound Talent",
  },
];

const metrics = [
  { label: "Campaigns", value: "120+" },
  { label: "Earned Media Impressions", value: "92M" },
  { label: "Ticket Conversion Lift", value: "38%" },
  { label: "Creator Partners", value: "450" },
];

const socials = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "TikTok", href: "#", icon: "tiktok" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path d="M6 18L18 6M9 6h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="18" cy="6" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M17.4 6.2c.7.6 1.6 1 2.6 1.1V3.9a5.3 5.3 0 01-2.6-1.1 5.2 5.2 0 01-2-3.2h-3.1v14.6c-.1 1.2-1 2.1-2.2 2.2a2.3 2.3 0 01-2.5-2.3c0-1.4 1.3-2.5 2.8-2.3V9.1a5.2 5.2 0 00-2.8.7 5.7 5.7 0 00-2.8 4.9 5.6 5.6 0 008.4 4.9 5.6 5.6 0 002.8-4.9v-6.8z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M4.5 3.5a2 2 0 11-.1 4 2 2 0 01.1-4zm-2 6h4v11h-4zm6.7 0h3.9v1.6h.1a4.3 4.3 0 013.9-2.1c4.2 0 5 2.8 5 6.4V20h-4v-4.5c0-1.1-.1-2.6-1.6-2.6-1.6 0-1.8 1.2-1.8 2.5V20h-4z" />
        </svg>
      );
    default:
      return null;
  }
}

function PlayIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 blur-3xl" aria-hidden>
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(37,110,255,0.45),_transparent_60%)]" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,120,77,0.4),_transparent_60%)]" />
      </div>
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur" aria-label="Invictus Promotions global navigation">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--brand-secondary)] to-[var(--brand-primary)]" />
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-white">INVICTUS</p>
              <p className="text-xs text-[var(--brand-muted)]">Promotions</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/20"
          >
            Book a sprint
            <ArrowIcon />
          </a>
        </header>

        <main className="flex flex-col gap-24">
          <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col gap-8">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[var(--brand-muted)]">
                Parketing & Agency · Ireland
              </p>
              <div className="space-y-6">
                <h1 className="text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                  Unstoppable promotions for unstoppable Irish talent.
                </h1>
                <p className="text-lg text-slate-200">
                  Invictus Promotions is a Fang-style team marrying bold creative, hardcore data, and boots-on-the-ground hustle for artists, labels, and festivals.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 transition hover:-translate-y-0.5"
                >
                  Launch a campaign
                  <ArrowIcon />
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40"
                  aria-label="Watch Invictus case study reel"
                >
                  <span className="rounded-full bg-white/10 p-2 text-white">
                    <PlayIcon />
                  </span>
                  Watch reel
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-4" id="artists">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-[var(--brand-muted)]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-white/15 to-white/5 p-6 text-white">
              <div className="rounded-2xl border border-white/20 bg-slate-900/60 p-4 shadow-2xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-muted)]">Live campaign</p>
                <p className="mt-3 text-2xl font-semibold">Phoenix Sessions</p>
                <p className="text-sm text-slate-300">Dublin · Galway · Belfast</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <div>
                    <p className="text-xs text-[var(--brand-muted)]">Spend deployed</p>
                    <p className="text-xl font-semibold">€42,400</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[var(--brand-muted)]">Conversion lift</p>
                    <p className="text-xl font-semibold text-[var(--brand-secondary)]">+42%</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-muted)]">Trusted by</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-white/80">
                  <span className="rounded-full border border-white/10 px-4 py-1">RTÉ</span>
                  <span className="rounded-full border border-white/10 px-4 py-1">Shoreline</span>
                  <span className="rounded-full border border-white/10 px-4 py-1">District Mag</span>
                  <span className="rounded-full border border-white/10 px-4 py-1">All Together Now</span>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-muted)]">Brand palette</p>
                <div className="mt-4 flex gap-3">
                  {[
                    "bg-[var(--brand-primary)]",
                    "bg-[var(--brand-secondary)]",
                    "bg-[var(--brand-accent)]",
                    "bg-white",
                  ].map((token) => (
                    <span key={token} className={`h-12 w-12 rounded-2xl ${token}`} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="space-y-10">
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand-muted)]">Services</p>
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Parketing engineered for artist velocity.</h2>
                <p className="max-w-xl text-sm text-slate-300">
                  We marry cultural taste with measurable impact. Three modular service pillars that can be activated individually or stacked for an aggressive go-to-market.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.4)] transition hover:-translate-y-2 hover:border-white/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <ArrowIcon />
                  </div>
                  <p className="mt-4 text-sm text-slate-300">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/80">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="case-studies" className="space-y-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand-muted)]">Proof</p>
                <h2 className="text-3xl font-semibold text-white">Campaigns built with Fang precision.</h2>
              </div>
              <p className="max-w-xl text-sm text-slate-300">
                Each engagement starts with a two-week diagnostic sprint followed by experimental loops across PR, paid social, and creator ecosystems.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study) => (
                <article key={study.artist} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-muted)]">{study.artist}</p>
                  <p className="mt-4 text-2xl font-semibold text-white">{study.metric}</p>
                  <p className="mt-3 text-sm text-slate-300">{study.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-slate-950/80 via-indigo-950/60 to-slate-900/40 p-8 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand-muted)]">Why Invictus</p>
              <h2 className="text-3xl font-semibold text-white">We operate like an embedded Fang growth squad.</h2>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-secondary)]" />
                  Full-stack team across creative, performance media, experiential, and data science.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-secondary)]" />
                  Weekly growth sprints with transparent dashboards and rapid iteration.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-secondary)]" />
                  Embedded in the Irish music ecosystem with relationships from radio to creator collectives.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-lg font-medium text-white">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-sm text-[var(--brand-muted)]">
                    {testimonial.name} · {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          <section id="contact" className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand-muted)]">Contact</p>
              <h2 className="text-3xl font-semibold text-white">Tell us about your next release.</h2>
              <p className="text-sm text-slate-300">
                Drop the essentials below. We reply within 24 hours with a readiness scorecard and roadmap options.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-muted)]">Studio</p>
                  <p className="text-white">Dublin · Galway · Remote EU</p>
                </div>
                <div className="flex gap-4 text-sm text-white/80">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2"
                      aria-label={`${social.label} (coming soon)`}
                    >
                      <span className="rounded-full bg-white/10 p-1 text-white">
                        <SocialIcon name={social.icon} />
                      </span>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--brand-muted)]">Logos</p>
                <p className="mt-3 text-sm text-slate-300">
                  Drop the Invictus wave and Shield logos into <code className="rounded bg-black/40 px-1">public/logos/</code> as <strong>invictus-wave.png</strong> and <strong>invictus-shield.png</strong> to display them below.
                </p>
                <div className="mt-4 flex gap-4">
                  <div className="relative h-24 w-32 rounded-xl border border-white/20 bg-white/10">
                    <Image
                      src="/logos/invictus-wave.png"
                      alt="Invictus wave logo"
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 40vw, 25vw"
                      priority
                    />
                  </div>
                  <div className="relative h-24 w-32 rounded-xl border border-white/20 bg-white/10">
                    <Image
                      src="/logos/invictus-shield.png"
                      alt="Invictus shield logo"
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 40vw, 25vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="text-white/80">Name</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                    placeholder="Aisling Byrne"
                    type="text"
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-white/80">Email</span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                    placeholder="team@invictus.ie"
                    type="email"
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm">
                <span className="text-white/80">Artist or project</span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  placeholder="Artist / Label / Event"
                  type="text"
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-white/80">What do you need? (max 400 chars)</span>
                <textarea
                  className="h-32 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  placeholder="Launch strategy, agency services, touring growth…"
                  maxLength={400}
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="text-white/80">Budget range</span>
                  <select className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white focus:border-white/40 focus:outline-none">
                    <option value="">Select</option>
                    <option value="5-10">€5K - €10K</option>
                    <option value="10-25">€10K - €25K</option>
                    <option value="25-50">€25K - €50K</option>
                    <option value="50+">€50K+</option>
                  </select>
                </label>
                <label className="space-y-2 text-sm">
                  <span className="text-white/80">Timeline</span>
                  <select className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white focus:border-white/40 focus:outline-none">
                    <option value="">Select</option>
                    <option value="urgent">Immediate</option>
                    <option value="month">Next month</option>
                    <option value="quarter">This quarter</option>
                  </select>
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-accent)] to-[var(--brand-secondary)] px-6 py-4 text-center text-sm font-semibold text-white shadow-[0_25px_45px_rgba(15,23,42,0.6)] transition hover:-translate-y-1"
              >
                Send request
              </button>
              <p className="text-center text-xs text-[var(--brand-muted)]">
                By submitting, you agree to our privacy policy and consent to follow-up emails.
              </p>
            </form>
          </section>
        </main>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-[var(--brand-muted)]">
          <p>© {new Date().getFullYear()} Invictus Promotions. Unstoppable promotions for unstoppable talent.</p>
          <p>
            Designed with Next.js · Tailwind CSS · shadcn-inspired primitives. Built in Ireland.
          </p>
        </footer>
      </div>
    </div>
  );
}
