import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuoteForm } from "@/components/site/quote-form";
import { ReviewBadges } from "@/components/site/review-badges";
import { ProjectGallery } from "@/components/site/project-gallery";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";

const TITLE = "HC Gardens Landscape | Garden Design & Landscaping Gillingham, Kent";
const DESCRIPTION =
  "Based in Gillingham, Kent, we are a trusted garden design and landscaping business with over 10 years of experience creating high-quality outdoor spaces for homeowners across Kent and surrounding areas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const PHONE = "+44 7429 937727";
const EMAIL = "hcgardenslandscape@outlook.com";
const ADDRESS = "Gillingham, United Kingdom, ME8";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Service Area", href: "#areas" },
  { label: "Contact", href: "#quote" },
];

const SERVICES = [
  {
    name: "Full Garden Makeovers & Design",
    img: img7,
    copy: "Complete bespoke garden transformations from concept to completion: custom pergolas, outdoor dining zones, barbecue lounges, and bespoke planting.",
    points: [
      "3D Concept Design",
      "Outdoor Living Areas",
      "Integrated Seating",
      "Turnkey Transformation",
    ],
  },
  {
    name: "Porcelain & Sandstone Patios",
    img: img6,
    copy: "Contemporary Italian porcelain tiles, natural Indian sandstone, and luxury paving laid onto laser-leveled solid sub-bases with seamless jointing.",
    points: ["Porcelain Paving", "Indian Sandstone", "Flush Thresholds", "Weatherproof Grout"],
  },
  {
    name: "Pergolas, Verandas & Timber Structures",
    img: img4,
    copy: "Custom architectural pergolas, sheltered seating verandas, modern privacy screening, and timber framework tailored precisely to your garden layout.",
    points: ["Bespoke Pergolas", "Sheltered Verandas", "Slatted Cedar Screens", "Downlighting"],
  },
  {
    name: "Pathways, Steps & Planter Walls",
    img: img2,
    copy: "Stepped pathways, crisp white rendered planter walls, decorative stone surrounds, and raised bedding designed for effortless outdoor living.",
    points: ["Stepping Stones", "Rendered Planters", "Retaining Walls", "Decorative Aggregates"],
  },
  {
    name: "Driveways & Front Entrances",
    img: img3,
    copy: "High-durability block paving, tarmac, resin and stone driveways paired with seamless kerbs and front-of-house entrance landscaping.",
    points: ["Block Paving", "Resin Bound", "Entrance Paths", "Durable Sub-base"],
  },
  {
    name: "Ambient Outdoor Lighting & Features",
    img: img5,
    copy: "Atmospheric LED path illumination, subtle step under-lighting, uplighted architectural foliage, and tranquil outdoor water features.",
    points: ["LED Step Lighting", "Warm Ambient Uplights", "Water Features", "Low-Voltage Systems"],
  },
];

const REVIEWS = [
  {
    name: "Mark & Sarah Thompson",
    location: "Rainham, Gillingham (ME8)",
    text: "Cat and the HC Gardens team completely transformed our rear garden into an unbelievable outdoor sanctuary with a custom pergola, porcelain patio and beautiful lighting. The attention to detail from day one through to completion was second to none. Reliable, clean, and true craftsmen.",
    job: "Full garden makeover & pergola lounge",
  },
  {
    name: "David H.",
    location: "Rochester, Kent",
    text: "Cat's 10+ years in the trade truly show in the quality of finish. They designed and laid our modern porcelain patio and raised planter beds with absolute precision. Delivered on time, within budget, and left everything spotless every evening. Could not recommend HC Gardens enough!",
    job: "Porcelain terrace & rendered planters",
  },
  {
    name: "Emma & James Clarke",
    location: "Maidstone, Kent",
    text: "From our initial free consultation with Cat in Gillingham to the final handover, the team was polite, communicative and extremely hardworking. Our outdoor living space looks like a luxury showroom garden. 5 stars all the way!",
    job: "Garden redesign, pathways & lighting",
  },
];

