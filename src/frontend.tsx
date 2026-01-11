import { createRoot } from "react-dom/client"
import React, { useEffect, useState, Suspense, lazy } from "react"
import { AnimatePresence, motion } from "framer-motion"
import i18n from "./i18n"

import { Header } from "./components/Header"
import Footer from "./components/Footer"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const References = lazy(() => import("./pages/References"))
const Services = lazy(() => import("./pages/Services"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Imprint = lazy(() => import("./pages/Imprint"))
const Privacy = lazy(() => import("./pages/Privacy"))

function resolvePage (pathname: string) {
    switch (pathname) {
        case "/":
            return <Home />
        case "/about":
            return <About />
        case "/services":
            return <Services />
        case "/contact":
            return <Contact />
        case "/references":
            return <References />
        case "/imprint":
            return <Imprint />
        case "/privacy":
            return <Privacy />
        default:
            return <NotFound />
    }
}

const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#000000]/10 border-t-[#000000]/60 rounded-full animate-spin" />
    </div>
)

const App: React.FC = () => {
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname)
        }

        window.addEventListener("popstate", onLocationChange)
        return () => window.removeEventListener("popstate", onLocationChange)
    }, [])

    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash
            if (hash) {
                setTimeout(() => {
                    const element = document.querySelector(hash)
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                }, 600)
            } else {
                window.scrollTo({ top: 0, behavior: "instant" })
            }
        }

        handleHashScroll()

        window.addEventListener("hashchange", handleHashScroll)
        return () => window.removeEventListener("hashchange", handleHashScroll)
    }, [path])

    useEffect(() => {
        const setLangAttribute = () => {
            const lang = i18n.resolvedLanguage || i18n.language || "de"
            document.documentElement.lang = lang
        }

        setLangAttribute()
        i18n.on("languageChanged", setLangAttribute)
        return () => {
            i18n.off("languageChanged", setLangAttribute)
        }
    }, [])

    return (
        <>
            <Header currentPath={ path } />

            <Suspense fallback={ <PageLoader /> }>
                <AnimatePresence mode="wait">
                    <motion.main
                        key={ path }
                        initial={ { opacity: 0, y: 15, filter: "blur(5px)" } }
                        animate={ { opacity: 1, y: 0, filter: "blur(0px)" } }
                        exit={ { opacity: 0, y: -15, filter: "blur(5px)" } }
                        transition={ { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }
                        className="pt-28 min-h-screen"
                    >
                        { resolvePage(path) }
                    </motion.main>
                </AnimatePresence>
            </Suspense>

            <Footer />
        </>
    )
}

function start () {
    const rootElement = document.getElementById("root")!
    if (!rootElement.hasAttribute("data-root-initialized")) {
        rootElement.setAttribute("data-root-initialized", "true")
        const root = createRoot(rootElement)
        root.render(<App />)
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start)
} else {
    start()
}
