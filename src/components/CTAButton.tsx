import React from "react"
import { Link } from "./Link"

type ButtonVariant = "primary" | "glass" | "outline" | "neutral"

interface CTAButtonProps {
    href: string
    children: React.ReactNode
    isExternal?: boolean
    variant?: ButtonVariant
    className?: string
}

const CTAButton: React.FC<CTAButtonProps> = ({
    href,
    children,
    isExternal = false,
    variant = "primary",
    className = "",
}) => {
    const base =
        "inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-semibold tracking-tight transition-all duration-300 transform"

    const variants: Record<ButtonVariant, string> = {
        primary:
            "bg-primary hover:bg-primary-dark text-white",
        neutral:
            "bg-text-primary hover:bg-text-primary/60 text-bg-base",
        glass:
            "bg-bg-glass backdrop-blur-xl border border-white/40 hover:bg-white/80 dark:bg-black/60 dark:border-white/10",
        outline:
            "border border-text-primary/30 hover:bg-text-primary/5 hover:border-text-primary/60",
    }

    const classes = `${base} ${variants[variant]} ${className}`

    if (isExternal) {
        return (
            <a
                href={ href }
                target="_blank"
                rel="noopener noreferrer"
                className={ classes }
            >
                { children }
            </a>
        )
    }

    return (
        <Link href={ href } className={ classes }>
            { children }
        </Link>
    )
}

export default CTAButton
