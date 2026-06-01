"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Sobre", id: "about" },
  { label: "Serviços", id: "services" },
  { label: "Clientes", id: "clients" },
  { label: "Localização", id: "location" },
  { label: "Contato", id: "contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLinkClick = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 bg-primary shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Image
                src="/images/design-mode/brasaodelta.png"
                alt="Delta Consultoria em Tecnologia da Informação"
                width={140}
                height={56}
                className="h-14 w-auto"
                priority
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="cursor-pointer px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="https://facilidadesonline.ia.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                Utilidades
              </a>
              <Link
                href="/suporte"
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                Suporte
              </Link>
              <a
                href="https://wa.me/5573982176776"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-primary rounded-2xl shadow-2xl p-6 transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="cursor-pointer px-4 py-3 text-left text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}

            <a
              href="https://facilidadesonline.ia.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-left text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
            >
              Utilidades
            </a>
            <Link
              href="/suporte"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-left text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
            >
              Suporte
            </Link>
            <a
              href="https://wa.me/5573982176776"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-3 bg-accent text-white text-center font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
