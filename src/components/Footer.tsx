import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-2xl mb-3">Serra Village</p>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Hotel em Ubajara, Ceará. Conforto e natureza na Serra da Ibiapaba.
            </p>
          </div>
          <div>
            <p className="label-caps text-gold mb-4">Links</p>
            <div className="space-y-2">
              {["Início", "Serviços", "Sobre", "Depoimentos", "Contato"].map(
                (l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="block text-sm font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {l}
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <p className="label-caps text-gold mb-4">Redes Sociais</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/serravillagehotel/"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/serravillagehotel"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-accent-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:serravillagehotel@hotmail.com"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-gold hover:text-accent-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/40 font-body text-xs">
            © {new Date().getFullYear()} Serra Village Hotel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
