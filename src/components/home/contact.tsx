import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  FileText,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CONTACT, SOCIALS } from "@/lib/navigation";

const AVAILABILITY = [
  "Internships",
  "AI Projects",
  "Software Development",
  "Freelance",
  "Research Collaboration",
];

interface ContactCard {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
  copy?: string;
}

const CARDS: ContactCard[] = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    copy: CONTACT.email,
  },
  {
    icon: Phone,
    title: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s+/g, "")}`,
    copy: CONTACT.phone,
  },
  {
    icon: MapPin,
    title: "Location",
    value: CONTACT.location,
    copy: CONTACT.location,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "harsh-gosalia",
    href: SOCIALS.linkedin,
    external: true,
  },
  {
    icon: Github,
    title: "GitHub",
    value: "HarshGosalia05",
    href: SOCIALS.github,
    external: true,
  },
  {
    icon: FileText,
    title: "Resume",
    value: "View PDF",
    href: CONTACT.resume,
    external: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function ContactCardItem({ card, index }: { card: ContactCard; index: number }) {
  const [copied, setCopied] = useState(false);
  const Icon = card.icon;

  const handleCopy = async (e: React.MouseEvent) => {
    if (!card.copy) return;
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(card.copy);
      setCopied(true);
      toast.success(`${card.title} copied to clipboard`);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error("Couldn't copy — please try manually");
    }
  };

  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60 text-brand transition-colors duration-300 group-hover:border-brand/50">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {card.title}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-foreground">
          {card.value}
        </span>
      </span>
      {card.copy ? (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${card.title}`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-brand"
        >
          {copied ? <Check className="h-4 w-4 text-brand" /> : <Copy className="h-4 w-4" />}
        </button>
      ) : (
        card.external && (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        )
      )}
    </>
  );

  const className =
    "group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow";

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      custom={index}
    >
      {card.href ? (
        <a
          href={card.href}
          {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
          className={className}
        >
          {inner}
        </a>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </motion.div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
  required?: boolean;
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  onChange,
  textarea = false,
  required = true,
}: FieldProps) {
  const shared =
    "peer w-full rounded-xl border border-border bg-background/60 px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all duration-300 placeholder-transparent backdrop-blur focus:border-brand focus:ring-2 focus:ring-brand/25";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          placeholder={label}
          value={value}
          required={required}
          rows={5}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs font-medium text-muted-foreground transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const update = (key: keyof typeof form) => (v: string) =>
    setForm((prev) => ({ ...prev, [key]: v }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    console.log("1. VITE_WEB3FORMS_ACCESS_KEY returning a value?", !!accessKey);
    console.log("2. Key length:", accessKey ? accessKey.length : 0);

    const payload = {
      access_key: accessKey,
      ...form,
    };
    
    console.log("5. Sending as JSON. Content-Type: application/json");
    console.log("6. Included keys in payload:", Object.keys(payload));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.text();
      console.log("4. HTTP status code:", response.status);
      console.log("3. Response body:", responseBody);
      
      let jsonResponse;
      try {
        jsonResponse = JSON.parse(responseBody);
      } catch (e) {}

      if (!response.ok) {
        console.log("7. Exact reason Web3Forms returns failure:", jsonResponse?.message || "Unknown error (check response body)");
      } else {
        console.log("Form submission succeeded!");
      }

      if (response.ok) {
        setForm({ name: "", email: "", subject: "", message: "" });
        toast.success("Thank you! Your message has been sent successfully.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-16 overflow-hidden py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--brand) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs tracking-widest text-muted-foreground uppercase backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Contact
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am always interested in AI, Machine Learning, Software Engineering, Automation,
            Hackathons and exciting collaboration opportunities. Whether you want to discuss a
            project, internship, research, startup or full-time opportunity, feel free to reach out.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={1}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Available for new opportunities
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Reach out directly
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Prefer email or a quick call? Use any of the channels below — I usually respond
                within a day.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {AVAILABILITY.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CARDS.map((card, i) => (
                <ContactCardItem key={card.title} card={card} index={i} />
              ))}
            </div>
          </div>

          {/* RIGHT — Glass form */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={2}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card/50 p-6 shadow-card backdrop-blur-xl sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold">Send a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in the form and I&apos;ll get back to you shortly.
              </p>

              <div className="mt-6 space-y-4">
                <FloatingField
                  id="contact-name"
                  label="Full Name"
                  value={form.name}
                  onChange={update("name")}
                />
                <FloatingField
                  id="contact-email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                />
                <FloatingField
                  id="contact-subject"
                  label="Subject"
                  value={form.subject}
                  onChange={update("subject")}
                />
                <FloatingField
                  id="contact-message"
                  label="Message"
                  textarea
                  value={form.message}
                  onChange={update("message")}
                />
              </div>

              <Button type="submit" size="lg" disabled={sending} className="group mt-6 w-full">
                {sending ? "Sending..." : "Send Message"}
                <Send className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
