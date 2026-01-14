import React from "react"

interface CardProps {
    children: React.ReactNode
    className?: string
}

const Card: React.FC<CardProps> = ({
    children,
    className = "",
}) => {
    return (
        <div
            className={ `
                bg-bg-glass ring-2 ring-transparent relative overflow-hidden rounded-xl transition-all duration-300 ease-primary
                ${className}
            `}
        >
            { children }
        </div>
    )
}

export default Card
