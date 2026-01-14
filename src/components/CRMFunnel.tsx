import { useEffect, useRef } from "react"

const CRMFunnel = () => {
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
    const stages = [
        { label: "Leads", value: 100 },
        { label: "Qualified", value: 70 },
        { label: "Proposals", value: 45 },
        { label: "Closed", value: 25 },
    ]

    return (
        <div ref={ containerRef } className="w-full max-w-md mx-auto space-y-3">
            { stages.map((stage, idx) => {
                const percentage = (stage.value / 100) * 100
                return (
                    <div
                        key={ idx }
                        className="scroll-animate flex flex-col gap-2"
                        style={ {
                            transform: 'translateX(-20px)',
                            transitionDelay: `${idx * 0.1}s`
                        } }
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-text-primary">{ stage.label }</span>
                            <span className="text-xs text-text-primary/60">{ stage.value }%</span>
                        </div>
                        <div className="h-3 bg-text-primary/10 rounded-full overflow-hidden">
                            <div
                                className="scroll-animate h-full bg-text-primary rounded-full origin-left"
                                style={ {
                                    width: `${percentage}%`,
                                    transform: 'scaleX(0)',
                                    transitionDelay: `${idx * 0.1 + 0.2}s`,
                                    transitionDuration: '0.8s'
                                } }
                            />
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default CRMFunnel
