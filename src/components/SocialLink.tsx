import { type ComponentType, type SVGProps } from "react"
import Card from "./Card"
import { ArrowRight } from "./Icons"

type SocialLinkVariant = "full" | "pill"

interface SocialLinkProps {
    href: string
    label: string
    handle?: string
    Icon?: ComponentType<SVGProps<SVGSVGElement>>
    arrow?: boolean
    variant?: SocialLinkVariant
    className?: string
    download?: boolean | string
    newTab?: boolean
}

const SocialLink = ({
    href,
    label,
    handle,
    Icon,
    arrow,
    variant = "full",
    className = "",
    download,
    newTab = true
}: SocialLinkProps) => {
    const isFull = variant === "full"
    const target = newTab ? "_blank" : undefined
    const rel = newTab ? "noreferrer" : undefined
    const hoverStyles = "transition-all hover:ring-primary"

    if (isFull) {
        return (
            <a
                href={ href }
                target={ target }
                rel={ rel }
                download={ download }
                className={ `block h-full ${className}` }
                aria-label={ handle ? `${label} (${handle})` : label }
            >
                <Card className={ `group p-6 relative flex items-center gap-4 ${hoverStyles}` }>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                        { Icon && <Icon className="h-6 w-6" /> }
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="font-semibold text-base">{ label }</div>
                        { handle && (
                            <div className="text-sm text-text-secondary truncate">{ handle }</div>
                        ) }
                    </div>
                    { arrow && <ArrowRight className="arrow-icon h-5 w-5 shrink-0 opacity-60 transition-all group-hover:opacity-100" /> }
                </Card>
            </a>
        )
    }

    return (
        <a
            href={ href }
            target={ target }
            rel={ rel }
            download={ download }
            className={ `block ${className}` }
            aria-label={ handle ? `${label} (${handle})` : label }
        >
            <Card className={ `group px-3 py-2 text-sm font-medium flex items-center gap-2 ${hoverStyles}` }>
                { Icon && <Icon className="w-5 h-5" /> }
                <span className="truncate">{ label }</span>
                { arrow && <ArrowRight className="arrow-icon h-4 w-4 shrink-0 opacity-60 transition-all group-hover:opacity-100" /> }
            </Card>
        </a>
    )
}

export default SocialLink
