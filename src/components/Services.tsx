import {
  Coffee,
  Wind,
  ShowerHead,
  Refrigerator,
  Fence,
  Thermometer,
} from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Café da Manhã",
    description: "Incluso em todas as diárias com produtos regionais frescos.",
  },
  {
    icon: Wind,
    title: "Ar Condicionado",
    description: "Todos os quartos climatizados para seu conforto total.",
  },
  {
    icon: ShowerHead,
    title: "Ducha Elétrica",
    description: "Banho quente disponível a qualquer hora do dia.",
  },
  {
    icon: Refrigerator,
    title: "Frigobar",
    description: "Minibar abastecido com bebidas e snacks selecionados.",
  },
  {
    icon: Fence,
    title: "Varanda Privativa",
    description: "Espaço reservado com vista para a natureza da Serra.",
  },
  {
    icon: Thermometer,
    title: "Clima Agradável",
    description: "Temperatura amena o ano todo na Serra da Ibiapaba.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="label-caps text-gold mb-4">Nossos Serviços</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">
            Tudo que você precisa para uma estadia perfeita
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-background rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-accent-foreground transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="mt-6 text-xl font-display text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
