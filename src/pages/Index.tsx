import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarCircles from "@/components/PillarCircles";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import InvestSection from "@/components/InvestSection";

const Index = () => (
  <>
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
