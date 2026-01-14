import React from "react"

interface IconProps {
    className?: string
}

export const LinkedIn: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
)

export const GitHub: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
)

export const Trailhead: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
    >
        <g>
            <polygon points="12.3,37 9.7,40 14.8,40" />
            <polygon points="14.7,43.1 19.8,43.1 17.2,40.2" />
            <polygon points="35.2,41 37.7,38.1 40.3,41" />
            <path d="M26.8,2.2c-0.4-0.2-0.9-0.2-1.4,0C11.1,8.2,1.9,22.4,2.2,38v3.4c0,0.5,0.2,1,0.7,1.4c6.9,4.6,15,7.1,23.3,7.2H27h0.1c7.9-0.3,15.7-2.7,22.3-7.2c0.4-0.3,0.7-0.8,0.7-1.4V38C50.4,22.4,41.2,8.2,26.8,2.2z M13.9,14.8c5.8-6.9,12.3-9.2,12.3-9.2c1.4,0.6,16.9,6.7,20.2,26.4h-4.1l-7.8-11.3c-0.5-0.7-1.6-0.9-2.4-0.4c-0.2,0.1-0.3,0.3-0.4,0.4l-2,2.8l-5.5-7.9c-0.5-0.7-1.6-0.9-2.4-0.4c-0.2,0.1-0.3,0.3-0.4,0.4L10.2,31.9L6.1,32C7.3,24.5,10.4,19,13.9,14.8z M38.1,32h-4.7H28l2.6-3.8l2.4-3.6L38.1,32z M23.7,20.9L23.7,20.9L23.7,20.9l4,5.7l-3.8,5.3h-1h-8.6l4.1-6.1l4.3-6.4l0,0L23.7,20.9z M27.5,44L27.5,44l-1.5,2.6c-2.9,0-5.6-0.4-8.8-1.1l0,0c-4.1-1-8-2.7-11.6-4.9v-2.5c0-0.8,0-1.7,0.1-2.6h7.5h10.1c-1.4,2.1-0.7,4.9,1.5,6.2c0.2,0.1,0.4,0.2,0.5,0.3l1.6,0.7C27.5,42.9,27.7,43.5,27.5,44z M46.8,40.5c-2.6,1.6-5.3,2.9-8.1,3.9c0,0-0.5,0.2-0.7,0.2c-1.6,0.5-3.2,0.9-4.9,1.3c-0.9,0.2-1.9,0.3-2.8,0.4l0.3-0.5c1.3-2.2,0.5-4.9-1.7-6.2c-0.1-0.1-0.3-0.1-0.4-0.2l-1.6-0.7c-0.5-0.2-0.8-0.8-0.5-1.4c0-0.1,0.1-0.2,0.1-0.2l1.5-1.7H31h15.7c0,0.8,0.1,1.7,0.1,2.6L46.8,40.5z" />
        </g>
    </svg>
)

export const Globe: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
)

export const X: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
)

export const Menu: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
)

export const Sun: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
)

export const Moon: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
)

export const Clipboard: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
)

export const Lightbulb: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
)

export const Zap: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

export const Check: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
)

export const ArrowRight: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
)

export const Layers: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
    </svg>
)

export const GitBranch: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
)

export const Compass: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
)

export const Mail: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
)

export const CheckCircle: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
)

export const Bolt: React.FC<IconProps> = ({ className = "" }) => (
    <svg
        className={ className }
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path d="M7.84308 3.80211C9.8718 2.6007 10.8862 2 12 2C13.1138 2 14.1282 2.6007 16.1569 3.80211L16.8431 4.20846C18.8718 5.40987 19.8862 6.01057 20.4431 7C21 7.98943 21 9.19084 21 11.5937V12.4063C21 14.8092 21 16.0106 20.4431 17C19.8862 17.9894 18.8718 18.5901 16.8431 19.7915L16.1569 20.1979C14.1282 21.3993 13.1138 22 12 22C10.8862 22 9.8718 21.3993 7.84308 20.1979L7.15692 19.7915C5.1282 18.5901 4.11384 17.9894 3.55692 17C3 16.0106 3 14.8092 3 12.4063V11.5937C3 9.19084 3 7.98943 3.55692 7C4.11384 6.01057 5.1282 5.40987 7.15692 4.20846L7.84308 3.80211Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
)


export const iconMap = {
    linkedin: LinkedIn,
    github: GitHub,
    trailhead: Trailhead,
    globe: Globe,
    x: X,
    menu: Menu,
    sun: Sun,
    moon: Moon,
    clipboard: Clipboard,
    lightbulb: Lightbulb,
    zap: Zap,
    check: Check,
    arrowRight: ArrowRight,
    layers: Layers,
    gitBranch: GitBranch,
    compass: Compass,
    mail: Mail,
    checkCircle: CheckCircle,
    bolt: Bolt,
} as const
