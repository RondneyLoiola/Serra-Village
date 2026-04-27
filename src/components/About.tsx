import Imagem from '../assets/cama.png'

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-caps text-gold mb-4">Sobre o Hotel</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
              Onde o conforto encontra o clima da Serra
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                O Serra Village é mais do que uma hospedagem — é uma experiência
                completa na Serra da Ibiapaba. Localizado em Ubajara, Ceará,
                nosso hotel oferece o equilíbrio perfeito entre conforto moderno
                e a tranquilidade das montanhas.
              </p>
              <p>
                A poucos minutos do Parque Nacional de Ubajara e dos principais
                pontos turísticos da região, somos a base ideal para explorar
                tudo que a Serra tem a oferecer. Quartos espaçosos, café da
                manhã regional e uma equipe dedicada ao seu bem-estar.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-display text-4xl text-primary">100+</p>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  Avaliações positivas
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">4.8</p>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  Nota no Google
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow bg-surface flex items-center justify-center">
              <div className="w-full h-full text-center">
                <img className="w-full h-full" src={Imagem} alt="serra-village.alt" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
