import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import aboutImage from "@/assets/about-texture.jpg";
import { SEO } from "@/components/SEO";

const values = [
  { title: "Transparência", desc: "Comunicação clara em todas as etapas, do projeto à entrega." },
  { title: "Excelência", desc: "Padrão elevado em materiais, processos e atendimento." },
  { title: "Inovação", desc: "Soluções construtivas inteligentes que agregam valor real." },
  { title: "Responsabilidade", desc: "Compromisso com o meio ambiente e com a comunidade local." },
];

const Sobre = () => (
  <>
    <SEO
      title="Sobre Nós"
      description="Conheça a Enki Ascend, nossa história, valores e compromisso com a qualidade."
      url="/sobre"
    />
    <Header />
    <main>
      {/* Hero */}
      <section className="pt-32 pb-12 section-padding bg-primary grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-enki-wider uppercase text-primary-foreground/50 mb-4">
              Quem somos
            </p>
            <h1 className="font-display text-4xl md:text-5xl uppercase tracking-enki-wide text-outline-light">
              Sobre a ENKI
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding enki-pattern">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <AnimatedSection>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImage}
                alt="Textura arquitetônica"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-body text-xs tracking-enki-wider uppercase text-muted-foreground mb-6">
              Manifesto
            </p>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-enki-wide leading-tight mb-8">
              Construir é um ato
              <br />
              <span className="text-outline">de consciência</span>
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                A ENKI nasce da união entre conhecimento técnico, visão estratégica e o desejo
                de construir com consciência. Cada empreendimento é pensado para valorizar o
                entorno, respeitar quem habita e entregar mais do que metros quadrados.
              </p>
              <p>
                Atuamos no Litoral Catarinense — uma das regiões com maior valorização
                imobiliária do Brasil — com projetos que equilibram sofisticação, funcionalidade
                e retorno sólido para investidores.
              </p>
              <p>
                Nosso nome carrega o legado de Enki, a divindade suméria do conhecimento e
                da criação. Assim como ele, acreditamos que construir é um ato de inteligência,
                sensibilidade e responsabilidade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-enki-wider uppercase text-muted-foreground mb-4">
              Valores
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-enki-wide mb-16">
              No que acreditamos
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <h3 className="font-display text-sm uppercase tracking-enki-wide mb-3">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Atuação */}
      <section className="section-padding bg-primary grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-body text-xs tracking-enki-wider uppercase text-primary-foreground/50 mb-4">
              Atuação
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-enki-wide text-primary-foreground mb-8">
              Litoral Catarinense
            </h2>
            <p className="font-body text-primary-foreground/60 max-w-lg mx-auto leading-relaxed">
              Balneário Camboriú, Itapema, Itajaí, Florianópolis e região.
              Escolhemos as melhores localizações para garantir valorização e qualidade de vida.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Sobre;
