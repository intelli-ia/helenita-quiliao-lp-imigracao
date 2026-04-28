import { motion } from "framer-motion"

export function Map() {
    return (
        <section className="bg-[#faf5ed] py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4 mb-6"
                    >
                        <div className="w-12 h-px bg-[#D4AF37]/50" />
                        <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase font-bold">
                            Localização
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-garamond text-4xl md:text-5xl lg:text-6xl text-[#0A0E27] leading-tight mb-6"
                    >
                        Onde nos <span className="text-[#D4AF37] italic">encontrar</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#4A5568] text-lg md:text-xl font-light"
                    >
                        Visite o nosso escritório no coração de Lisboa. Estamos prontos para o receber e ajudar com o seu processo.
                    </motion.p>
                </div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group"
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6252.678542255536!2d-9.10308684723431!3d38.769903376047495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19319b25f1845d%3A0x18fd6f9c1df8561a!2sDra.%20Helenita%20Quili%C3%A3o%20-%20Advogados%20em%20Lisboa!5e0!3m2!1spt-BR!2sbr!4v1777410398209!5m2!1spt-BR!2sbr" 
                        className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    
                    {/* Decorative Overlay for a premium look */}
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
                </motion.div>
            </div>
        </section>
    )
}