const WHY = [
  {
    icon: ShieldCheck,
    title: "Over 10 Years Experience",
    copy: "Over a decade of hands-on expertise delivering high-end landscaping, paving, and garden transformations across Kent.",
  },
  {
    icon: Hammer,
    title: "Attention to Detail",
    copy: "Meticulous care at every single stage — from precise laser-guided groundworks to the final clean down and sealing.",
  },
  {
    icon: Ruler,
    title: "Free Consultations & Quotes",
    copy: "We visit your property for an in-depth survey, understand your vision, and provide a clear, itemised, no-obligation quotation.",
  },
  {
    icon: Star,
    title: "Trusted Local Business",
    copy: "Proudly based in Gillingham (ME8), Kent, with a strong reputation for dependability, politeness, and five-star craftsmanship.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Guaranteed",
    copy: "Comprehensive public liability coverage and robust workmanship guarantees so your investment is 100% protected.",
  },
  {
    icon: Leaf,
    title: "Tailored Garden Design",
    copy: "Every garden is unique. We craft bespoke layouts, planting schemes, and modern outdoor living solutions to match your lifestyle.",
  },
];

const PROCESS = [
  {
    n: "01",
    icon: MapPin,
    title: "Free On-Site Consultation",
    copy: "We visit your property across Gillingham or wider Kent to survey the space, discuss your ideas, material choices, and understand your budget.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Bespoke Design & Detailed Quote",
    copy: "We formulate a comprehensive design plan and provide a transparent, itemised quotation with zero hidden costs.",
  },
  {
    n: "03",
    icon: CalendarCheck,
    title: "Expert Build & Final Handover",
    copy: "Our experienced team constructs your project with attention to detail at every stage, delivering a stunning outdoor space ready to enjoy.",
  },
];

const FAQS = [
  {
    q: "Where is HC Gardens Landscape based and which areas do you cover?",
    a: "We are based in Gillingham, Kent (ME8) and proudly serve homeowners across Gillingham, Rainham, Chatham, Rochester, Maidstone, Sittingbourne, Gravesend, and all surrounding areas in Kent.",
  },
  {
    q: "How much experience does HC Gardens Landscape have?",
    a: "We have over 10 years of experience designing and constructing high-quality outdoor spaces, patios, driveways, pergolas, and full garden makeovers.",
  },
  {
    q: "Do you offer free consultations and quotes?",
    a: "Yes! We offer 100% free, no-obligation on-site surveys and detailed itemised quotations for homeowners across Kent.",
  },
  {
    q: "How long does a typical garden project take?",
    a: "A new porcelain patio or pathway typically takes 3–7 working days, while a complete full garden transformation or outdoor lounge installation takes 1–3 weeks depending on the scale. We provide an exact timeline before work begins.",
  },
  {
    q: "Can you help with garden design ideas and material selection?",
    a: "Absolutely. We guide you through porcelain vs. sandstone paving, cedar slatted screens, pergola styles, lighting fixtures, and low-maintenance planting to create your ideal outdoor living space.",
  },
  {
    q: "How can I contact HC Gardens Landscape to get started?",
    a: "You can submit the quote form on this page, email Cat directly at hcgardenslandscape@outlook.com, or call us on +44 7429 937727. Cat will arrange a free on-site survey at a time that suits you.",
  },
];

const AREAS = [
  "Gillingham",
  "Rainham",
  "Chatham",
  "Rochester",
  "Strood",
  "Medway",
  "Maidstone",
  "Sittingbourne",
  "Faversham",
  "Gravesend",
  "Canterbury",
  "Aylesford",
  "Snodland",
  "Kings Hill",
  "Dartford",
  "Sevenoaks",
  "All Surrounding Kent Areas",
];

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className="grid size-10 sm:size-11 place-items-center rounded-xl bg-forest text-gold border border-gold/40 shadow-md shrink-0">
        <Leaf className="size-5 sm:size-6 text-gold" />
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className="font-display text-base sm:text-lg font-bold tracking-tight text-foreground">
          HC <span className="text-primary">GARDENS</span>
        </span>
        <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.25em] text-gold-deep">
          Landscape · Kent
        </span>
      </div>
    </div>
  );
}

