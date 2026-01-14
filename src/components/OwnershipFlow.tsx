import { useEffect, useRef } from "react"

const OwnershipFlow = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        const elements = containerRef.current?.querySelectorAll('.scroll-animate')
        elements?.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])
    const steps = [
        { label: "Define", desc: "Scope & Goals" },
        { label: "Document", desc: "Standards" },
        { label: "Govern", desc: "Policies" },
        { label: "Maintain", desc: "Continuous" },
    ]

    return (
        <div ref={ containerRef } className="w-full max-w-2xl mx-auto py-8">
            <div className="relative">
                {/* Progress line */ }
                <div className="scroll-animate absolute top-9 left-0 right-0 h-0.5 bg-text-primary/20 origin-left"
                    style={ { transform: 'scaleX(0)', transitionDuration: '1.2s' } }
                />

                <div className="relative grid grid-cols-4 gap-4">
                    { steps.map((step, idx) => (
                        <div
                            key={ idx }
                            className="scroll-animate flex flex-col items-center gap-3"
                            style={ {
                                transform: 'translateY(20px)',
                                transitionDelay: `${idx * 0.15}s`
                            } }
                        >
                            {/* Circle indicator */ }
                            <div
                                className="scroll-animate relative w-18 h-18 rounded-full bg-text-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                                style={ {
                                    transform: 'scale(0)',
                                    transitionDelay: `${idx * 0.15 + 0.2}s`
                                } }
                            >
                                <div className="text-white text-xl font-bold">
                                    { idx + 1 }
                                </div>
                            </div>

                            {/* Label */ }
                            <div className="text-center">
                                <div className="text-base font-semibold text-text-primary mb-1">
                                    { step.label }
                                </div>
                                <div className="text-xs text-text-primary/60">
                                    { step.desc }
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default OwnershipFlow
