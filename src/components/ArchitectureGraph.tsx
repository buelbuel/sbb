import { useEffect, useRef } from "react"

const ArchitectureGraph = () => {
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
    const layers = [
        { label: "Experience Layer", items: ["Web", "Mobile", "API"] },
        { label: "Business Layer", items: ["Automation", "Logic", "Integration"] },
        { label: "Data Layer", items: ["Storage", "Analytics", "Security"] },
    ]

    return (
        <div
            ref={ containerRef }
            className="w-full max-w-2xl mx-auto py-8"
            role="img"
            aria-label="Enterprise Salesforce architecture diagram showing three layers: Experience Layer (Web, Mobile, API), Business Layer (Automation, Logic, Integration), and Data Layer (Storage, Analytics, Security)"
        >
            { layers.map((layer, layerIdx) => (
                <div
                    key={ layerIdx }
                    className="scroll-animate mb-6 last:mb-0"
                    style={ { transform: 'translateY(20px)', transitionDelay: `${layerIdx * 0.15}s` } }
                >
                    <div className="text-sm font-semibold text-text-primary/60 mb-3 tracking-wide uppercase">
                        { layer.label }
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        { layer.items.map((item, itemIdx) => (
                            <div
                                key={ itemIdx }
                                className="scroll-animate relative p-5 rounded-2xl bg-text-primary/5 border border-text-primary/10 backdrop-blur-sm hover:bg-text-primary/8 hover:border-text-primary/20 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
                                style={ {
                                    transform: 'translateY(20px) scale(0.9)',
                                    transitionDelay: `${layerIdx * 0.15 + itemIdx * 0.08}s`
                                } }
                            >
                                <div className="text-center text-sm font-semibold text-text-primary">
                                    { item }
                                </div>
                            </div>
                        )) }
                    </div>
                    { layerIdx < layers.length - 1 && (
                        <div
                            className="scroll-animate w-0.5 h-8 mx-auto my-2 bg-linear-to-b from-text-primary/30 to-text-primary/10 origin-top"
                            style={ {
                                transform: 'scaleY(0)',
                                transitionDelay: `${layerIdx * 0.15 + 0.3}s`
                            } }
                        />
                    ) }
                </div>
            )) }
        </div>
    )
}

export default ArchitectureGraph
