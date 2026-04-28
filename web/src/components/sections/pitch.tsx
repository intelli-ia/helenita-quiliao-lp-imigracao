import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Pitch() {
    const solutions = [
        {
            title: "Pedidos de Residência",
            description: "Pedidos de residência, ações judiciais, notificações de indeferimento e de saída voluntária, agendamentos AIMA, pedidos de nacionalidade portuguesa e vistos para Portugal.",
            image: "/solutions/residence.png",
            delay: 0.1
        },
        {
            title: "Nacionalidade Portuguesa",
            description: "Assessoria para todos os tipos de nacionalidade, organização de documentos, pedido a Conservatória e acompanhamento até o final do processo.",
            image: "/solutions/nationality.png",
            delay: 0.2
        },
        {
            title: "Vistos para Portugal",
            description: "Assessoria para todos os tipos de vistos para Portugal. Visto D7, D1, Golden Visa, Nómada Digital, procura de trabalho, estudos, trabalho, reagrupamento familiar, entre outros.",
            image: "/solutions/visa.png",
            delay: 0.3
        }
    ]

    return (
        <section id="pitch" className="relative bg-[#0A0E27] pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden !border-0">




            <div className="relative container mx-auto px-4 md:px-8 z-10">

                {/* Section Header */}
                <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-px bg-[#D4AF37]/50" />
                        <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase font-bold">
                            Especialização e Rigor
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-garamond text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
                    >
                        Somos especialistas em <br />
                        <span className="text-[#D4AF37] italic">Direito Migratório</span> <br className="md:hidden" />
                        <span className="text-white/40 font-light mx-4">&</span> <br className="md:hidden" />
                        <span className="text-[#D4AF37] italic">Nacionalidade Portuguesa</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Soluções jurídicas personalizadas para quem procura segurança e agilidade no seu processo de imigração.
                    </motion.p>
                </div>


                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="group flex flex-col h-full text-center"
                        >
                            {/* Headline above the photo */}
                            <h3 className="font-garamond text-2xl lg:text-3xl text-white mb-6 leading-tight group-hover:text-[#D4AF37] transition-colors duration-500 min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center">
                                {item.title}
                            </h3>


                            {/* Image with overlaid description */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Description and CTA inside the image - Centered */}
                                <div className="absolute inset-0 p-6 lg:p-10 flex flex-col items-center justify-end bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/90 via-[#0A0E27]/60 to-transparent">
                                    <p className="text-white text-base lg:text-lg leading-relaxed font-medium drop-shadow-lg line-clamp-6 mb-6">
                                        {item.description}
                                    </p>

                                    <a href="tel:+351935267663" className="w-auto">
                                        <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-bold text-sm px-6 h-11 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-xl border-none">
                                            Saiba mais
                                            <Phone className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300 fill-current" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    )
}
