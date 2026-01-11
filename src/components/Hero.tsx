import React from "react"
import { motion } from "framer-motion"
import CTAButton from "./CTAButton"

interface HeroProps {
    title: string | React.ReactNode
    description: string
    ctaLabel?: string
    ctaHref?: string
    secondaryCtaLabel?: string
    secondaryCtaHref?: string
}

const Hero: React.FC<HeroProps> = ({
    title,
    description,
    ctaLabel,
    ctaHref
}) => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 max-w-245 text-center">
                <motion.h1
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-[1.05]"
                >
                    { title }
                </motion.h1>

                <motion.p
                    initial={ { opacity: 0, y: 20 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                    className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-10"
                >
                    { description }
                </motion.p>

                <motion.div
                    initial={ { opacity: 0, scale: 0.95 } }
                    animate={ { opacity: 1, scale: 1 } }
                    transition={ { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } }
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    { ctaLabel && ctaHref && (
                        <CTAButton href={ ctaHref } variant="neutral">
                            { ctaLabel }
                        </CTAButton>
                    ) }
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
