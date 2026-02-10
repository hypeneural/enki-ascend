import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const Empreendimentos = () => {
  const [status, setStatus] = useState("Todos");
  const [tipo, setTipo] = useState("Todos");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (status === "Todos" || p.status === status) &&
          (tipo === "Todos" || p.tipologia === tipo)
      ),
    [status, tipo]
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 section-padding bg-primary grain-overlay">
          <div className="relative z-10 max-w-7xl mx-auto">
            <AnimatedSection>
              <p className="font-body text-xs tracking-enki-wider uppercase text-primary-foreground/50 mb-4">
                Portfólio
              </p>
              <h1 className="font-display text-4xl md:text-5xl uppercase tracking-enki-wide text-outline-light">
                Empreendimentos
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <FilterBar
              activeStatus={status}
              onStatusChange={setStatus}
              activeTipo={tipo}
              onTipoChange={setTipo}
            />

            {filtered.length === 0 ? (
              <p className="font-body text-muted-foreground text-center py-20">
                Nenhum empreendimento encontrado com esses filtros.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((p, i) => (
                  <AnimatedSection key={p.slug} delay={i * 0.05}>
                    <ProjectCard project={p} />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Empreendimentos;
