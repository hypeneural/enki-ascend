import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 12, suffix: "+", label: "Anos de mercado" },
  { value: 30, suffix: "+", label: "Empreendimentos" },
  { value: 2500, suffix: "+", label: "Unidades entregues" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl">
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const InvestSection = () => (
  <section className="section-padding bg-primary grain-overlay">
    <div className="relative z-10 max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-body text-xs tracking-enki-wider uppercase text-primary-foreground/50 mb-4">
          Números
        </p>
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-enki-wide text-primary-foreground mb-16">
          Investir com segurança
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <motion.div className="text-center md:text-left">
              <div className="text-primary-foreground mb-2">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="font-body text-xs tracking-enki-wide uppercase text-primary-foreground/50">
                {s.label}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default InvestSection;
