import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Me hospedei no Carnaval e adorei! Quartos com duas camas, ar condicionado ótimo e ambiente bem agradável. O café da manhã é excelente, com várias opções deliciosas. Funcionários muito atenciosos. Recomendo e voltarei mais vezes!",
    author: "Hóspede verificado",
  },
  {
    text: "Ótimo atendimento, funcionários acolhedores! O quarto estava limpo, equipado e confortável. Adoramos a hospedagem!!!",
    author: "Hóspede verificado",
  },
  {
    text: "Hotel excelente. Atendimento ótimo. Café da manhã muito bom com frutas frescas e sucos naturais tudo feito na hora. Quartos super lindos, com vistas maravilhosas. Super indico. Além de ficar perto de um dos mais procurados pontos turísticos da cidade.",
    author: "Hóspede verificado",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="label-caps text-gold mb-4">Depoimentos</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground">
            O que nossos hóspedes dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <Quote size={28} className="text-gold mb-4" />
              <p className="text-primary-foreground/90 font-body text-base leading-relaxed mb-6">
                {t.text}
              </p>
              <p className="label-caps text-gold/80">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
