import "../index.css"
import PageMeta from "../components/PageMeta"
import Hero from "../components/Hero"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import baywaLogo from "../assets/logos/baywa.svg"
import peekCloppenburgLogo from "../assets/logos/peek-cloppenburg.svg"
import sennderLogo from "../assets/logos/sennder.svg"
import meinestadtLogo from "../assets/logos/meinestadt.svg"
import nordmetallLogo from "../assets/logos/nordmetall.svg"
import bundesverbandLogo from "../assets/logos/bundesverband.png"
import tuevLogo from "../assets/logos/tuev.jpg"
import nordicdentLogo from "../assets/logos/nordicdent.png"
import traumzaun24Logo from "../assets/logos/traumzaun24.svg"
import secmarketLogo from "../assets/logos/secmarket.svg"
import uberallLogo from "../assets/logos/uberall.svg"
import vaiTradeLogo from "../assets/logos/vaiTrade.png"
import jakobsMedienLogo from "../assets/logos/jakobsMedien.jpg"
type Project = {
    key: string
    logo: string
    theme: "dark" | "light"
    surface: string
    accent: string
    border: string
    featured?: boolean
    tags: string[]
}

const projects: Project[] = [
    {
        key: "baywa",
        logo: baywaLogo,
        theme: "dark",
        surface: "bg-[#0d0f14]",
        accent: "text-white",
        border: "border-white/10",
        featured: true,
        tags: ["Middleware", "Architecture", "Integrations"]
    },
    {
        key: "peek",
        logo: peekCloppenburgLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        featured: true,
        tags: ["Experience Cloud", "CX", "Commerce"]
    },
    {
        key: "sennder",
        logo: sennderLogo,
        theme: "dark",
        surface: "bg-[#0f1116]",
        accent: "text-white",
        border: "border-white/10",
        tags: ["Logistics", "Process", "Data"]
    },
    {
        key: "meinestadt",
        logo: meinestadtLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Lightning", "Migration", "LWC"]
    },
    {
        key: "nordmetall",
        logo: nordmetallLogo,
        theme: "light",
        surface: "bg-[#f7f8ff]",
        accent: "text-[#0b0b0f]",
        border: "border-indigo-100",
        tags: ["Web", "Reach", "Conversion"]
    },
    {
        key: "bundesverband",
        logo: bundesverbandLogo,
        theme: "light",
        surface: "bg-[#fff7f7]",
        accent: "text-[#0b0b0f]",
        border: "border-rose-100",
        tags: ["CRM", "Adoption", "Training"]
    },
    {
        key: "tuev",
        logo: tuevLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-rose-100",
        tags: ["Field Service", "Mobile", "Integration"]
    },
    {
        key: "nordicdent",
        logo: nordicdentLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Service", "Process", "Scale"]
    },
    {
        key: "traumzaun24",
        logo: traumzaun24Logo,
        theme: "light",
        surface: "bg-[#f7f8ff]",
        accent: "text-[#0b0b0f]",
        border: "border-white/10",
        tags: ["CPQ", "Automation", "APEX"]
    },
    {
        key: "secmarket",
        logo: secmarketLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Greenfield", "API", "Workshops"]
    },
    {
        key: "uberall",
        logo: uberallLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Enablement", "Conversion", "Uplift"]
    },
    {
        key: "vaitrade",
        logo: vaiTradeLogo,
        theme: "dark",
        surface: "bg-[#0f1116]",
        accent: "text-white",
        border: "border-white/10",
        tags: ["Sales", "Service", "Scale"]
    },
    {
        key: "jakobs",
        logo: jakobsMedienLogo,
        theme: "dark",
        surface: "bg-[#131319]",
        accent: "text-white",
        border: "border-white/10",
        tags: ["Sales Cloud", "Quotes", "Processes"]
    }
]

const References = () => {
    const { t } = useTranslation()
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <>
            <PageMeta
                title={ t("meta.references.title") }
                description={ t("meta.references.description") }
            />

            <Hero
                title={ t("hero.references.title") }
                description={ t("hero.references.description") }
            />

            {/* Showcase grid inspired by apple.com */ }
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
                { projects.map((project, idx) => {
                    const isOpen = openId === project.key
                    const detail = t(`references.items.${project.key}.detail`, {
                        defaultValue: t(`references.items.${project.key}.description`),
                    })

                    return (
                        <motion.article
                            key={ project.key }
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            viewport={ { once: true, margin: "-50px" } }
                            transition={ {
                                duration: 0.5,
                                delay: idx * 0.05
                            } }
                            className={ `relative border ${project.border} ${project.surface} ${project.accent} shadow-[0_14px_44px_rgba(0,0,0,0.06)] ${project.featured ? "md:col-span-2" : ""}` }
                        >
                            <div className="flex flex-col p-10 md:p-12 gap-10 max-h-[90vh] overflow-y-auto">
                                <div className="flex items-center justify-between">
                                    <img
                                        src={ project.logo }
                                        alt={ t(`references.items.${project.key}.name`) }
                                        className="h-10 md:h-12 w-auto object-contain"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                                        { t(`references.items.${project.key}.name`) }
                                    </h3>
                                    <p className={ `text-lg leading-relaxed ${project.theme === "dark" ? "text-white/80" : "text-neutral-600"}` }>
                                        { t(`references.items.${project.key}.description`) }
                                    </p>
                                    <AnimatePresence>
                                        { isOpen && (
                                            <motion.p
                                                initial={ { opacity: 0 } }
                                                animate={ { opacity: 1 } }
                                                exit={ { opacity: 0 } }
                                                transition={ { duration: 0.3 } }
                                                className={ `text-base leading-relaxed ${project.theme === "dark" ? "text-white/70" : "text-neutral-700"}` }
                                            >
                                                { detail }
                                            </motion.p>
                                        ) }
                                    </AnimatePresence>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                                    { project.tags.map(tag => (
                                        <span
                                            key={ tag }
                                            className={ `inline-flex h-9 px-3 items-center rounded-full border ${project.theme === "dark" ? "border-white/25/10 text-white" : "border-black/10 text-neutral-900"}` }
                                        >
                                            { tag }
                                        </span>
                                    )) }
                                </div>

                                <div>
                                    <motion.button
                                        type="button"
                                        className={ `${project.theme === "dark" ? "text-white" : "text-neutral-900"} inline-flex items-center gap-2 text-sm font-semibold` }
                                        onClick={ () => setOpenId(isOpen ? null : project.key) }
                                        aria-expanded={ isOpen }
                                        whileHover={ { x: 2 } }
                                        transition={ { duration: 0.15 } }
                                    >
                                        { isOpen ? t("references.collapse") : t("references.expand") }
                                        <motion.span
                                            aria-hidden="true"
                                            animate={ { rotate: isOpen ? 180 : 0 } }
                                            transition={ { duration: 0.2 } }
                                        >
                                            →
                                        </motion.span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    )
                }) }
            </section>
        </>
    )
}

export default References
