"use client"

import { Download, Monitor, Laptop, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const supportTools = [
  {
    name: "TeamViewer",
    description: "Ferramenta padrão para suporte remoto rápido e seguro.",
    icon: Monitor,
    link: "https://download.teamviewer.com/download/TeamViewerQS.exe",
    color: "bg-blue-500",
  },
  {
    name: "AnyDesk",
    description: "Alternativa leve para acesso remoto de alta performance.",
    icon: Laptop,
    link: "https://download.anydesk.com/AnyDesk.exe",
    color: "bg-red-500",
  },
  {
    name: "RustDesk",
    description: "Solução de acesso remoto de código aberto.",
    icon: Monitor,
    link: "https://rustdesk.com/download",
    color: "bg-orange-500",
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header with improved blue gradient and integrated logo */}
      <header className="bg-gradient-to-b from-[#003366] to-[#004d99] pt-8 pb-20 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors group px-4 py-2 hover:bg-white/5 rounded-full"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar para o Início</span>
          </Link>
          
          <div className="text-center">
            {/* Removed the white box and padded container */}
            <div className="inline-flex items-center justify-center mb-8">
               <Image
                src="/images/design-mode/brasaodelta.png"
                alt="Delta Logo"
                width={180}
                height={60}
                className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Central de Suporte
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Nossa equipe técnica utiliza as ferramentas mais seguras do mercado para realizar atendimentos remotos com a máxima agilidade.
            </p>
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 pb-20">
        <div className="grid gap-6">
          {supportTools.map((tool) => (
            <div 
              key={tool.name}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-8 hover:border-blue-200 transition-all group"
            >
              <div className={`w-20 h-20 rounded-2xl ${tool.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                <tool.icon className="text-white w-10 h-10" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{tool.name}</h2>
                <p className="text-slate-500 leading-relaxed text-lg">{tool.description}</p>
              </div>

              <a
                href={tool.link}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#003366] text-white font-bold rounded-2xl hover:bg-[#004d99] transition-all shadow-xl shadow-blue-900/10 active:scale-95"
              >
                <Download size={20} />
                Baixar agora
              </a>
            </div>
          ))}
        </div>

        {/* Support Info */}
        <div className="mt-16 bg-[#F0F7FF] border border-blue-100 rounded-[2.5rem] p-10 md:p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200/20 rounded-full -ml-12 -mb-12 transition-transform group-hover:scale-110" />
          
          <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-wider">Ainda precisa de ajuda?</h3>
          <p className="text-slate-600 mb-8 text-lg">
            Nossa equipe de suporte está pronta para auxiliar sua prefeitura de<br className="hidden md:block" /> <b>segunda a sexta, das 08:00 às 18:00.</b>
          </p>
          <a
            href="https://wa.me/5573982176776"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95 uppercase text-sm"
          >
            Falar pelo WhatsApp agora
          </a>
        </div>
      </section>

      {/* Footer Copy */}
      <footer className="py-12 text-center text-slate-400 text-sm border-t border-slate-200 bg-white">
        <p className="font-medium">&copy; {new Date().getFullYear()} Delta Consultoria em TI. Todos os direitos reservados.</p>
        <p className="mt-1">Tecnologia a serviço da transparência e gestão pública.</p>
      </footer>
    </main>
  )
}
