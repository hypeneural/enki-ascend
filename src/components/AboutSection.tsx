import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section className="section-padding enki-pattern">
    <div className="relative z-10 max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-body text-xs tracking-enki-wider uppercase text-muted-foreground mb-4">
          Sobre a ENKI
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-enki-wide leading-tight">
            Construir
            <br />
            <span className="text-outline">com consciência</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
            A ENKI nasce da união entre conhecimento técnico, visão estratégica e o desejo
            de construir com consciência. Cada empreendimento é pensado para valorizar
            o entorno, respeitar quem habita e entregar mais do que metros quadrados —
            entregar qualidade de vida.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mt-6">
            Atuamos no Litoral Catarinense com projetos que equilibram sofisticação,
            funcionalidade e retorno sólido para investidores.
          </p>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
