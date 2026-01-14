import PageMeta from "@/components/PageMeta"
import Hero from "@/components/Hero"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import baywaLogo from "@/assets/logos/baywa.svg"
import peekCloppenburgLogo from "@/assets/logos/peek-cloppenburg.svg"
import sennderLogo from "@/assets/logos/sennder.svg"
import meinestadtLogo from "@/assets/logos/meinestadt.svg"
import nordmetallLogo from "@/assets/logos/nordmetall.svg"
import bundesverbandLogo from "@/assets/logos/bundesverband.png"
import tuevLogo from "@/assets/logos/tuev.jpg"
import nordicdentLogo from "@/assets/logos/nordicdent.png"
import traumzaun24Logo from "@/assets/logos/traumzaun24.svg"
import secmarketLogo from "@/assets/logos/secmarket.svg"
import uberallLogo from "@/assets/logos/uberall.svg"
import vaiTradeLogo from "@/assets/logos/vaiTrade.png"
import jakobsMedienLogo from "@/assets/logos/jakobsMedien.jpg"

type Project = {
    key: string
    showName: boolean
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
        showName: false,
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
        showName: false,
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
        showName: false,
        logo: sennderLogo,
        theme: "dark",
        surface: "bg-[#0f1116]",
        accent: "text-white",
        border: "border-white/10",
        tags: ["Logistics", "Process", "Data"]
    },
    {
        key: "meinestadt",
        showName: false,
        logo: meinestadtLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Lightning", "Migration", "LWC"]
    },
    {
        key: "nordmetall",
        showName: true,
        logo: nordmetallLogo,
        theme: "light",
        surface: "bg-[#f7f8ff]",
        accent: "text-[#0b0b0f]",
        border: "border-indigo-100",
        tags: ["Web", "Reach", "Conversion"]
    },
    {
        key: "bundesverband",
        showName: true,
        logo: bundesverbandLogo,
        theme: "light",
        surface: "bg-[#fff7f7]",
        accent: "text-[#0b0b0f]",
        border: "border-rose-100",
        tags: ["CRM", "Adoption", "Training"]
    },
    {
        key: "tuev",
        showName: false,
        logo: tuevLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-rose-100",
        tags: ["Field Service", "Mobile", "Integration"]
    },
    {
        key: "nordicdent",
        showName: false,
        logo: nordicdentLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Service", "Process", "Scale"]
    },
    {
        key: "traumzaun24",
        showName: true,
        logo: traumzaun24Logo,
        theme: "light",
        surface: "bg-[#f7f8ff]",
        accent: "text-[#0b0b0f]",
        border: "border-white/10",
        tags: ["CPQ", "Automation", "APEX"]
    },
    {
        key: "secmarket",
        showName: false,
        logo: secmarketLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Greenfield", "API", "Workshops"]
    },
    {
        key: "uberall",
        showName: false,
        logo: uberallLogo,
        theme: "light",
        surface: "bg-white",
        accent: "text-[#0b0b0f]",
        border: "border-black/5",
        tags: ["Enablement", "Conversion", "Uplift"]
    },
    {
        key: "vaitrade",
        showName: true,
        logo: vaiTradeLogo,
        theme: "dark",
        surface: "bg-[#0f1116]",
        accent: "text-white",
        border: "border-white/10",
        tags: ["Sales", "Service", "Scale"]
    },
    {
        key: "jakobs",
        showName: true,
        logo: jakobsMedienLogo,
        theme: "dark",
        surface: "bg-[#131319]",
        accent: "text-white",
        border: "border-white/10",
        tags: ["Sales Cloud", "Quotes", "Processes"]
    }
]

const References = () => {
    const { t } = useTranslation(['references', 'common'])
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <>
            <PageMeta
                title={ t("common:meta.references.title") }
                description={ t("common:meta.references.description") }
            />

            <Hero
                title={ t("common:hero.references.title") }
                description={ t("common:hero.references.description") }
            />

            {/* Showcase */ }
            <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
                { projects.map((project, idx) => {
                    const isOpen = openId === project.key
                    const detail = t(`items.${project.key}.detail`, {
                        defaultValue: t(`items.${project.key}.description`),
                    })

                    return (
                        <article
                            key={ project.key }

                            className={ `relative border ${project.border} ${project.surface} ${project.accent} shadow-[0_14px_44px_rgba(0,0,0,0.06)] ${project.featured ? "md:col-span-2" : ""}` }
                        >
                            <div className="flex flex-col p-10 md:p-12 gap-10">
                                <div className="flex items-center justify-start gap-6">
                                    <img
                                        src={ project.logo }
                                        alt={ t(`items.${project.key}.name`) }
                                        className="h-10 md:h-12 w-auto object-contain"
                                    />
                                    <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
                                        { project.showName && t(`items.${project.key}.name`) }
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    <p className={ `text-lg ${project.theme === "dark" ? "text-white/80" : "text-neutral-600"}` }>
                                        { t(`items.${project.key}.description`) }
                                    </p>
                                    { isOpen && (
                                        <p
                                            className={ `text-base ${project.theme === "dark" ? "text-white/70" : "text-neutral-700"} animate-fade-in` }
                                        >
                                            { detail }
                                        </p>
                                    ) }
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
                                    <button
                                        type="button"
                                        className={ `${project.theme === "dark" ? "text-white" : "text-neutral-900"} arrow-link inline-flex items-center gap-2 text-sm font-semibold` }
                                        onClick={ () => setOpenId(isOpen ? null : project.key) }
                                        aria-expanded={ isOpen }
                                    >
                                        { isOpen ? t("collapse") : t("expand") }
                                        <span
                                            aria-hidden="true"
                                            className={ `arrow-icon transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` }
                                        >
                                            →
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    )
                }) }
            </section>
        </>
    )
}

export default References
