import { Star, Quote, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"

const testimonials = [
    {
        name: "Mamadou D.",
        role: "Ajudante de Obra • Guiné-Bissau",
        content: "Estava há 2 anos à espera de uma resposta da AIMA. Depois de contratar os serviços, em 6 meses já tinha o meu cartão de residência.",
        avatar: "M"
    },
    {
        name: "Ana K.",
        role: "Estudante • Brasil",
        content: "A doutora ajudou-me com a renovação do meu visto de estudante, cuidaram de toda a parte dos documentos, agendamento e acompanhamento.",
        avatar: "A"
    },
    {
        name: "Carlos",
        role: "Empresário • Angola",
        content: "Conseguimos a nossa Nacionalidade Portuguesa. O processo era complicado mas eles explicaram tudo e trataram de cada documento.",
        avatar: "C"
    },
    {
        name: "Ricardo M.",
        role: "Freelancer • Brasil",
        content: "Processo de NIF e abertura de atividade nas finanças foi super rápido. Recomendo muito para quem está a chegar a Portugal.",
        avatar: "R"
    },
    {
        name: "Sofia L.",
        role: "Mãe • Brasil",
        content: "Conseguimos o reagrupamento familiar dos meus filhos sem estresse. Equipa muito competente e humana no trato com as famílias.",
        avatar: "S"
    },
    {
        name: "Ahmed S.",
        role: "Aposentado • Marrocos",
        content: "Visto D7 aprovado! O suporte na preparação do dossiê foi fundamental para o sucesso. Muito obrigado por toda a paciência.",
        avatar: "A"
    },
    {
        name: "Maria J.",
        role: "Enfermeira • Brasil",
        content: "Ação judicial para agilização do cartão de residência funcionou perfeitamente. Em poucos meses o problema estava resolvido.",
        avatar: "M"
    },
    {
        name: "Pedro V.",
        role: "Investidor • Brasil",
        content: "Assessoria para Golden Visa de altíssimo nível. Transparência e segurança em todas as etapas do investimento imobiliário.",
        avatar: "P"
    },
    {
        name: "Camila R.",
        role: "TI • Brasil",
        content: "Ajuda com a carta de condução e troca de documentos foi essencial. Economizei muito tempo e evitei muitas dores de cabeça.",
        avatar: "C"
    }
]

export function Testimonials() {
    return (
        <section className="bg-[#faf5ed] py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-[#0A0E27] leading-tight">
                        O que dizem os nossos clientes
                    </h2>
                </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative flex flex-col items-center justify-center overflow-hidden py-10">
                <Marquee className="[--duration:50s] [--gap:2rem]">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] md:w-[450px] bg-white p-8 md:p-10 rounded-3xl border border-black/5 transition-all duration-300 flex flex-col h-full mx-2"
                        >
                            {/* Stars and Quote Icon */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-black/5 rotate-180" />
                            </div>

                            {/* Content */}
                            <p className="text-[#4A5568] text-base md:text-lg leading-relaxed font-light mb-10 flex-1">
                                "{t.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-lg">
                                    {t.avatar}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-garamond font-bold text-[#0A0E27] text-lg leading-tight">
                                        {t.name}
                                    </h4>
                                    <p className="text-[#4A5568] text-sm md:text-base">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>

                {/* Fade overlays for the edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#faf5ed]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#faf5ed]"></div>
            </div>

            <div className="container mx-auto px-4">
                {/* CTA Button */}
                <div className="flex justify-center mt-12">
                    <a href="tel:+351935267663">
                        <Button className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-bold text-lg px-10 py-7 h-auto rounded-full transition-all duration-300 flex items-center gap-3 group hover:-translate-y-1">
                            <Phone className="w-5 h-5 fill-current" />
                            Ligue agora +351 935 267 663
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

