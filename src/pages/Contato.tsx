import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Clock, Mail, Phone } from "lucide-react";

const Contato = () => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="pt-32 pb-12 section-padding bg-primary grain-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-enki-wider uppercase text-primary-foreground/50 mb-4">
              Contato
            </p>
            <h1 className="font-display text-4xl md:text-5xl uppercase tracking-enki-wide text-outline-light">
              Fale com a ENKI
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection>
            <p className="font-body text-xs tracking-enki-wider uppercase text-muted-foreground mb-6">
              Formulário
            </p>
            <LeadForm />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="font-body text-xs tracking-enki-wider uppercase text-muted-foreground mb-6">
              Informações
            </p>
            <div className="space-y-8">
              {[
                { icon: MapPin, label: "Endereço", value: "Av. Atlântica, 1500 — Sala 801\nBalneário Camboriú, SC" },
                { icon: Clock, label: "Horário", value: "Seg a Sex — 9h às 18h\nSáb — 9h às 13h" },
                { icon: Mail, label: "E-mail", value: "contato@enkiincorporadora.com.br" },
                { icon: Phone, label: "Telefone", value: "(47) 9 9999-0000" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <item.icon size={18} className="text-muted-foreground mt-1 shrink-0" />
                  <div>
                    <p className="font-body text-xs tracking-enki-wide uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-foreground whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/5547999990000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm tracking-enki-wide uppercase hover:bg-primary/90 transition-colors mt-4"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contato;
