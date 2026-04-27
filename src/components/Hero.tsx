import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5588996556175?text=Olá! Gostaria de fazer uma reserva no Serra Village.";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Vista aérea do Serra Village Hotel em Ubajara, cercado pela Serra da Ibiapaba"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
      </div>

      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="label-caps text-gold mb-6 animate-fade-in-up">
            Hotel em Ubajara · Serra da Ibiapaba
          </p>
          <h1
            className="font-display text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              animationDelay: "0.1s",
              opacity: 0,
            }}
          >
            Sinta o frescor da Serra, viva o conforto do Village.
          </h1>
          <p
            className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-lg font-body animate-fade-in-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Hospedagem com café da manhã incluso, ar-condicionado e varanda
            privativa. Próximo ao Parque Nacional de Ubajara.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-8 py-4 rounded-xl font-body font-medium text-base transition-all duration-300 hover:brightness-110 hover:shadow-lg active:scale-95"
            >
              <MessageCircle size={20} />
              Reservar via WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-body font-medium text-base border border-primary-foreground/30 text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
            >
              Conheça o Hotel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
