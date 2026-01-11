import React from "react"

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
            return
        }

        e.preventDefault()
        window.history.pushState({}, "", href)
        window.dispatchEvent(new PopStateEvent("popstate"))
    }

    return (
        <a href={ href } onClick={ onClick } className={ className } { ...props }>
            { children }
        </a>
    )
}
