import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const imageMap: Record<string, string> = {
  "/project-1.jpg": project1,
  "/project-2.jpg": project2,
  "/project-3.jpg": project3,
  "/project-4.jpg": project4,
};

const statusColors: Record<string, string> = {
  "Lançamento": "bg-primary text-primary-foreground",
  "Em obras": "bg-accent text-accent-foreground",
  "Entregue": "bg-muted text-foreground",
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const imgSrc = imageMap[project.imagens[0]] || project1;

  return (
    <Link to={`/empreendimentos/${project.slug}`}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] mb-4">
          <img
            src={imgSrc}
            alt={project.nome}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />

          {/* Status Badge */}
          <span
            className={`absolute top-4 left-4 px-3 py-1 font-body text-[10px] tracking-enki-wide uppercase ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-display text-lg uppercase tracking-enki-wide mb-1">
            {project.nome}
          </h3>
          <p className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-3">
            {project.bairro}, {project.cidade}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.highlights.slice(0, 3).map((h) => (
              <span
                key={h}
                className="font-body text-[10px] tracking-wide uppercase px-2 py-1 border border-border text-muted-foreground"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProjectCard;
