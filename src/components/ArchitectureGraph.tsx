import { motion } from "framer-motion"

const ArchitectureGraph = () => {
    const layers = [
        { label: "Experience Layer", items: ["Web", "Mobile", "API"] },
        { label: "Business Layer", items: ["Automation", "Logic", "Integration"] },
        { label: "Data Layer", items: ["Storage", "Analytics", "Security"] },
    ]

    return (
        <div className="w-full max-w-2xl mx-auto py-8">
            { layers.map((layer, layerIdx) => (
                <motion.div
                    key={ layerIdx }
                    initial={ { opacity: 0, y: 20 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.6, delay: layerIdx * 0.15, ease: [0.16, 1, 0.3, 1] } }
                    className="mb-6 last:mb-0"
                >
                    <div className="text-sm font-semibold text-text-primary/60 mb-3 tracking-wide uppercase">
                        { layer.label }
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        { layer.items.map((item, itemIdx) => (
                            <motion.div
                                key={ itemIdx }
                                initial={ { opacity: 0, scale: 0.9 } }
                                whileInView={ { opacity: 1, scale: 1 } }
                                viewport={ { once: true } }
                                transition={ {
                                    duration: 0.5,
                                    delay: layerIdx * 0.15 + itemIdx * 0.08,
                                    ease: [0.16, 1, 0.3, 1]
                                } }
                                whileHover={ { scale: 1.02, y: -2 } }
                                className="relative p-5 rounded-2xl bg-text-primary/5 border border-text-primary/10 backdrop-blur-sm hover:bg-text-primary/8 hover:border-text-primary/20 transition-colors duration-300"
                            >
                                <div className="text-center text-sm font-semibold text-text-primary">
                                    { item }
                                </div>
                            </motion.div>
                        )) }
                    </div>
                    { layerIdx < layers.length - 1 && (
                        <motion.div
                            initial={ { scaleY: 0 } }
                            whileInView={ { scaleY: 1 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.4, delay: layerIdx * 0.15 + 0.3 } }
                            className="w-0.5 h-8 mx-auto my-2 bg-linear-to-b from-text-primary/30 to-text-primary/10 origin-top"
                        />
                    ) }
                </motion.div>
            )) }
        </div>
    )
}

export default ArchitectureGraph
