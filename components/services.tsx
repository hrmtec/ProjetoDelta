"use client"

import { useEffect, useRef, useState } from "react"
import { Calculator, Receipt, Users, FileText, Gavel, FileSignature, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const services = [
  {
    title: "Contabilidade",
    description: "Sistema completo de contabilidade pública com geração de relatórios, balancetes e prestação de contas em conformidade com a legislação vigente.",
    icon: Calculator,
    color: "from-blue-500 to-blue-600",
    features: [
      "Geração automática de balancetes mensais",
      "Integração total com o Tribunal de Contas (TCE)",
      "Controle orçamentário e financeiro rigoroso",
      "Lançamentos contábeis automatizados por eventos",
      "Gestão de empenhos, liquidações e pagamentos",
      "Relatórios de transparência em tempo real"
    ]
  },
  {
    title: "Tributário",
    description: "Gestão eficiente de tributos municipais, arrecadação, fiscalização e controle de inadimplência com emissão de guias e certidões.",
    icon: Receipt,
    color: "from-emerald-500 to-emerald-600",
    features: [
      "Emissão de IPTU, ISS e taxas diversas",
      "Moderno Cadastro Imobiliário Georreferenciado",
      "Controle automático de Dívida Ativa",
      "Portal do Contribuinte para serviços online",
      "Emissão de Nota Fiscal de Serviços Eletrônica (NFS-e)",
      "Módulo de fiscalização e inteligência fiscal"
    ]
  },
  {
    title: "Folha de Pagamento",
    description: "Processamento completo de folha de pagamento, férias, rescisões e encargos sociais com integração contábil automática.",
    icon: Users,
    color: "from-amber-500 to-amber-600",
    features: [
      "Envio simplificado de eventos para o e-Social",
      "Cálculo automatizado de encargos e benefícios",
      "Portal do Servidor para consulta de holerites",
      "Gestão completa do histórico funcional",
      "Controle de férias, licenças e afastamentos",
      "Geração de arquivos para pagamentos bancários"
    ]
  },
  {
    title: "Protocolo",
    description: "Gestão digital de documentos e processos administrativos com rastreamento completo e assinatura eletrônica.",
    icon: FileText,
    color: "from-indigo-500 to-indigo-600",
    features: [
      "Eliminação do papel com trâmites 100% digitais",
      "Assinatura eletrônica com validade jurídica",
      "Rastreamento de processos em tempo real",
      "Validação de documentos via QR Code",
      "Fluxogramas de trabalho personalizáveis",
      "Arquivamento digital seguro e organizado"
    ]
  },
  {
    title: "Licitação",
    description: "Controle completo de processos licitatórios, desde a requisição até a homologação, em conformidade com a Nova Lei de Licitações.",
    icon: Gavel,
    color: "from-rose-500 to-rose-600",
    features: [
      "Total conformidade com a Lei 14.133/2021",
      "Integração com o Portal Nacional de Contratações Públicas",
      "Gestão de Atas de Registro de Preços",
      "Módulo especializado para Dispensa Eletrônica",
      "Elaboração automática de editais e termos",
      "Controle de prazos e publicações legais"
    ]
  },
  {
    title: "Contratos",
    description: "Gestão e acompanhamento de contratos administrativos, aditivos, vigências e medições com alertas automáticos.",
    icon: FileSignature,
    color: "from-cyan-500 to-cyan-600",
    features: [
      "Acompanhamento rigoroso de medições e execuções",
      "Gestão simplificada de aditivos e reajustes",
      "Alertas automáticos de vencimento e renovação",
      "Controle centralizado de garantias contratuais",
      "Histórico completo de toda a vida do contrato",
      "Integração direta com o sistema financeiro"
    ]
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (selectedService) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleCards, selectedService])

  const handleBack = () => {
    setSelectedService(null)
    window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-24 bg-background min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!selectedService ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                  Nossas Soluções
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Sistemas Especializados
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Soluções completas desenvolvidas especificamente para atender as necessidades do setor público
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    className={`group bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-500 ${
                      visibleCards.includes(index) 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Link */}
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                    >
                      Saiba mais
                      <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-16">
                <a
                  href="https://wa.me/5573982176776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg"
                >
                  Solicitar Demonstração
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Voltar aos serviços
              </button>

              <div className="bg-card rounded-3xl p-8 sm:p-12 shadow-2xl border border-border">
                <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${selectedService.color} shadow-lg`}>
                    <selectedService.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                      {selectedService.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-background/50 rounded-xl border border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground/90 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/5573982176776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg"
                  >
                    Falar com Especialista
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
