import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, Phone } from 'lucide-react';

const steps = [
    {
        step: '01',
        title: 'Primeiro Contacto',
        description: 'Entre em contacto connosco para dar o primeiro passo rumo à sua regularização ou nacionalidade.',
        image: '/process/step-1.png',
    },
    {
        step: '02',
        title: 'Diagnóstico Detalhado',
        description: 'Analisamos as suas dificuldades e necessidades específicas para traçar a melhor estratégia jurídica.',
        image: '/process/step-2.png',
    },
    {
        step: '03',
        title: 'Execução Especializada',
        description: 'Com nossa experiência validada, atuamos com agilidade para resolver cada etapa do seu processo.',
        image: '/process/step-3.png',
    },
    {
        step: '04',
        title: 'Sucesso Garantido',
        description: 'O seu problema é resolvido com segurança jurídica, entregando a tranquilidade que procura para si e para a sua família.',
        image: '/process/step-4.png',
        highlight: true,
    },
];


export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 70%", "end 40%"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="como-funciona" className="relative bg-[#faf5ed] py-24 lg:py-32 overflow-hidden">
            {/* Background Details */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0A0E27]/5 rounded-full blur-[120px]" />
                
                {/* Noise Texture Overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
                    style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
                    }}
                ></div>
            </div>

            <div className="relative container mx-auto px-4 md:px-8 z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-3 justify-center mb-4">
                        <div className="w-8 h-px bg-[#D4AF37] opacity-60" />
                        <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold">
                            Fluxo de Atendimento
                        </span>
                        <div className="w-8 h-px bg-[#D4AF37] opacity-60" />
                    </div>
                    <h2 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-[#0A0E27] leading-tight">
                        Como funciona o nosso processo
                    </h2>
                </motion.div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Timeline Line (Desktop) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#0A0E27]/10 hidden md:block -translate-x-1/2">
                        <motion.div
                            style={{ scaleY, transformOrigin: 'top' }}
                            className="absolute top-0 left-0 w-full h-full bg-[#D4AF37]"
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-12 md:space-y-24">
                        {steps.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 items-start md:items-center",
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                )}
                            >
                                {/* Step Circle */}
                                <div className={cn(
                                    "absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center z-10 shadow-2xl transition-all duration-500 hidden md:flex",
                                    item.highlight
                                        ? "bg-[#D4AF37] text-black shadow-[#D4AF37]/40 scale-110"
                                        : "bg-[#faf5ed] border-2 border-[#D4AF37]/30 text-[#D4AF37]"
                                )}>
                                    {item.highlight ? (
                                        <Check className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
                                    ) : (
                                        <span className="font-garamond text-xl md:text-2xl font-bold">{item.step}</span>
                                    )}
                                </div>

                                {/* Card Content */}
                                <div className={cn(
                                    "w-full md:w-[calc(50%-4rem)]",
                                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                                )}>
                                    <div className={cn(
                                        "overflow-hidden rounded-[2rem] border transition-all duration-500 group",
                                        item.highlight 
                                            ? "bg-white border-[#D4AF37]/40 shadow-[0_10px_40px_rgba(212,175,55,0.15)]" 
                                            : "bg-white border-black/5 hover:border-[#D4AF37]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                                    )}>
                                        {/* Image Header */}
                                        <div className="relative h-48 md:h-56 overflow-hidden">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                                        </div>

                                        <div className="p-8">
                                            {/* Mobile step indicator */}
                                            <div className="flex items-center gap-3 md:hidden mb-4">
                                                <div className={cn(
                                                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold",
                                                    item.highlight ? "bg-[#D4AF37] text-black" : "bg-[#0A0E27]/5 text-[#D4AF37]"
                                                )}>
                                                    {item.highlight ? <Check className="w-5 h-5" /> : item.step}
                                                </div>
                                                <span className="text-[#D4AF37] text-xs tracking-widest uppercase font-bold">
                                                    Etapa {item.step}
                                                </span>
                                            </div>

                                            <h3 className={cn(
                                                "font-garamond text-2xl md:text-3xl mb-4 transition-colors group-hover:text-[#D4AF37]",
                                                "text-[#0A0E27]"
                                            )}>
                                                {item.title}
                                            </h3>

                                            <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                {/* Spacer for the other side on desktop */}
                                <div className="hidden md:block w-[calc(50%-4rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-32 text-center"
                >
                    <a
                        href="https://wa.me/351935267663"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-4 bg-[#D4AF37] hover:bg-[#C19A2E] text-black px-10 py-5 rounded-full font-bold text-base transition-all duration-300 shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1"
                    >
                        <span className="hidden md:inline">Quero iniciar o meu processo agora</span>
                        <span className="md:hidden">Entrar em contacto</span>
                        <Phone className="w-5 h-5 fill-current" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
