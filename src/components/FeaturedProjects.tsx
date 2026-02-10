import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-body text-xs tracking-enki-wider uppercase text-muted-foreground mb-4">
                Empreendimentos
              </p>
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-enki-wide">
                Em destaque
              </h2>
            </div>
            <Link
              to="/empreendimentos"
              className="hidden md:inline-flex font-body text-sm tracking-enki-wide uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-1"
            >
              Ver todos
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 md:hidden text-center">
          <Link
            to="/empreendimentos"
            className="inline-flex font-body text-sm tracking-enki-wide uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-1"
          >
            Ver todos os empreendimentos
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedProjects;