function BrandLogoFooter({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className="grid size-11 place-items-center rounded-xl bg-forest-foreground/10 text-gold border border-gold/40 shadow-md shrink-0">
        <Leaf className="size-6 text-gold" />
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className="font-display text-lg font-bold tracking-tight text-forest-foreground">
          HC <span className="text-gold">GARDENS</span>
        </span>
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-gold/90">
          Landscape · Kent
        </span>
      </div>
    </div>
  );
}

function GetQuote({
  label = "Get a Free Quote",
  variant = "quote",
}: {
  label?: string;
  variant?: "quote" | "forest" | "outlineLight";
}) {
  return (
    <Button asChild variant={variant} size="xl">
      <a href="#quote">
        {label} <ArrowRight />
      </a>
    </Button>
  );
}

function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center px-2">
      <span className={`eyebrow ${light ? "text-gold" : ""}`}>
        <Leaf className="size-3.5" /> {eyebrow}
      </span>
      <h2
        className={`mt-3 text-balance text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] ${
          light ? "text-forest-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-3 text-pretty text-sm sm:text-base ${
            light ? "text-forest-foreground/85" : "text-muted-foreground"
          }`}
        >
          {copy}
        </p>
      ) : null}
      <span className="leaf-rule mx-auto mt-6 block w-32 sm:w-40" />
    </div>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* ---------- Top bar ---------- */}
      <div className="hidden bg-forest text-forest-foreground md:block border-b border-forest-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 py-2.5 text-xs">
          <span className="flex items-center gap-2 text-forest-foreground/90 font-medium">
            <MapPin className="size-3.5 text-gold" /> Based in Gillingham, Kent (ME8) · Serving all
            Kent & surrounding areas
          </span>
          <span className="flex items-center gap-5 text-forest-foreground/90 font-medium">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="size-3.5 text-gold" /> {EMAIL}
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-gold" /> Over 10 Years Experience
            </span>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 font-bold text-forest-foreground hover:text-gold transition-colors"
            >
              <Phone className="size-3.5 text-gold" /> {PHONE}
            </a>
          </span>
        </div>
      </div>

      {/* ---------- Navigation ---------- */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-3">
          {/* Mobile Call Icon (Left) */}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            aria-label="Call HC Gardens Landscape"
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary hover:text-primary transition-colors lg:hidden shrink-0"
          >
            <Phone className="size-5 text-primary" />
          </a>

          {/* Logo */}
          <a href="#top" className="group">
            <BrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="size-4" /> {PHONE}
            </a>
            <Button asChild variant="quote">
              <a href="#quote">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Hamburger Button (Right) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border text-foreground hover:bg-secondary lg:hidden shrink-0"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {open ? (
          <div className="border-t border-border bg-background px-4 sm:px-6 pb-6 pt-3 lg:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-lg border border-border/60 bg-card px-3 py-2.5 text-sm font-semibold text-foreground/85 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors text-center shadow-xs"
                >
                  {n.label}
                </a>
              ))}
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 py-2.5 text-sm font-bold text-primary"
              >
                <Phone className="size-4" /> {PHONE}
              </a>
              <Button asChild variant="quote" className="w-full">
                <a href="#quote" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden bg-forest text-forest-foreground">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url(${img7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[var(--gradient-forest)] opacity-95"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 -top-24 size-[34rem] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20 md:py-24 text-center">
            <div className="rise flex flex-col items-center">
              <span className="eyebrow text-gold text-center text-xs sm:text-sm">
                <Star className="size-3.5 fill-gold shrink-0" /> Over 10 Years Experience
              </span>
              <h1 className="mt-5 text-balance font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-forest-foreground">
                Garden Design & Landscaping
                <span className="block text-gold mt-1">in Gillingham & Across Kent</span>
              </h1>
              <p className="mt-5 max-w-3xl text-pretty text-sm sm:text-base md:text-lg text-forest-foreground/90 font-normal leading-relaxed">
                Based in Gillingham, Kent, we are a trusted garden design and landscaping business
                with over 10 years of experience creating high-quality outdoor spaces for homeowners
                across Kent and the surrounding areas, with attention to detail at every stage.
              </p>

              <ul className="mt-7 grid w-full max-w-3xl grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4">
                {[
                  { icon: ShieldCheck, t: "10+ Years Experience" },
                  { icon: Hammer, t: "Attention to Detail" },
                  { icon: Ruler, t: "Free Consultations" },
                  { icon: Shield, t: "Fully Insured" },
                ].map((u) => (
                  <li
                    key={u.t}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-forest-foreground/20 bg-forest-foreground/10 px-2.5 py-2.5 sm:px-3.5 sm:py-3 text-forest-foreground shadow-sm"
                  >
                    <u.icon className="size-4 shrink-0 text-gold" />
                    <span className="text-xs sm:text-sm font-bold tracking-tight">{u.t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3">
                <div className="w-full sm:w-auto">
                  <GetQuote label="Get Your Free Quote" />
                </div>
                <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone className="size-4" /> {PHONE}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex justify-center">
                <ReviewBadges tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Horizontal quote form ---------- */}
        <section id="quote" className="relative z-10 bg-forest pb-12 sm:pb-16 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grain rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-[var(--shadow-lift)]">
              <div className="relative mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    Get your free, no-obligation quote
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mt-1">
                    Free on-site surveys across Kent · Direct response within 24 hours
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <BadgeCheck className="size-4 text-primary" /> Free Advice & Transparent Pricing
                </span>
              </div>
              <div className="relative">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Reviews / Testimonials Under Hero ---------- */}
        <section
          id="reviews"
          className="section-pad relative overflow-hidden bg-decor-radial grain border-b border-border scroll-mt-20"
        >
          <div
            className="pointer-events-none absolute -left-20 top-20 size-80 rounded-full bg-primary/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-10 size-80 rounded-full bg-gold/8 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Customer Reviews"
              title="Trusted by Homeowners Across Kent"
              copy="Read feedback from our clients in Gillingham, Rainham, Rochester, Maidstone and surrounding areas."
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <figure
                  key={r.name}
                  className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Quote className="absolute right-5 top-5 sm:right-6 sm:top-6 size-7 sm:size-8 text-primary/15" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85 font-normal">
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block font-display text-base sm:text-lg font-bold text-foreground">
                      {r.name}
                    </span>
                    <span className="block text-xs font-semibold text-primary">{r.job}</span>
                    <span className="text-[0.72rem] text-muted-foreground">{r.location}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ReviewBadges />
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Highlights Strip ---------- */}
        <section className="border-y border-border bg-cream py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { title: "10+ Years", desc: "Proven landscaping craftsmanship" },
                { title: "Gillingham ME8", desc: "Local & trusted across Kent" },
                { title: "Bespoke Design", desc: "Tailored to your lifestyle & budget" },
                { title: "5-Star Rating", desc: "Meticulous finish on every project" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 text-center shadow-xs"
                >
                  <span className="font-display text-xl sm:text-2xl font-bold text-primary block">
                    {item.title}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground mt-0.5 block">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- About / Company Story ---------- */}
        <section id="about" className="section-pad bg-background scroll-mt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div className="relative">
              <img
                src={img1}
                width={1408}
                height={912}
                loading="lazy"
                alt="HC Gardens Landscape garden design project"
                className="rounded-2xl object-cover shadow-[var(--shadow-lift)] aspect-[4/3] w-full"
              />
              <img
                src={img5}
                width={600}
                height={450}
                loading="lazy"
                alt="HC Gardens Landscape illuminated walkway detail"
                className="absolute -bottom-6 -right-3 hidden w-44 sm:w-48 rounded-xl border-4 border-card object-cover shadow-[var(--shadow-lift)] sm:block aspect-[4/3]"
              />
            </div>
            <div>
              <span className="eyebrow">
                <Leaf className="size-3.5" /> Over 10 Years Experience · Gillingham, Kent
              </span>
              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15]">
                Welcome to HC Gardens Landscape
              </h2>
              <span className="leaf-rule mt-5 block w-32 sm:w-40" />
              <p className="mt-5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                Founded and led by owner <strong>Cat</strong>, HC Gardens Landscape is a trusted
                garden design and landscaping business based in Gillingham, Kent. With over 10 years
                of hands-on experience, Cat and the team create high-quality outdoor spaces for
                homeowners across Kent and the surrounding areas, with attention to detail at every
                stage.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base text-foreground/85 leading-relaxed">
                Whether you are seeking a complete garden transformation with bespoke pergolas and
                ambient illumination, a luxury porcelain patio terrace, architectural walkways, or
                front entrance landscaping, our experienced team manages every detail with unmatched
                care and craftsmanship.
              </p>
              <p className="mt-3.5 text-pretty text-sm sm:text-base font-semibold text-primary leading-relaxed">
                We believe your garden should be a seamless extension of your home — built to last
                and enjoyed throughout every season.
              </p>
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2.5 sm:gap-4">
                {[
                  { k: "10+ Yrs", v: "Expertise in garden design" },
                  { k: "Kent ME8", v: "Gillingham & surrounding areas" },
                  { k: "100%", v: "Attention to detail" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-xl border border-border bg-card p-3 sm:px-4 sm:py-3 shadow-sm text-center sm:text-left"
                  >
                    <span className="block font-display text-lg sm:text-2xl font-bold text-primary">
                      {s.k}
                    </span>
                    <span className="text-[0.68rem] sm:text-xs font-semibold text-muted-foreground">
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <GetQuote />
                <Button asChild variant="outline" size="xl">
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone className="size-4" /> Call {PHONE}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section
          id="services"
          className="section-pad relative overflow-hidden bg-decor-warm border-y border-border scroll-mt-20"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 size-[44rem] rounded-full bg-primary/4 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-1/3 size-72 rounded-full bg-gold/6 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="What we do"
              title="Our Landscaping & Garden Design Services"
              copy="From bespoke outdoor living lounges to precision-laid porcelain patios — all delivered with expert craftsmanship and attention to detail."
            />
            <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.name}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={s.img}
                      width={1024}
                      height={768}
                      loading="lazy"
                      alt={s.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{s.name}</h3>
                    <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-foreground/85">
                      {s.copy}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="rounded-full border border-border bg-secondary px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.72rem] sm:text-xs font-semibold text-secondary-foreground"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#quote"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary transition-colors hover:text-primary/80"
                    >
                      Get a quote for {s.name.toLowerCase()} <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Request a Free Consultation" />
            </div>
          </div>
        </section>

        {/* ---------- Portfolio Gallery ---------- */}
        <section id="work" className="section-pad bg-forest text-forest-foreground scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              light
              eyebrow="Our Portfolio"
              title="Recent Garden & Landscaping Projects"
              copy="Browse our real completed garden makeovers, luxury patios, custom pergolas, and outdoor living designs across Kent."
            />
            <div className="mt-8 sm:mt-10">
              <ProjectGallery />
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Get a Quote for Your Project" />
            </div>
          </div>
        </section>

        {/* ---------- Why choose us ---------- */}
        <section id="why" className="section-pad grain scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Why Choose Us"
              title="Why Homeowners Choose HC Gardens Landscape"
              copy="A reputation built over 10+ years on craftsmanship, reliability, and attention to detail."
            />
            <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <div
                  key={w.title}
                  className="relative rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="grid size-11 sm:size-12 place-items-center rounded-xl bg-forest text-gold shadow-sm">
                    <w.icon className="size-5 sm:size-6" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">
                    {w.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Process ---------- */}
        <section id="process" className="section-pad bg-cream scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Our Process"
              title="From Initial Survey to Finished Outdoor Space"
              copy="A smooth, structured three-stage journey with clear communication from start to completion."
            />
            <div className="relative mt-12 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
              <span
                className="absolute inset-x-6 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"
                aria-hidden="true"
              />
              {PROCESS.map((p) => (
                <div
                  key={p.n}
                  className="relative rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm"
                >
                  <span className="relative grid size-12 sm:size-14 place-items-center rounded-full border-2 border-forest/15 bg-primary text-primary-foreground shadow-md">
                    <p.icon className="size-5 sm:size-6 text-gold" />
                  </span>
                  <span className="mt-4 sm:mt-5 block font-display text-xs font-bold tracking-[0.25em] text-primary">
                    STEP {p.n}
                  </span>
                  <h3 className="mt-1 text-lg sm:text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80">
                    {p.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote label="Book Your Free Site Survey" />
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section
          id="faq"
          className="section-pad relative overflow-hidden bg-decor-radial border-b border-border scroll-mt-20"
        >
          <div
            className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-gold/6 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-10 size-80 rounded-full bg-primary/5 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
            <Accordion type="single" collapsible className="mt-8 sm:mt-10">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold hover:text-primary hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm leading-relaxed text-foreground/85">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>

        {/* ---------- Service areas ---------- */}
        <section id="areas" className="section-pad bg-cream grain scroll-mt-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionHead
              eyebrow="Service Coverage"
              title="Based in Gillingham, Kent (ME8) — Serving Kent & Surrounds"
              copy="Providing high-quality garden design and landscaping services across Medway and throughout the county of Kent."
            />
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-foreground/85 shadow-sm transition-all hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <MapPin className="size-3.5 text-primary" /> {a}
                </span>
              ))}
            </div>
            <div className="mt-10 sm:mt-12 flex justify-center">
              <GetQuote />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#top" className="inline-block group">
                <BrandLogoFooter />
              </a>
              <p className="mt-4 max-w-md text-xs sm:text-sm leading-relaxed text-forest-foreground/85">
                Based in Gillingham, Kent, HC Gardens Landscape is a trusted garden design and
                landscaping business with over 10 years of experience creating high-quality outdoor
                spaces across Kent, with attention to detail at every stage.
              </p>
              <div className="mt-4 flex flex-col gap-1.5 text-xs text-forest-foreground/80">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-gold shrink-0" /> {ADDRESS}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="size-3.5 text-gold shrink-0" /> {EMAIL}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="size-3.5 text-gold shrink-0" /> {PHONE}
                </span>
              </div>
              <div className="mt-5">
                <ReviewBadges tone="dark" />
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Our Services
              </h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-forest-foreground/80">
                {SERVICES.map((s) => (
                  <li key={s.name}>
                    <a href="#services" className="hover:text-gold transition-colors">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-forest-foreground/85">
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-gold shrink-0" />
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="hover:text-gold transition-colors font-bold"
                  >
                    {PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-gold shrink-0" />
                  <a
                    href={`mailto:${EMAIL}`}
                    className="hover:text-gold transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{ADDRESS}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    Mon–Sat: 08:00 – 18:00
                    <br />
                    Sunday: By Appointment
                  </span>
                </li>
              </ul>
              <div className="mt-5">
                <GetQuote />
              </div>
            </div>
          </div>

          <span className="leaf-rule mt-10 sm:mt-12 block" />
          <div className="mt-6 flex flex-col items-center justify-between gap-2 text-center text-xs text-forest-foreground/70 md:flex-row md:text-left">
            <span>© {new Date().getFullYear()} HC Gardens Landscape. All rights reserved.</span>
            <span>
              Based in Gillingham, Kent (ME8) · Over 10 Years Experience · High-Quality Landscaping
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
