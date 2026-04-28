import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full flex items-center bg-[#0A0E27] overflow-hidden pt-8 lg:pt-0 !border-0 -mb-px">
            {/* Background Pattern - Subtle Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(255,255,255,0.2) 1.5px, transparent 1.5px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Decorative Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(212,175,55,0.03)_0%,transparent_50%)]" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-16 items-start pt-4 lg:pt-32">
                    
                    {/* 1. Logo - Top on mobile, Top Left on desktop */}
                    <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 flex justify-center lg:justify-start order-1">
                        <div className="w-44 md:w-40">
                            <img
                                src="/logo-helenita-quiliao-400.webp"
                                alt="Helenita Quilião Logo"
                                className="w-full h-auto object-contain brightness-0 invert"
                            />
                        </div>
                    </div>

                    {/* 2. Right Column - Images (Between logo and text on mobile, Right side on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 relative flex justify-center lg:justify-end order-2 lg:order-none lg:-mt-20"
                    >
                        {/* Main Image Container with offset layout like model */}
                        <div className="relative w-full max-w-[620px]">
                            <div className="aspect-[3/2] lg:aspect-[4/5] rounded-[1.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 lg:border-8 border-white/10 backdrop-blur-sm">
                                <img
                                    src="/view-lisbon-river-tagus-portugal.webp"
                                    alt="Lisboa - Rio Tejo"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Inset Image - Overlapping at the bottom left of main image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-32 h-32 lg:w-64 lg:h-48 bg-[#0A0E27] p-1.5 lg:p-2 rounded-2xl lg:rounded-3xl shadow-2xl z-20 border-2 lg:border-4 border-[#0A0E27]"
                            >
                                <div className="w-full h-full rounded-xl lg:rounded-2xl overflow-hidden relative group">
                                    <img
                                        src="/belem-tower.png"
                                        alt="Torre de Belém"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                </div>
                            </motion.div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute top-1/2 -left-12 w-32 h-32 bg-white/5 rounded-full blur-2xl -z-10" />
                        </div>
                    </motion.div>

                    {/* 3. Left Column - Content (Below images on mobile, Below logo on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 lg:col-start-1 lg:row-start-2 flex flex-col gap-6 lg:gap-10 items-center lg:items-start text-center lg:text-left order-3 lg:order-none lg:-mt-6"
                    >
                        {/* Headline */}
                        <div className="space-y-4 lg:space-y-6">
                            <h1 className="font-garamond text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1]">
                                Não Deixe o seu <span className="text-[#D4AF37]">Futuro em Portugal à Espera</span>
                            </h1>
                            <p className="text-white/80 text-base md:text-xl leading-relaxed max-w-xl">
                                A enfrentar atrasos na AIMA ou dificuldades com o seu visto? Resolvemos as burocracias mais complexas para que possa viver com a tranquilidade e a segurança jurídica que merece.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href="tel:+351935267663">
                                <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-bold px-5 lg:px-10 py-4 lg:py-8 h-auto rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-base lg:text-lg flex items-center gap-3">
                                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
                                    Ligar +351 935 267 663
                                </Button>
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-5 pt-2 lg:pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-[#0A0E27] overflow-hidden bg-gray-200">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client avatar" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-white font-bold text-sm lg:text-base">+10 anos de Experiência</span>
                                <span className="text-white/60 text-xs lg:text-sm">+500 clientes atendidos em diversos países</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

