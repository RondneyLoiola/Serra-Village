import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5588996556175?text=Olá! Gostaria de fazer uma reserva no Serra Village.";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="label-caps text-gold mb-4">Contato</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">
            Como chegar e entrar em contato
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg text-primary">Endereço</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Rua Valdemar Aristides dos Santos II Dep. Grijalva F. da
                  Costa, Ubajara - CE, 62350-000
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg text-primary">Telefone</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  (88) 9 9655-6175
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg text-primary">Check-in / Check-out</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Check-in: 14h · Check-out: 12h
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-body font-medium transition-all duration-300 hover:brightness-110 hover:shadow-lg active:scale-95"
            >
              <MessageCircle size={20} />
              Fale Conosco via WhatsApp
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden card-shadow min-h-[360px]">
            <iframe
              title="Localização Serra Village Hotel Ubajara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.5!2d-40.9213!3d-3.8544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTEnMTUuOCJTIDQwwrA1NScxNi43Ilc!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360, filter: "saturate(0.3)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
