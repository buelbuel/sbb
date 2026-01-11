import React from "react"

interface CardProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
    variant?: "default" | "glass" | "outline"
}

const Card: React.FC<CardProps> = ({
    children,
    className = "",
    hoverEffect = false,
    variant = "default"
}) => {
    const baseStyles = "relative overflow-hidden rounded-[30px] transition-all duration-300 ease-apple"

    const variants = {
        default: "bg-bg-glass shadow-border-subtle",
        glass: "bg-bg-glass/80 backdrop-blur-2xl saturate-150 border border-border-glass shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        outline: "bg-transparent border border-border-glass"
    }

    const hoverStyles = hoverEffect
        ? "hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-2px]"
        : ""

    return (
        <div
            className={ `
                ${baseStyles}
                ${variants[variant]}
                ${hoverStyles}
                ${className}
            `}
        >
            { children }
        </div>
    )
}

export default Card
