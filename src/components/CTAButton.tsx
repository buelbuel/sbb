import React from "react"
import { Link } from "./Link"

type ButtonVariant = "primary" | "neutral"

interface CTAButtonProps {
    href: string
    children: React.ReactNode
    isExternal?: boolean
    variant?: ButtonVariant
    className?: string
    download?: string | boolean
}

const CTAButton: React.FC<CTAButtonProps> = ({
    href,
    children,
    isExternal = false,
    variant = "primary",
    className = "",
    download,
}) => {
    const base =
        "inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-semibold tracking-tight transition-all duration-300 transform hyphens-none"

    const variants: Record<ButtonVariant, string> = {
        primary:
            "bg-primary hover:bg-primary-dark text-white",
        neutral:
            "bg-text-primary hover:bg-text-primary/60 text-bg-base",
    }

    const classes = `${base} ${variants[variant]} ${className}`

    const isMail = href.startsWith("mailto:")
    const isTel = href.startsWith("tel:")
    const isHttp = /^https?:/.test(href)
    const isExternalLink = isExternal || isMail || isTel || isHttp

    if (isExternalLink) {
        return (
            <a
                href={ href }
                target={ isHttp ? "_blank" : undefined }
                rel={ isHttp ? "noopener noreferrer" : undefined }
                download={ download }
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
