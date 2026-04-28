import { Hero } from "@/components/sections/hero"
import { Pitch } from "@/components/sections/pitch"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import { Testimonials } from "@/components/sections/testimonials"
import { About } from "@/components/sections/about"
import { Map } from "@/components/sections/map"

export function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Pitch />
      <Process />
      <Testimonials />
      <About />
      <CTA />
      <Map />
    </main>
  )
}
