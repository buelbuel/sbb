import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "@/components/Link"
import { Globe, Moon, Sun, Menu, X } from "@/components/Icons"

type HeaderProps = {
    currentPath: string
}

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
    const { t, i18n } = useTranslation('common')
    const listRef = useRef<HTMLUListElement>(null)
    const mobileListRef = useRef<HTMLUListElement>(null)
    const [indicator, setIndicator] = useState({ left: 0, width: 0 })
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileAnimState, setMobileAnimState] = useState<'entering' | 'entered' | 'exiting'>('entering')
    const [hovered, setHovered] = useState<string | null>(null)
    const [hoverHighlight, setHoverHighlight] = useState({ top: 0, height: 0, visible: false })
    const [theme, setTheme] = useState<string>("light")
    const [themeInitialized, setThemeInitialized] = useState(false)

    const navItems = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.services"), href: "/services" },
        { label: t("nav.about"), href: "/about" },
        { label: t("nav.references"), href: "/references" },
        { label: t("nav.contact"), href: "/contact" },
    ]

    useEffect(() => {
        const updateIndicator = () => {
            const activeEl = listRef.current?.querySelector<HTMLButtonElement>(
                `button[data-active="true"]`
            )
            if (!activeEl || !listRef.current) return

            const listRect = listRef.current.getBoundingClientRect()
            const rect = activeEl.getBoundingClientRect()

            setIndicator({
                left: rect.left - listRect.left,
                width: rect.width,
            })
        }

        requestAnimationFrame(updateIndicator)
    }, [currentPath, i18n.language])

    useEffect(() => {
        const callback = () => {
            const saved = localStorage.getItem("theme")
            const hasSaved = Boolean(saved)
            const media = window.matchMedia("(prefers-color-scheme: dark)")

            const apply = (mode: string) => {
                setTheme(mode)
                document.documentElement.classList.toggle("dark", mode === "dark")
                setThemeInitialized(true)
            }

            const initial = saved || (media.matches ? "dark" : "light")
            apply(initial)

            const handleSystemChange = (event: MediaQueryListEvent) => {
                if (!hasSaved) {
                    apply(event.matches ? "dark" : "light")
                }
            }

            media.addEventListener("change", handleSystemChange)
            return () => media.removeEventListener("change", handleSystemChange)
        }

        if ('requestIdleCallback' in window) {
            requestIdleCallback(callback, { timeout: 2000 })
        } else {
            setTimeout(callback, 0)
        }
    }, [])

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language.startsWith("de") ? "en" : "de")
    }

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark"
        setTheme(next)
        localStorage.setItem("theme", next)
        document.documentElement.classList.toggle("dark", next === "dark")
    }

    const openMobileMenu = () => {
        setMobileOpen(true)
        setMobileAnimState('entering')
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setMobileAnimState('entered')
            })
        })
    }

    const closeMobileMenu = () => {
        setMobileAnimState('exiting')
        setTimeout(() => {
            setMobileOpen(false)
            setMobileAnimState('entering')
        }, 280)
    }

    const positionHoverHighlight = (target: HTMLLIElement) => {
        const parent = mobileListRef.current
        if (!parent) return
        const rect = target.getBoundingClientRect()
        const parentRect = parent.getBoundingClientRect()
        setHoverHighlight({
            top: rect.top - parentRect.top,
            height: rect.height,
            visible: true,
        })
    }

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileOpen])

    return (
        <>
            {/* HEADER */ }
            <header className="fixed top-0 inset-x-0 z-50">
                <div className="w-full lg:max-w-5xl mx-auto lg:mt-6 px-0 sm:px-0 lg:px-0">
                    <div className="flex items-center justify-between h-18 px-4 sm:px-5 lg:px-6 lg:rounded-4xl bg-bg-glass/80 backdrop-blur-[20px] saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                        <Link href="/" className="font-black text-2xl">SBB</Link>

                        <nav className="hidden lg:block">
                            <ul
                                ref={ listRef }
                                className="relative flex items-center p-1 rounded-full bg-bg-base ring-1 ring-bg-glass"
                            >
                                <span
                                    className="absolute top-1 bottom-1 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-[left,width] duration-500 ease-primary"
                                    style={ indicator }
                                />
                                { navItems.map(item => {
                                    const active = currentPath === item.href
                                    return (
                                        <li key={ item.href } className="relative z-10">
                                            <Link href={ item.href }>
                                                <button
                                                    data-active={ active }
                                                    className={ `px-5 py-2 text-[15px] font-medium rounded-full ${active
                                                        ? "text-black"
                                                        : "hover:opacity-70"}
                                                    `}
                                                >
                                                    { item.label }
                                                </button>
                                            </Link>
                                        </li>
                                    )
                                }) }
                            </ul>
                        </nav>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={ toggleTheme }
                                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-sm font-medium flex items-center gap-2"
                                aria-label="Toggle dark mode"
                            >
                                { theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" /> }
                                { theme === "dark" ? "Light" : "Dark" }
                            </button>
                            <button
                                onClick={ toggleLanguage }
                                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-sm font-medium flex items-center gap-2"
                            >
                                <Globe className="w-4 h-4" />
                                { i18n.language.startsWith("de") ? "DE" : "EN" }
                            </button>

                            <button
                                onClick={ openMobileMenu }
                                className="md:hidden w-10 h-10 flex items-center justify-center"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */ }
            { mobileOpen && (
                <>
                    {/* Backdrop */ }
                    <div
                        className={ `mobile-backdrop fixed inset-0 z-60 bg-bg-glass backdrop-blur-sm ${mobileAnimState}` }
                        onClick={ closeMobileMenu }
                    />

                    {/* Panel */ }
                    <div className={ `mobile-panel fixed z-61 top-4 left-4 right-4 rounded-4xl bg-bg-glass/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 ${mobileAnimState}` }>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-semibold">Menu</span>
                            <button
                                onClick={ closeMobileMenu }
                                className="w-10 h-10 flex items-center justify-center"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <ul ref={ mobileListRef } className="relative flex flex-col">
                            { hoverHighlight.visible && (
                                <span
                                    className="mobile-hover-highlight"
                                    style={ { top: hoverHighlight.top, height: hoverHighlight.height } }
                                />
                            ) }

                            { navItems.map(item => (
                                <li
                                    key={ item.href }
                                    className="mobile-nav-item relative"
                                    onPointerEnter={ e => { setHovered(item.href); positionHoverHighlight(e.currentTarget) } }
                                    onPointerLeave={ () => setHoverHighlight(h => ({ ...h, visible: false })) }
                                    onPointerDown={ e => { setHovered(item.href); positionHoverHighlight(e.currentTarget) } }
                                >
                                    <Link
                                        href={ item.href }
                                        onClick={ closeMobileMenu }
                                        className="relative z-10 block px-4 py-3 text-lg font-medium"
                                    >
                                        { item.label }
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </div>
                </>
            ) }
        </>
    )
}
