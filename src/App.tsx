import { useEffect, useState } from "react";
import { Reveal, SectionLabel } from "./components/Reveal";

const EMAIL = "partnerships@bouhrira.com";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 text-[11px] uppercase tracking-[0.3em] text-cream/70 md:px-10"
      >
        <a
          href="#top"
          className="relative block h-12 w-44 overflow-hidden transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo.png"
            alt="The Bouhrira Group"
            className="absolute left-0 top-1/2 w-full max-w-none -translate-y-1/2"
          />
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <a href="#thesis" className="transition-colors hover:text-cream">
              Thesis
            </a>
          </li>
          <li>
            <a href="#process" className="transition-colors hover:text-cream">
              Process
            </a>
          </li>
          <li>
            <a href="#why" className="transition-colors hover:text-cream">
              Rationale
            </a>
          </li>
        </ul>
        <a href="#contact" className="text-gold transition-colors hover:text-cream">
          Enquire
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden pb-14 md:pb-20"
    >
      {/* Portrait */}
      <div className="grain pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[78vh] w-[min(88vw,560px)] md:h-[86vh]">
          <img
            src="/images/portrait.png"
            alt="Portrait of the founder of The Bouhrira Group"
            className="h-full w-full object-cover object-top grayscale contrast-110"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 62% at 50% 40%, black 45%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 62% at 50% 40%, black 45%, transparent 100%)",
            }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
      </div>

      {/* Wordmark */}
      <div className="relative z-10 flex w-full flex-col items-center px-4">
        <h1 className="sr-only">
          The Bouhrira Group — B2B brand partnership brokerage for Saudi Arabia, the UAE, and
          Kuwait
        </h1>
        <div
          aria-hidden="true"
          className="w-full select-none text-center font-serif font-semibold uppercase leading-[0.82] tracking-[-0.02em] text-cream"
          style={{ fontSize: "clamp(3.6rem, 17.2vw, 19rem)" }}
        >
          Bouhrira
        </div>
        <p className="mt-8 font-serif text-xl italic tracking-wide text-cream/80 md:mt-10 md:text-2xl">
          Partnerships across the Gulf.
        </p>
        <div className="mt-10 flex items-center gap-6 text-[10px] uppercase tracking-[0.35em] text-cream/40">
          <span>Riyadh</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>Dubai</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>Kuwait City</span>
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="thesis" className="px-6 py-28 md:px-10 md:py-40" aria-labelledby="thesis-heading">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel number="01" label="The problem" />
        </Reveal>
        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <h2
              id="thesis-heading"
              className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-6xl"
            >
              Attention that is bought is rarely attention that is{" "}
              <em className="italic text-gold">kept</em>.
            </h2>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={100}>
              <p className="font-serif text-2xl leading-[1.35] text-cream/90 md:text-[1.75rem]">
                Generic display advertising asks a stranger to interrupt what they were doing and
                care about something they never asked for. Most decline. Researchers have described
                this for decades as banner blindness: people learn where advertising sits on a page
                and their eyes simply route around it.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-base leading-relaxed text-cream/60 md:text-lg">
                The consequence is structural, not tactical. Click-through rates on untargeted
                display placements are consistently low, and a meaningful share of the budget is
                spent on impressions that were never going to become customers — the wrong person,
                the wrong moment, or a placement nobody looked at. A brand pays for exposure and
                hopes some of it lands.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-8 text-base leading-relaxed text-cream/60 md:text-lg">
                We take the opposite position. A customer is far more receptive when a brand they
                already trust makes the introduction, and when the reward for acting is real. That
                is a partnership, not an advertisement — and it is the only thing we broker.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "I",
    title: "We identify the right partner.",
    body: "A brand that shares your exact customer but does not compete with you for the same purchase. A fitness app and a healthy-meal delivery service. A banking product and a travel platform. Same person, different wallet.",
  },
  {
    n: "II",
    title: "Your customer acts and is rewarded.",
    body: "The customer completes a specific, defined action — a signup, a download, a first order — and receives a genuine reward from the partner brand in return. The incentive is relevant because the partner was chosen for that customer.",
  },
  {
    n: "III",
    title: "Both sides grow. You pay for results.",
    body: "One brand acquires a qualified customer; the other earns goodwill and a new relationship. Fees are tied to verified actions, not to impressions or reach. Nothing is owed for exposure.",
  },
];

function Process() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="rule" />
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <SectionLabel number="02" label="The process" />
        </Reveal>
        <Reveal className="mt-14 max-w-3xl">
          <h2
            id="process-heading"
            className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-6xl"
          >
            How a partnership is built.
          </h2>
        </Reveal>

        <ol className="mt-20 grid gap-px bg-cream/10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.n}
              delay={i * 120}
              className="flex flex-col justify-between bg-ink p-8 md:min-h-[26rem] md:p-10"
            >
              <span className="font-serif text-5xl leading-none text-gold md:text-6xl">{s.n}</span>
              <div className="mt-16">
                <h3 className="font-serif text-2xl font-medium leading-tight text-cream md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-cream/60 md:text-base">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const rationale = [
  {
    k: "Pricing",
    title: "Zero cost until a result is delivered.",
    body: "Performance-based pricing changes who carries the risk. Under a display model, the brand pays first and finds out later whether anything worked. Under ours, a fee exists only after a verified action exists. If the partnership does not produce results, it does not produce an invoice.",
  },
  {
    k: "Conversion",
    title: "A warm introduction beats a cold interruption.",
    body: "Partnership offers reach people who are already active customers of a related brand, so the audience is pre-qualified by their own behaviour rather than by a targeting model's guess. And because the reward comes from a brand they chose, it is relevant by construction — not a random coupon, but something the customer would plausibly want.",
  },
  {
    k: "Market",
    title: "The Gulf is well suited to this model.",
    body: "Saudi Arabia, the UAE, and Kuwait combine high consumer spending power with young, mobile-first populations and a fast-growing base of consumer apps and services. Precision partnership brokerage — as distinct from generic media buying or influencer placement — remains a comparatively uncrowded discipline in the region. Early, well-matched partnerships have room to compound.",
  },
];

