"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "Sobre", id: "about" },
  { label: "Serviços", id: "services" },
  { label: "Clientes", id: "clients" },
  { label: "Localização", id: "location" },
  { label: "Contato", id: "contact" },
  { label: "Suporte", href: "/suporte" },
]

const services = [
  "Contabilidade",
  "Tributário",
  "Folha de Pagamento",
  "Protocolo",
  "Licitação",
  "Contratos",
]

export function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLinkClick = (id?: string, href?: string) => {
    if (href) {
      router.push(href)
      return
    }

    if (id) {
      if (pathname !== "/") {
        router.push(`/#${id}`)
      } else {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a 
              href="https://atendimentodelta.ia.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mb-6 transition-transform hover:scale-105"
            >
              <Image
                src="/images/design-mode/brasaodelta.png"
                alt="Delta Consultoria"
                width={140}
                height={56}
                className="h-14 w-auto"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-white/70 leading-relaxed mb-6">
              Soluções completas em sistemas para o setor público, com foco em qualidade, 
              inovação e excelência no atendimento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.id, link.href)}
                    className="cursor-pointer text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  Rua São José, 03 - São Caetano<br />
                  Itabuna, BA - 45607-322
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:comercial@deltasistema.com.br"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  comercial@deltasistema.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+5573982176776"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  (73) 98217-6776
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Delta Consultoria em TI. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <ArrowUp size={16} />
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
