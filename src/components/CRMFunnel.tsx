import { motion } from "framer-motion"

const CRMFunnel = () => {
    const stages = [
        { label: "Leads", value: 100 },
        { label: "Qualified", value: 70 },
        { label: "Proposals", value: 45 },
        { label: "Closed", value: 25 },
    ]

    return (
        <div className="w-full max-w-md mx-auto space-y-3">
            { stages.map((stage, idx) => {
                const percentage = (stage.value / 100) * 100
                return (
                    <motion.div
                        key={ idx }
                        initial={ { opacity: 0, x: -20 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true } }
                        transition={ {
                            duration: 0.6,
                            delay: idx * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        } }
                        className="flex flex-col gap-2"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-text-primary">{ stage.label }</span>
                            <span className="text-xs text-text-primary/60">{ stage.value }%</span>
                        </div>
                        <motion.div
                            initial={ { scaleX: 0 } }
                            whileInView={ { scaleX: 1 } }
                            viewport={ { once: true } }
                            transition={ {
                                duration: 0.8,
                                delay: idx * 0.1 + 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            } }
                            className="h-3 bg-text-primary/10 rounded-full overflow-hidden origin-left"
                        >
                            <div
                                className="h-full bg-text-primary rounded-full"
                                style={ { width: `${percentage}%` } }
                            />
                        </motion.div>
                    </motion.div>
                )
            }) }
        </div>
    )
}

export default CRMFunnel
