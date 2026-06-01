import { Building2, Users, Award, Monitor } from "lucide-react"

const stats = [
  { icon: Building2, value: "100+", label: "Orgãos Atendidos" },
  { icon: Users, value: "1000+", label: "Usuários Ativos" },
  { icon: Award, value: "10+", label: "Anos de Experiência" },
  { icon: Monitor, value: "1000+", label: "Sistemas Instalados" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Sobre a Delta Consultoria
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformando a gestão pública com tecnologia de ponta
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <span className="text-foreground font-semibold">Delta Consultoria em TI</span> é uma empresa
              especializada no desenvolvimento e implementação de sistemas para órgãos públicos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com vasta experiência no mercado, temos orgulho de atender diversos clientes na Bahia
              e em todo o Brasil, oferecendo soluções que modernizam e otimizam a gestão pública.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é proporcionar ferramentas tecnológicas que facilitem o dia a dia
              dos servidores públicos, garantindo eficiência, transparência e conformidade legal.
            </p>
            <a
              href="https://wa.me/5573982176776"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 mt-4"
            >
              Saiba Mais
            </a>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="text-6xl font-bold mb-2">10+</div>
                  <div className="text-lg opacity-90">Anos transformando</div>
                  <div className="text-lg opacity-90">a gestão pública</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-accent/20 rounded-2xl" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
