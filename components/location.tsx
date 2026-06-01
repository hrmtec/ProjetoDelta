import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua São José, 03 - São Caetano",
    subvalue: "Itabuna, BA - 45607-322",
  },
  {
    icon: Mail,
    label: "Email",
    value: "comercial@deltasistema.com.br",
    href: "mailto:comercial@deltasistema.com.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(73) 98217-6776",
    href: "tel:+5573982176776",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 8h às 18h",
    subvalue: "Sábado: 8h às 12h",
  },
]

export function Location() {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Nossa Localização
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venha nos visitar ou entre em contato conosco
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.4108721020831!2d-39.27619368920617!3d-14.807721371950726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x739aa54d2710739%3A0xc106786517440bd2!2sR.%20S%C3%A3o%20Jos%C3%A9%2C%2003%20-%20S%C3%A3o%20Caetano%2C%20Itabuna%20-%20BA%2C%2045607-322!5e0!3m2!1spt-BR!2sbr!4v1632236919641!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              title="Localização Delta Consultoria"
            />
          </div>

          {/* Contact Info */}
          <div id="contact" className="flex flex-col">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Entre em Contato
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <>
                          <p className="text-foreground font-medium">{info.value}</p>
                          {info.subvalue && (
                            <p className="text-muted-foreground text-sm">{info.subvalue}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5573982176776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20BD5A] transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={20} />
                Fale conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
