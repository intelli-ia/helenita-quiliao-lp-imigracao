import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <section id="contacto" className="relative py-24 lg:py-32 bg-[#0A0E27] overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover blur-[6px] opacity-80"
                >
                    <source src="/202604241316.webm" type="video/webm" />
                </video>
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-[#0A0E27]/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#0A0E27]/20 to-[#0A0E27]" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-6 block">
                            Estamos prontos para o ajudar
                        </span>
                        
                        <h2 className="font-garamond text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
                            Dê o primeiro passo para a sua nova vida em Portugal
                        </h2>
                        
                        <p className="text-white/80 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                            A nossa equipa está preparada para assegurar que o seu processo de residência, visto ou nacionalidade decorra com total segurança jurídica e agilidade.
                        </p>

                        <div className="flex justify-center">
                            <a 
                                href="https://wa.me/351935267663" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-bold text-lg px-10 py-8 h-auto rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.5)] hover:-translate-y-1">
                                    <Phone className="w-6 h-6 fill-current" />
                                    Entrar em contacto agora
                                </Button>
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}

