import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarCircles from "@/components/PillarCircles";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import InvestSection from "@/components/InvestSection";
import { SEO } from "@/components/SEO";

const Index = () => (
  <>
    <SEO
      title="Início"
      description="Enki Ascend - Construindo o futuro com excelência e inovação no litoral catarinense."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Enki Ascend",
        "url": "https://enkicorp.com.br",
        "logo": "https://enkicorp.com.br/og-image.svg",
        "description": "Construindo o futuro com excelência e inovação no litoral catarinense.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Atlântica, 1500 — Sala 801",
          "addressLocality": "Balneário Camboriú",
          "addressRegion": "SC",
          "addressCountry": "BR"
        }
      }}
    />
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <PillarCircles />
      <FeaturedProjects />
      <ProcessSection />
      <InvestSection />
    </main>
    <Footer />
  </>
);

export default Index;
