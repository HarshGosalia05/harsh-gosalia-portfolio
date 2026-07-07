import { motion } from "motion/react";
import { reveal, inViewClose } from "@/lib/motion";

const STATS = [
  { value: "18+", label: "Projects" },
  { value: "20+", label: "Certificates" },
  { value: "2+", label: "Internships" },
  { value: "9.1", label: "CGPA" },
  { value: "SIH '25", label: "Finalist" },
];

export function Stats() {
  return (
    <section className="relative">
      {/* Seamless gradient bridge fading the hero into the stats — no hard divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-background"
      />

      <div className="mx-auto w-full max-w-[1280px] px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="show"
              viewport={inViewClose}
              variants={reveal}
              custom={i}
              className="group flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card/40 p-6 text-center backdrop-blur transition-[transform,box-shadow,border-color] duration-300 will-change-transform hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-glow"
            >
              <p className="font-display text-3xl font-bold text-gradient-brand sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
