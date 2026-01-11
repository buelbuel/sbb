import React, { useState } from "react"

interface AccordionItem {
    question: string
    answer: string
}

interface AccordionProps {
    title: string
    subtitle?: string
    items: AccordionItem[]
    idPrefix: string
}

const Accordion: React.FC<AccordionProps> = ({ title, subtitle, items, idPrefix }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const itemsArray = Array.isArray(items) ? items : []

    return (
        <section className="py-32">
            <div className="container mx-auto px-6 max-w-300">
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-center">
                    { title }
                </h2>
                { subtitle && (
                    <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
                        { subtitle }
                    </p>
                ) }

                <ul className="max-w-4xl mx-auto divide-y divide-text-primary/10">
                    { itemsArray.map((item, i) => {
                        const isOpen = openIndex === i
                        const btnId = `${idPrefix}-btn-${i}`
                        const panelId = `${idPrefix}-panel-${i}`
                        return (
                            <li key={ i } className="py-2">
                                <div className="flex items-start">
                                    <h3 className="flex-1">
                                        <button
                                            id={ btnId }
                                            aria-controls={ panelId }
                                            aria-expanded={ isOpen }
                                            onClick={ () => setOpenIndex(isOpen ? null : i) }
                                            className="w-full text-left py-6 flex items-center justify-between gap-6"
                                        >
                                            <span className="text-lg md:text-xl font-medium">
                                                { item.question }
                                            </span>
                                            <span aria-hidden className="relative w-6 h-6 shrink-0">
                                                <span className={ `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-0.5 bg-text-primary transition-transform ${isOpen ? "rotate-90" : "rotate-0"}` }></span>
                                                <span className={ `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-text-primary transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}` }></span>
                                            </span>
                                        </button>
                                    </h3>
                                </div>
                                <div
                                    id={ panelId }
                                    role="region"
                                    aria-labelledby={ btnId }
                                    aria-hidden={ !isOpen }
                                    className={ `overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-96" : "max-h-0"}` }
                                >
                                    <div className="pb-8">
                                        <p className="text-base leading-relaxed">
                                            { item.answer }
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    }) }
                </ul>
            </div>
        </section>
    )
}

export default Accordion