function Why() {
  return (
    <section id="why" aria-labelledby="why-heading">
      <div className="rule" />
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <SectionLabel number="03" label="Why this works" />
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2
              id="why-heading"
              className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-6xl"
            >
              The case, stated plainly.
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-cream/50">
              We would rather set out the logic than make promises. Three reasons the model holds,
              and one honest note on what we cannot yet show you.
            </p>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            {rationale.map((r, i) => (
              <Reveal
                key={r.k}
                delay={i * 80}
                className="border-t border-cream/10 py-10 first:border-t-0 first:pt-0"
              >
                <div className="grid gap-4 md:grid-cols-[7rem_1fr]">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-gold">{r.k}</span>
                  <div>
                    <h3 className="font-serif text-2xl font-medium leading-tight text-cream md:text-3xl">
                      {r.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-cream/60 md:text-base">
                      {r.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Honest placeholder */}
            <Reveal delay={240} className="mt-6 border border-dashed border-gold/40 p-8 md:p-10">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
                Results — placeholder
              </span>
              <p className="mt-4 font-serif text-2xl leading-snug text-cream md:text-3xl">
                First partnership results will be published here once verified.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-cream/50">
                We do not publish projected figures, illustrative case studies, or unattributed
                testimonials. When the first partnership completes and its numbers have been
                confirmed by both brands, they will appear in this space.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const channels = [
  {
    title: "Content",
    body: "Documented case studies, published once results are verified. No hypotheticals.",
  },
  {
    title: "Direct outreach",
    body: "Personal, researched introductions to consumer brands and apps whose customers overlap.",
  },
  {
    title: "Search visibility",
    body: "Clear, structured pages built around the questions decision-makers in the region actually search for.",
  },
];

const searchTerms = [
  "brand partnership Gulf",
  "performance marketing UAE",
  "app growth partnerships Saudi Arabia",
  "co-marketing partnerships Kuwait",
];

function Growth() {
  return (
    <section id="growth" aria-labelledby="growth-heading">
      <div className="rule" />
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <SectionLabel number="04" label="How we grow" />
        </Reveal>
        <div className="mt-14 grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2
              id="growth-heading"
              className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-6xl"
            >
              Deliberately, through three channels.
            </h2>
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-cream/10 border-y border-cream/10">
              {channels.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 80} className="grid gap-2 py-7 md:grid-cols-[11rem_1fr]">
                  <h3 className="font-serif text-2xl text-cream">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-cream/60 md:text-base">{c.body}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={260} className="mt-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-cream/40">
                Terms we intend to be found for
              </p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {searchTerms.map((t) => (
                  <li
                    key={t}
                    className="border border-cream/15 px-4 py-2 font-serif text-lg italic text-cream/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="relative">
      <div className="rule" />
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 py-32 text-center md:px-10 md:py-48">
        <Reveal>
          <SectionLabel number="05" label="Begin" />
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="cta-heading"
            className="mt-12 max-w-4xl font-serif text-5xl font-medium leading-[1] text-cream md:text-8xl"
          >
            Start a partnership.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/60 md:text-lg">
            Tell us who your customer is. We will tell you, honestly, whether there is a partner
            worth introducing — and what it would cost only if it works.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-12">
          <a
            href={`mailto:${EMAIL}?subject=Partnership%20enquiry`}
            className="group inline-flex items-center gap-5 border border-gold px-10 py-5 text-[12px] uppercase tracking-[0.35em] text-gold transition-colors duration-500 hover:bg-gold hover:text-ink"
          >
            Start a partnership
            <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="overflow-hidden border-t border-cream/10">
      <div className="mx-auto max-w-[1600px] px-6 pt-16 md:px-10 md:pt-24">
        <div className="grid gap-12 pb-16 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-cream/40">Contact</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 block font-serif text-2xl text-cream transition-colors hover:text-gold"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-cream/40">Markets served</p>
            <ul className="mt-4 space-y-1 font-serif text-2xl text-cream">
              <li>Saudi Arabia</li>
              <li>United Arab Emirates</li>
              <li>Kuwait</li>
            </ul>
          </div>
          <div className="md:text-right">
            <p className="text-[11px] uppercase tracking-[0.3em] text-cream/40">Practice</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60 md:ml-auto">
              B2B partnership brokerage. Performance-priced. No exposure fees.
            </p>
          </div>
        </div>

        <div className="flex justify-center overflow-hidden py-4 md:py-6">
          <img
            src="/images/logo.png"
            alt="The Bouhrira Group"
            className="h-auto w-[min(58vw,460px)] object-contain"
          />
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-cream/10 py-6 text-[10px] uppercase tracking-[0.3em] text-cream/35 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} The Bouhrira Group</span>
          <span>Riyadh · Dubai · Kuwait City</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <Nav />
      <main>
        <Hero />
        <Thesis />
        <Process />
        <Why />
        <Growth />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
