import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Globe2,
  Filter,
  Clock,
  Wallet,
  Check,
  X,
  Camera,
  Send,
  Sparkles,
  Smartphone,
  XCircle,
  AlertTriangle,
  DollarSign,
  QrCode,
  MapPin,
  ShieldCheck,
  Headphones,
  Zap,
  Plus,
  Minus,
  Mail,
} from "lucide-react";
import { useState } from "react";
import logoSacuanjoche from "@/assets/logo-sacuanjoche.png";

const WHATSAPP_NUMBER = "50576514498";
const WHATSAPP_DISPLAY = "+505 7651 4498";
const CONTACT_EMAIL = "Ventas@sacuanjoche.dev";
const mailtoLink = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/vende-tus-propiedades")({
  head: () => ({
    meta: [
      { title: "Vende tu propiedad sin comisiones — Sacuanjoche.dev" },
      {
        name: "description",
        content:
          "Digitaliza tu casa con un portal web de lujo. Vende directo, sin comisiones, en toda Centroamérica. Entrega en 48h.",
      },
      { property: "og:title", content: "Vende tu propiedad sin comisiones — Sacuanjoche.dev" },
      {
        property: "og:description",
        content:
          "Portal web premium para tu propiedad. Filtra curiosos, atrae compradores reales y cierra el trato directo.",
      },
    ],
  }),
  component: VendeTusPropiedades,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight group">
          <img
            src={logoSacuanjoche}
            alt="Sacuanjoche.dev"
            className="h-9 w-9 object-contain drop-shadow-[0_0_14px_var(--brand-gold)/40] transition-transform group-hover:scale-110"
          />
          <span className="text-lg">
            Sacuanjoche<span className="text-[var(--brand-gold)]">.dev</span>
          </span>
        </a>
        <a
          href="#contacto"
          className="rounded-full border border-border/70 px-5 py-2 text-sm font-medium hover:bg-accent/10 hover:border-[var(--brand-emerald)] transition-all"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-28 lg:pt-32 lg:pb-40">
        <motion.div {...fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-xs sm:text-sm text-muted-foreground backdrop-blur">
            <span className="tracking-wider">🇬🇹 🇸🇻 🇭🇳 🇳🇮 🇨🇷 🇵🇦</span>
            <span className="hidden sm:inline">·</span>
            <span>Tecnología inmobiliaria para propietarios</span>
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-8 text-center text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Vendé tu propiedad sin{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
            regalar tu dinero
          </span>{" "}
          <span className="text-foreground/90">en comisiones.</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 mx-auto max-w-2xl text-center text-base sm:text-lg text-muted-foreground"
        >
          Tu propiedad o local no solo estará en Facebook. Digitaliza tu propiedad con un portal web de
          lujo y atrae compradores reales, no mirones.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#precios"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-[1.04] hover:shadow-[0_0_40px_var(--brand-gold)] transition-all duration-300"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            Empezar a vender ahora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={waLink("Hola Sacuanjoche.dev, quiero información para vender mi propiedad.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand-emerald)]/40 bg-card/40 px-7 py-4 text-base font-medium hover:bg-[var(--brand-emerald)]/10 hover:border-[var(--brand-emerald)] transition-all"
          >
            <MessageCircle className="h-5 w-5 text-[var(--brand-emerald)]" />
            Contactar por WhatsApp
          </a>
          <a
            href={mailtoLink(
              "Quiero vender mi propiedad",
              "Hola Sacuanjoche.dev,\n\nMe interesa publicar mi propiedad. ¿Cómo iniciamos?\n\nGracias.",
            )}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--brand-gold)]/40 bg-card/40 px-7 py-4 text-base font-medium hover:bg-[var(--brand-gold)]/10 hover:border-[var(--brand-gold)] transition-all"
          >
            <Mail className="h-5 w-5 text-[var(--brand-gold)]" />
            {CONTACT_EMAIL}
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {[
            { icon: Globe2, t: "6 países de cobertura" },
            { icon: Zap, t: "Entrega en 48h" },
            { icon: ShieldCheck, t: "2 planes de pago único" },
            { icon: Headphones, t: "Soporte 24/7" },
          ].map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur px-4 py-4 flex items-center gap-3"
            >
              <div className="h-9 w-9 rounded-xl bg-[var(--brand-gold)]/10 flex items-center justify-center text-[var(--brand-gold)]">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm text-muted-foreground">{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PainPoints() {
  const pains = [
    {
      icon: XCircle,
      title: "Basta de fotos por WhatsApp que nadie mira",
      desc: "Tu propiedad merece más que un álbum perdido en un chat lleno de stickers.",
    },
    {
      icon: AlertTriangle,
      title: "Filtra a los preguntones y curiosos",
      desc: "Solo te escriben compradores con intención real. Cero pérdida de tiempo.",
    },
    {
      icon: DollarSign,
      title: "Ahorra miles de dólares en comisiones",
      desc: "Olvídate del 5% al agente. Vendés directo y el dinero se queda con vos.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
      <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-destructive">
          Donde más duele
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
          Vender una propiedad hoy{" "}
          <span className="text-muted-foreground">no debería sentirse así.</span>
        </h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pains.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group rounded-3xl border border-border/60 bg-card/50 p-8 hover:border-destructive/40 hover:-translate-y-1 transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Comparison() {
  const before = [
    "Mezclado con miles de casas baratas",
    "Fotos comprimidas y de baja calidad",
    "Lleno de “preguntones” que no compran",
    "Tu propiedad se pierde entre el ruido",
  ];
  const after = [
    "Subdominio único y memorable",
    "Galería premium lista para WhatsApp",
    "Filtra curiosos automáticamente",
    "Te posiciona como un vendedor serio",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
      <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-emerald)]">
          El problema real
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
          Antes y después de
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-gold)" }}>
            {" "}Sacuanjoche
          </span>
        </h2>
      </motion.div>

      <div className="mt-14 grid lg:grid-cols-2 gap-6">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-destructive/20 p-8 lg:p-10"
          style={{ backgroundColor: "oklch(0.3 0.08 25 / 0.12)" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/15 px-3 py-1 text-xs text-destructive">
            <X className="h-3.5 w-3.5" /> Antes
          </div>
          <h3 className="mt-4 text-2xl font-semibold">Post en Marketplace</h3>
          <ul className="mt-6 space-y-3">
            {before.map((b) => (
              <li key={b} className="flex gap-3 text-muted-foreground">
                <X className="h-5 w-5 text-destructive/80 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-[var(--brand-emerald)]/30 p-8 lg:p-10 relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, oklch(0.25 0.05 160 / 0.18), oklch(0.3 0.08 85 / 0.12))",
          }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-emerald)]/15 px-3 py-1 text-xs text-[var(--brand-emerald)]">
            <Sparkles className="h-3.5 w-3.5" /> Después
          </div>
          <h3 className="mt-4 text-2xl font-semibold">Portal Sacuanjoche</h3>
          <ul className="mt-6 space-y-3">
            {after.map((a) => (
              <li key={a} className="flex gap-3">
                <Check className="h-5 w-5 text-[var(--brand-emerald)] shrink-0 mt-0.5" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      icon: Filter,
      title: "Filtra curiosos automáticamente",
      desc: "Quien llega al sitio ya tiene intención real de comprar.",
    },
    {
      icon: Globe2,
      title: "Atrae compradores en el extranjero",
      desc: "Multilingüe para inversionistas o centroamericanos en USA.",
    },
    {
      icon: Clock,
      title: "Reduce tiempo en visitas perdidas",
      desc: "El comprador llega informado: la visita se vuelve un cierre.",
    },
    {
      icon: Wallet,
      title: "100% de la ganancia para ti",
      desc: "Sin comisiones del 5% a corredores. El dinero es tuyo.",
    },
  ];

  return (
    <section className="border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Beneficios reales
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Por qué los propietarios eligen un portal propio
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-2xl border border-border/60 bg-background/40 p-6 hover:border-[var(--brand-gold)]/40 hover:-translate-y-1 transition-all"
            >
              <div className="h-11 w-11 rounded-xl flex items-center justify-center text-[var(--brand-gold)] bg-[var(--brand-gold)]/10 group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    {
      icon: Camera,
      title: "Cuéntanos de la propiedad",
      desc: "Por WhatsApp nos pasas fotos y precio. 10 minutos de tu tiempo.",
    },
    {
      icon: Send,
      title: "Te entregamos el portal en 48h",
      desc: "Recibes un enlace exclusivo listo para compartir donde quieras.",
    },
    {
      icon: Smartphone,
      title: "Te llegan compradores reales",
      desc: "Dejas de explicar lo básico y empiezas a negociar de verdad.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
      <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-emerald)]">
          Así de simple
        </span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
          Tú no haces nada técnico.
          <br />
          <span className="text-muted-foreground">Nosotros nos encargamos.</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative rounded-3xl border border-border/60 bg-card/50 p-8"
          >
            <div className="flex items-center gap-4">
              <span
                className="text-5xl font-semibold bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                0{i + 1}
              </span>
              <div className="h-12 w-12 rounded-2xl bg-[var(--brand-emerald)]/10 text-[var(--brand-emerald)] flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const basicPricing = {
  USD: { current: "$34.99", original: "$40.00", suffix: "USD" },
  NIO: { current: "C$ 1,290", original: "C$ 1,475", suffix: "NIO" },
  CRC: { current: "₡ 16,025", original: "₡ 20,500", suffix: "CRC" },
  HNL: { current: "L 935", original: "L 990", suffix: "HNL" },
  GTQ: { current: "Q 268", original: "Q 310", suffix: "GTQ" },
} as const;

const premiumPricing = {
  USD: { current: "$94.99", original: "$120.00", suffix: "USD" },
  NIO: { current: "C$ 3,499", original: "C$ 4,400", suffix: "NIO" },
  CRC: { current: "₡ 43,499", original: "₡ 61,000", suffix: "CRC" },
  HNL: { current: "L 2,535", original: "L 3,000", suffix: "HNL" },
  GTQ: { current: "Q 726", original: "Q 930", suffix: "GTQ" },
} as const;

type Currency = keyof typeof basicPricing;

const flagOptions: { code: Currency; flag: string; label: string }[] = [
  { code: "GTQ", flag: "🇬🇹", label: "GTQ" },
  { code: "HNL", flag: "🇭🇳", label: "HNL" },
  { code: "NIO", flag: "🇳🇮", label: "NIO" },
  { code: "CRC", flag: "🇨🇷", label: "CRC" },
];

function PriceDisplay({
  data,
  featured,
}: {
  data: { current: string; original: string; suffix: string };
  featured: boolean;
}) {
  return (
    <div className="mt-6 min-h-[110px]">
      <span className="text-xs text-muted-foreground line-through">
        Antes {data.original}
      </span>
      <AnimatePresence mode="wait">
        <motion.div
          key={data.current + data.suffix}
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(6px)", y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-end gap-2 flex-wrap"
        >
          <span
            className={`text-5xl sm:text-6xl font-semibold tracking-tight ${
              featured ? "bg-clip-text text-transparent" : ""
            }`}
            style={featured ? { backgroundImage: "var(--gradient-gold)" } : undefined}
          >
            {data.current}
          </span>
          <span className="text-muted-foreground mb-2 text-sm">
            {data.suffix} · pago único
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Pricing() {
  const [activeCurrency, setActiveCurrency] = useState<Currency>("USD");

  const handleFlagClick = (code: Currency) => {
    setActiveCurrency((prev) => (prev === code ? "USD" : code));
  };

  const plans = [
    {
      name: "Plan Impulso",
      sub: "Lo esencial para vender más rápido",
      data: basicPricing[activeCurrency],
      features: [
        { icon: Globe2, t: "Sitio web en subdominio" },
        { icon: Camera, t: "Galería optimizada" },
        { icon: MessageCircle, t: "Botón directo a WhatsApp" },
        { icon: MapPin, t: "Mapa interactivo" },
      ],
      featured: false,
    },
    {
      name: "Plan Premium",
      sub: "Marca blanca y herramientas profesionales",
      data: premiumPricing[activeCurrency],
      features: [
        { icon: Sparkles, t: "Todo lo del Plan Impulso" },
        { icon: Globe2, t: "Dominio web propio (.com)" },
        { icon: ShieldCheck, t: "Marca blanca completa" },
        { icon: QrCode, t: "Código QR para rótulo en la casa" },
      ],
      featured: true,
    },
  ];

  return (
    <section id="precios" className="border-y border-border/50 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-32">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Precios
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
            Precio único. Sin mensualidades ni comisiones.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Elegí tu moneda local. Tocá la bandera activa para volver a USD.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mt-10 flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          {flagOptions.map(({ code, flag, label }) => {
            const isActive = activeCurrency === code;
            return (
              <button
                key={code}
                onClick={() => handleFlagClick(code)}
                aria-pressed={isActive}
                className={`relative flex flex-col items-center gap-1.5 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "scale-110 opacity-100"
                    : "opacity-50 hover:opacity-90 hover:scale-105"
                }`}
              >
                <span className="text-3xl sm:text-4xl leading-none">{flag}</span>
                <span
                  className={`text-[10px] tracking-[0.15em] font-medium ${
                    isActive ? "text-[var(--brand-gold)]" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="active-flag-ring"
                    className="absolute -bottom-1 h-1 w-8 rounded-full"
                    style={{
                      backgroundImage: "var(--gradient-gold)",
                      boxShadow: "0 0 14px var(--brand-gold)",
                    }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              {...fadeUp}
              className={`relative rounded-3xl p-8 lg:p-10 border transition-all ${
                p.featured
                  ? "border-[var(--brand-gold)]/40 bg-background/60 shadow-[var(--shadow-gold)] md:-translate-y-2"
                  : "border-border/60 bg-background/40"
              }`}
            >
              {p.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                >
                  Más elegido
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.sub}</p>
              <PriceDisplay data={p.data} featured={p.featured} />
              <ul className="mt-8 space-y-3">
                {p.features.map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-lg bg-[var(--brand-emerald)]/10 text-[var(--brand-emerald)] flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola Sacuanjoche.dev, me interesa el ${p.name}. ¿Cómo iniciamos?`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02] ${
                  p.featured
                    ? "text-primary-foreground shadow-[var(--shadow-gold)]"
                    : "border border-border bg-card hover:border-[var(--brand-emerald)]"
                }`}
                style={p.featured ? { backgroundImage: "var(--gradient-gold)" } : undefined}
              >
                Quiero este plan <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Pagos seguros vía Kash o transferencia bancaria.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "¿Por qué pagar si puedo publicar gratis en Marketplace?",
      a: "Lo gratis atrae curiosos. Un portal propio filtra al público, te da estatus y te diferencia de los anuncios baratos. Vendes a un mejor precio y en menos tiempo.",
    },
    {
      q: "¿Cuánto trabajo tengo que hacer yo?",
      a: "Solo enviarnos las fotos y los datos por WhatsApp. Nosotros diseñamos, escribimos y publicamos todo. En 48h tienes el portal listo.",
    },
    {
      q: "¿Me van a cobrar comisión por la venta?",
      a: "Cero comisiones. Pagas un único monto al inicio. Cuando vendas, el 100% del dinero es tuyo.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 lg:px-10 py-24 lg:py-32">
      <motion.div {...fadeUp} className="text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--brand-emerald)]">FAQ</span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight">
          Lo que todo propietario pregunta antes de vender.
        </h2>
      </motion.div>

      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-border/60 bg-card/50 overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-accent/5 transition-colors"
              >
                <span className="font-medium">{f.q}</span>
                <span
                  className={`h-8 w-8 shrink-0 rounded-full border border-border flex items-center justify-center transition-colors ${
                    isOpen ? "bg-[var(--brand-gold)]/15 text-[var(--brand-gold)]" : ""
                  }`}
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-border/50"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top, oklch(0.25 0.05 160 / 0.25), transparent 60%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 font-semibold">
              <img
                src={logoSacuanjoche}
                alt="Sacuanjoche.dev"
                className="h-12 w-12 object-contain drop-shadow-[0_0_18px_var(--brand-gold)/40]"
              />
              <span className="text-lg">
                Sacuanjoche<span className="text-[var(--brand-gold)]">.dev</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Sede en Managua, operando para toda Centroamérica.
            </p>
          </div>
          <div className="md:col-span-2">
            <p
              className="text-2xl sm:text-3xl font-medium tracking-tight bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              “Las personas no compran propiedades, compran decisiones bien presentadas.”
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("Hola Sacuanjoche.dev, quiero hablar sobre mi propiedad.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-emerald)]/40 px-5 py-2.5 text-sm hover:bg-[var(--brand-emerald)]/10 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-[var(--brand-emerald)]" />
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
              <a
                href={mailtoLink(
                  "Quiero vender mi propiedad",
                  "Hola Sacuanjoche.dev,\n\nMe interesa publicar mi propiedad. ¿Cómo iniciamos?\n\nGracias.",
                )}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-gold)]/40 px-5 py-2.5 text-sm hover:bg-[var(--brand-gold)]/10 transition-all"
              >
                <Mail className="h-4 w-4 text-[var(--brand-gold)]" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 Sacuanjoche.dev — Todos los derechos reservados.</span>
          <span>Hecho con ♥ en Centroamérica.</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola Sacuanjoche.dev, quiero información para vender mi propiedad.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp a ${WHATSAPP_DISPLAY}`}
      className="group fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3 rounded-full pl-4 pr-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:scale-[1.04] hover:shadow-[0_0_40px_var(--brand-gold)] transition-all duration-300"
      style={{ backgroundImage: "var(--gradient-gold)" }}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-background/20 backdrop-blur">
        <span className="absolute inset-0 rounded-full bg-[var(--brand-emerald)]/40 animate-ping" />
        <MessageCircle className="relative h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

function VendeTusPropiedades() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Comparison />
        <Benefits />
        <Steps />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
