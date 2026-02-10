import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    title: "Conceito",
    description: "Projetos com identidade, que nascem de um olhar atento ao contexto e ao futuro.",
  },
  {
    title: "Design",
    description: "Arquitetura autoral, materiais nobres e espaços que dialogam com quem os habita.",
  },
  {
    title: "Segurança",
    description: "Estrutura jurídica sólida, transparência em cada etapa e gestão profissional.",
  },
  {
    title: "Valorização",
    description: "Escolha de localização, tipologia e acabamentos que garantem retorno consistente.",
  },
];

const PillarCircles = () => (
  <section className="section-padding bg-primary grain-overlay">
    <div className="relative z-10 max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-body text-xs tracking-enki-wider uppercase text-primary-foreground/50 mb-4">
          Nossos Pilares
        </p>
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-enki-wide text-primary-foreground mb-16">
          O que nos define
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {pillars.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Circle */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-primary-foreground/30 flex items-center justify-center mb-6 group-hover:border-primary-foreground/80 transition-colors duration-500">
                <span className="font-display text-xs md:text-sm tracking-enki-wider uppercase text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                  {p.title}
                </span>
              </div>

              <p className="font-body text-xs md:text-sm text-primary-foreground/50 leading-relaxed max-w-[180px] group-hover:text-primary-foreground/70 transition-colors">
                {p.description}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PillarCircles;
