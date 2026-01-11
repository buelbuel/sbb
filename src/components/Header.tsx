import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "../components/Link"
import { Globe, X, Menu, Sun, Moon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

type HeaderProps = {
    currentPath: string
}

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
    const { t, i18n } = useTranslation()
    const listRef = useRef<HTMLUListElement>(null)
    const [indicator, setIndicator] = useState({ left: 0, width: 0 })
    const [mobileOpen, setMobileOpen] = useState(false)
    const [hovered, setHovered] = useState<string | null>(null)
    const [theme, setTheme] = useState<string>("light")

    const navItems = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.services"), href: "/services" },
        { label: t("nav.about"), href: "/about" },
        { label: t("nav.references"), href: "/references" },
        { label: t("nav.contact"), href: "/contact" },
    ]

    useEffect(() => {
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
    }, [currentPath, i18n.language])

    useEffect(() => {
        const saved = localStorage.getItem("theme")
        const hasSaved = Boolean(saved)
        const media = window.matchMedia("(prefers-color-scheme: dark)")

        const apply = (mode: string) => {
            setTheme(mode)
            document.documentElement.classList.toggle("dark", mode === "dark")
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

    return (
        <>
            {/* HEADER */ }
            <header className="fixed top-0 inset-x-0 z-50">
                <div className="w-full lg:max-w-5xl mx-auto lg:mt-6 px-0 sm:px-0 lg:px-0">
                    <div className="flex items-center justify-between h-18 px-4 sm:px-5 lg:px-6 lg:rounded-4xl bg-bg-glass/80 backdrop-blur-[20px] saturate-150 lg:border border-border-glass shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                        <Link href="/" className="font-black text-2xl">SBB</Link>

                        <nav className="hidden lg:block">
                            <ul
                                ref={ listRef }
                                className="relative flex items-center p-1 rounded-full bg-black/5 ring-1 ring-black/5"
                            >
                                <span
                                    className="absolute top-1 bottom-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-[left,width] duration-500 ease-apple"
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
                                                        ? ""
                                                        : "hover:opacity-70"
                                                        }` }
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
                                className="p-2 rounded-full hover:bg-black/5 text-sm font-medium flex items-center gap-2"
                                aria-label="Toggle dark mode"
                            >
                                { theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" /> }
                                { theme === "dark" ? "Light" : "Dark" }
                            </button>
                            <button
                                onClick={ toggleLanguage }
                                className="p-2 rounded-full hover:bg-black/5 text-sm font-medium flex items-center gap-2"
                            >
                                <Globe className="w-4 h-4" />
                                { i18n.language.startsWith("de") ? "DE" : "EN" }
                            </button>

                            <button
                                onClick={ () => setMobileOpen(true) }
                                className="md:hidden w-10 h-10 rounded-full bg-black/5 flex items-center justify-center"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */ }
            <AnimatePresence>
                { mobileOpen && (
                    <>
                        {/* Backdrop */ }
                        <motion.div
                            className="fixed inset-0 z-60 bg-bg-glass backdrop-blur-sm"
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            onClick={ () => setMobileOpen(false) }
                        />

                        {/* Panel */ }
                        <motion.div
                            className="fixed z-61 top-4 left-4 right-4 rounded-4xl bg-bg-glass/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6"
                            initial={ { opacity: 0, y: -20, scale: 0.98 } }
                            animate={ { opacity: 1, y: 0, scale: 1 } }
                            exit={ { opacity: 0, y: -10, scale: 0.98 } }
                            transition={ { type: "spring", stiffness: 260, damping: 26 } }
                        >
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-semibold">Menu</span>
                                <button
                                    onClick={ () => setMobileOpen(false) }
                                    className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <ul className="relative flex flex-col">
                                { navItems.map(item => (
                                    <li
                                        key={ item.href }
                                        className="relative"
                                        onPointerEnter={ () => setHovered(item.href) }
                                        onPointerLeave={ () => setHovered(null) }
                                        onPointerDown={ () => setHovered(item.href) }
                                    >
                                        { hovered === item.href && (
                                            <motion.span
                                                layoutId="mobile-hover"
                                                className="absolute inset-0 rounded-2xl bg-black/5 backdrop-blur-[2px]"
                                                transition={ {
                                                    type: "tween",
                                                    duration: 0.28,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                } }
                                            />
                                        ) }

                                        <Link
                                            href={ item.href }
                                            onClick={ () => setMobileOpen(false) }
                                            className="relative z-10 block px-4 py-3 text-lg font-medium"
                                        >
                                            { item.label }
                                        </Link>
                                    </li>
                                )) }
                            </ul>

                        </motion.div>
                    </>
                ) }
            </AnimatePresence>
        </>
    )
}
