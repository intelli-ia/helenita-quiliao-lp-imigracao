import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const heroHeight = window.innerHeight
            
            // On desktop, hide on first section. On mobile, keep visible (or adjust if needed)
            const isDesktop = window.innerWidth >= 1024
            
            if (isDesktop) {
                setIsVisible(scrollY > heroHeight * 0.7)
            } else {
                setIsVisible(true) // Always visible on mobile for easier navigation
            }
            
            setScrolled(scrollY > 20)
        }

        handleScroll() // Initial check
        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll)
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className={cn(
                        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pt-4 px-4 w-full",
                        scrolled ? "pt-4" : "pt-6"
                    )}
                >
                    <div
                        className={cn(
                            "w-full max-w-6xl flex items-center justify-between px-6 h-14 transition-all duration-500",
                            "bg-[#0A0E27]/40 backdrop-blur-xl border border-white/10 shadow-2xl",
                            "rounded-lg",
                            scrolled ? "max-w-4xl h-14" : "max-w-5xl h-16"
                        )}
                    >
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2.5 shrink-0">
                            <img src="/logo-helenita-quiliao-400.webp" alt="Logo" className="h-8 md:h-10 w-auto brightness-110" />
                            <span className="font-garamond font-medium text-lg md:text-xl text-white tracking-tight hidden sm:block">
                                Helenita Quilião
                            </span>
                        </Link>

                        {/* Empty space */}
                        <div className="hidden md:block flex-1" />

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <Button
                                asChild
                                className="bg-[#D4AF37] hover:bg-[#C19A2E] text-black font-bold text-sm px-6 h-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <a
                                    href="tel:+351935267663"
                                    className="flex items-center gap-2"
                                >
                                    <Phone className="w-4 h-4 fill-current" />
                                    <span className="hidden sm:inline">Ligar Agora</span>
                                    <span className="sm:hidden">Ligar</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    )
}


