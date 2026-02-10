import AnimatedSection from "./AnimatedSection";
import { Search, PenTool, HardHat, Key } from "lucide-react";

const steps = [
  { icon: Search, title: "Prospecção", desc: "Análise de localização, viabilidade e potencial de valorização." },
  { icon: PenTool, title: "Projeto", desc: "Arquitetura autoral com foco em funcionalidade e estética." },
  { icon: HardHat, title: "Construção", desc: "Gestão rigorosa, materiais de primeira e cronograma transparente." },
  { icon: Key, title: "Entrega", desc: "Acabamento impecável e suporte completo ao proprietário." },
];

const ProcessSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="font-body text-xs tracking-enki-wider uppercase text-muted-foreground mb-4">
          Processo
        </p>
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-enki-wide mb-16">
          Como trabalhamos
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display text-xs text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon size={20} className="text-foreground/60 group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display text-sm uppercase tracking-enki-wide mb-3">
                {s.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
