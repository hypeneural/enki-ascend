import { Link } from "react-router-dom";
import EnkiIcon from "./EnkiIcon";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <EnkiIcon size={24} color="hsl(var(--primary-foreground))" />
            <span className="font-display text-lg tracking-enki-wide uppercase font-bold">
              ENKI
            </span>
          </div>
          <p className="font-body text-sm leading-relaxed opacity-70 max-w-sm">
            Incorporadora focada em empreendimentos de alto padrão no Litoral Catarinense.
            Construímos com consciência, design e visão de futuro.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-xs tracking-enki-wider uppercase mb-4 opacity-50">
            Navegação
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Empreendimentos", path: "/empreendimentos" },
              { label: "Sobre a ENKI", path: "/sobre" },
              { label: "Contato", path: "/contato" },
            ].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-xs tracking-enki-wider uppercase mb-4 opacity-50">
            Contato
          </h4>
          <div className="flex flex-col gap-3 font-body text-sm opacity-70">
            <span>contato@enkiincorporadora.com.br</span>
            <span>(47) 9 9999-0000</span>
            <span>Balneário Camboriú — SC</span>
          </div>
        </div>
      </div>

      <div className="hairline mt-12 mb-6 opacity-20" />
      <p className="font-body text-xs opacity-40 text-center">
        © {new Date().getFullYear()} ENKI Incorporadora. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
