import { motion } from "framer-motion"
import { MapPin, Globe, Award, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
    return (
        <section id="sobre" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-6xl mx-auto">
                    
                    {/* Image Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-sm w-full"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl z-10">
                            <img 
                                src="/helenita-about.png" 
                                alt="Helenita Quilião"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0" />
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#0A0E27]/5 rounded-full blur-2xl -z-0" />
                        


                        {/* CTA Button below photo */}
                        <div className="mt-10 relative z-10">
                            <a 
                                href="https://wa.me/351935267663" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block group"
                            >
                                <Button className="w-full bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-bold py-7 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.5)] hover:-translate-y-1">
                                    <Phone className="w-5 h-5 fill-current" />
                                    Entre em contacto
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8 max-w-xl w-full"
                    >
                        <div>
                            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4 block">Sobre</span>
                            <h2 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-[#0A0E27] leading-tight mb-8">
                                Helenita Quilião
                            </h2>
                            <div className="space-y-6 text-[#4A5568] text-lg leading-relaxed font-light text-justify">
                                <p>
                                    Advogada com experiência (cédula profissional n.º 63.496E), dedicada à representação de clientes de forma personalizada e ajustada a cada necessidade. Com know-how internacional e experiência com clientes em mais de 10 países - incluindo Portugal, Estados Unidos, Canadá, Reino Unido, Dubai, Angola, Espanha, Suíça, Bélgica, França e Brasil (OAB/RS 111.310) -, conta com a competência de uma equipa qualificada que estará ao seu lado em todas as etapas.
                                </p>
                                <p>
                                    Seja por videochamada ou presencialmente, na nossa sede em Lisboa, terá a confiança de poder contar com apoio em processos nas áreas de Direito da Imigração, Nacionalidade portuguesa e Vistos para Portugal, assegurando ainda representação processual junto de tribunais e entidades públicas, bem como acompanhamento na AIMA, diligências, Conservatórias, esquadras e aeroportos, além de orientação jurídica especializada.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-black/5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#faf5ed] flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0A0E27]">Sede em Lisboa</h4>
                                    <p className="text-sm text-[#4A5568]">Atendimento presencial e online</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#faf5ed] flex items-center justify-center shrink-0">
                                    <Globe className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0A0E27]">Alcance Global</h4>
                                    <p className="text-sm text-[#4A5568]">Suporte internacional especializado</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
