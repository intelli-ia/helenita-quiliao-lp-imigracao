import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-16 md:pt-0">
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/view-lisbon-river-tagus-portugal.webp"
                    alt="Lisbon, Portugal"
                    className="w-full h-full object-cover opacity-40 animate-zoom-in scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/80 via-[#0A0E27]/60 to-[#0A0E27]/90" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] text-center">
                
                <div className="flex flex-col items-center max-w-4xl">
                    {/* Logo Area */}
                    <div className="mb-8 md:mb-10 animate-fade-in-down">
                        <img 
                            src="/logo-helenita-quiliao-400.webp" 
                            alt="Helenita Quilião Logo" 
                            className="h-20 md:h-28 w-auto object-contain brightness-110"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 md:space-y-8">
                        <h1 className="font-garamond text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-wide drop-shadow-lg max-w-3xl mx-auto">
                            Não Deixe o seu Futuro em Portugal à Espera
                        </h1>
                        
                        <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-2xl mx-auto">
                            A enfrentar atrasos na AIMA ou dificuldades com o seu visto? Resolvemos as burocracias mais complexas para que possa viver com a tranquilidade e a segurança jurídica que merece.
                        </p>
 
                        <p className="text-[#D4AF37] font-medium text-lg md:text-xl tracking-wide uppercase">
                            Assessoria especializada para desbloquear o seu processo e garantir a sua residência.
                        </p>
                    </div>


                    {/* CTA Button */}
                    <div className="mt-10 md:mt-12">
                        <a href="tel:+351935267663">
                            <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-bold text-lg px-8 py-7 h-auto rounded-full transition-all duration-300 flex items-center gap-3 group shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1">
                                <Phone className="w-5 h-5 fill-current" />
                                Ligue agora +351 935 267 663
                            </Button>
                        </a>
                    </div>

                    {/* License Badges */}
                    <div className="mt-12 md:mt-16 flex flex-wrap gap-4 justify-center">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white/90 text-xs md:text-sm font-medium tracking-wider">
                            CP 63.496E
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white/90 text-xs md:text-sm font-medium tracking-wider">
                            OAB/RS 111.310
                        </div>
                    </div>
                </div>
            </div>


            {/* Bottom Gradient Edge */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0E27] to-transparent z-10" />
        </section>
    )
}
