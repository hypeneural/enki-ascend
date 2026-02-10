import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => (
  <section className="relative h-screen w-full overflow-hidden grain-overlay">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Arquitetura moderna"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-primary/70" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-body text-xs tracking-enki-wider uppercase text-primary-foreground mb-4"
      >
        Incorporadora — Litoral Catarinense
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-outline-light font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-enki-wide leading-[0.95] mb-8"
      >
        Futuro
        <br />
        Humano
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="font-body text-primary-foreground/70 text-base md:text-lg max-w-md mb-10 leading-relaxed"
      >
        Empreendimentos que conectam design, tecnologia e consciência construtiva.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/empreendimentos"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-primary-foreground text-primary font-body text-sm tracking-enki-wide uppercase hover:bg-primary-foreground/90 transition-colors"
        >
          Ver empreendimentos
        </Link>
        <Link
          to="/contato"
          className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/40 text-primary-foreground font-body text-sm tracking-enki-wide uppercase hover:border-primary-foreground/80 transition-colors"
        >
          Falar com a ENKI
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
