import React from "react"
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
                <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-[1.05]">
                    { title }
                </h1>

                <p className="animate-fade-in-up delay-200 text-2xl md:text-4xl font-medium max-w-2xl mx-auto mb-10 text-text-secondary">
                    { description }
                </p>

                <div className="animate-fade-in-scale delay-400 flex flex-col md:flex-row items-center justify-center gap-4">
                    { ctaLabel && ctaHref && (
                        <CTAButton href={ ctaHref } variant="neutral">
                            { ctaLabel }
                        </CTAButton>
                    ) }
                </div>
            </div>
        </section>
    )
}

export default Hero
