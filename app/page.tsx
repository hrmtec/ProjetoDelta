import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ChatWidget } from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Location />
      <Footer />
      <ChatWidget />
    </main>
  )
}
