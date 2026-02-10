export interface Project {
  slug: string;
  nome: string;
  status: "Lançamento" | "Em obras" | "Entregue";
  cidade: string;
  bairro: string;
  lat: number;
  lng: number;
  resumo: string;
  highlights: string[];
  imagens: string[];
  tipologia: string;
}

export const projects: Project[] = [
  {
    slug: "residencial-horizon",
    nome: "Horizon Residence",
    status: "Lançamento",
    cidade: "Balneário Camboriú",
    bairro: "Barra Sul",
    lat: -26.9944,
    lng: -48.6352,
    resumo: "Apartamentos com vista panorâmica para o mar, acabamentos de alto padrão e localização privilegiada na Barra Sul.",
    highlights: ["3 quartos", "Vista mar", "2 vagas", "Lazer completo"],
    imagens: ["/project-1.jpg"],
    tipologia: "3Q",
  },
  {
    slug: "edifício-atlas",
    nome: "Atlas Tower",
    status: "Em obras",
    cidade: "Itapema",
    bairro: "Meia Praia",
    lat: -27.0906,
    lng: -48.6120,
    resumo: "Torre residencial com design contemporâneo, integrando natureza e sofisticação à beira-mar de Meia Praia.",
    highlights: ["2–3 quartos", "Próximo ao mar", "Rooftop", "Coworking"],
    imagens: ["/project-2.jpg"],
    tipologia: "2Q",
  },
  {
    slug: "vila-element",
    nome: "Element Villas",
    status: "Entregue",
    cidade: "Florianópolis",
    bairro: "Jurerê Internacional",
    lat: -27.4400,
    lng: -48.4900,
    resumo: "Casas em condomínio fechado com arquitetura autoral, piscina privativa e acesso direto à praia.",
    highlights: ["4 suítes", "Piscina privativa", "Condomínio fechado"],
    imagens: ["/project-3.jpg"],
    tipologia: "3Q",
  },
  {
    slug: "residencial-pulse",
    nome: "Pulse Studios",
    status: "Lançamento",
    cidade: "Balneário Camboriú",
    bairro: "Centro",
    lat: -26.9910,
    lng: -48.6350,
    resumo: "Studios inteligentes para investimento, com gestão hoteleira e localização central.",
    highlights: ["Studio", "Gestão hoteleira", "Alto retorno", "Mobiliado"],
    imagens: ["/project-4.jpg"],
    tipologia: "Studio",
  },
  {
    slug: "torre-zenith",
    nome: "Zenith Tower",
    status: "Em obras",
    cidade: "Itajaí",
    bairro: "Praia Brava",
    lat: -26.9100,
    lng: -48.6200,
    resumo: "Empreendimento de alto padrão com unidades amplas e infraestrutura completa de lazer frente ao mar.",
    highlights: ["3–4 quartos", "Frente mar", "4 vagas", "Spa"],
    imagens: ["/project-1.jpg"],
    tipologia: "3Q",
  },
  {
    slug: "residencial-nova",
    nome: "Nova Residence",
    status: "Entregue",
    cidade: "Florianópolis",
    bairro: "Campeche",
    lat: -27.6700,
    lng: -48.4700,
    resumo: "Residencial boutique com apenas 12 unidades, jardim tropical e acabamentos artesanais.",
    highlights: ["2 quartos", "Boutique", "Jardim privativo"],
    imagens: ["/project-2.jpg"],
    tipologia: "2Q",
  },
];
