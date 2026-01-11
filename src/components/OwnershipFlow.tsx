import { motion } from "framer-motion"

const OwnershipFlow = () => {
    const steps = [
        { label: "Define", desc: "Scope & Goals" },
        { label: "Document", desc: "Standards" },
        { label: "Govern", desc: "Policies" },
        { label: "Maintain", desc: "Continuous" },
    ]

    return (
        <div className="w-full max-w-2xl mx-auto py-8">
            <div className="relative">
                {/* Progress line */ }
                <motion.div
                    initial={ { scaleX: 0 } }
                    whileInView={ { scaleX: 1 } }
                    viewport={ { once: true } }
                    transition={ { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                    className="absolute top-9 left-0 right-0 h-0.5 bg-text-primary/20 origin-left"
                />

                <div className="relative grid grid-cols-4 gap-4">
                    { steps.map((step, idx) => (
                        <motion.div
                            key={ idx }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true } }
                            transition={ {
                                duration: 0.6,
                                delay: idx * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            } }
                            className="flex flex-col items-center gap-3"
                        >
                            {/* Circle indicator */ }
                            <motion.div
                                initial={ { scale: 0 } }
                                whileInView={ { scale: 1 } }
                                viewport={ { once: true } }
                                transition={ {
                                    duration: 0.5,
                                    delay: idx * 0.15 + 0.2,
                                    ease: [0.16, 1, 0.3, 1]
                                } }
                                whileHover={ { scale: 1.1 } }
                                className="relative w-18 h-18 rounded-full bg-text-primary flex items-center justify-center shadow-lg"
                            >
                                <div className="text-white text-xl font-bold">
                                    { idx + 1 }
                                </div>
                            </motion.div>

                            {/* Label */ }
                            <div className="text-center">
                                <div className="text-base font-semibold text-text-primary mb-1">
                                    { step.label }
                                </div>
                                <div className="text-xs text-text-primary/60">
                                    { step.desc }
                                </div>
                            </div>
                        </motion.div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default OwnershipFlow
