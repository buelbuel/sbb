import PageMeta from "@/components/PageMeta"
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
    logo: string
    theme: "dark" | "light"
}

const allProjects: Project[] = [
    { key: "baywa", logo: baywaLogo, theme: "dark" },
    { key: "peek", logo: peekCloppenburgLogo, theme: "light" },
    { key: "sennder", logo: sennderLogo, theme: "dark" },
    { key: "meinestadt", logo: meinestadtLogo, theme: "light" },
    { key: "nordmetall", logo: nordmetallLogo, theme: "light" },
    { key: "bundesverband", logo: bundesverbandLogo, theme: "light" },
    { key: "tuev", logo: tuevLogo, theme: "light" },
    { key: "nordicdent", logo: nordicdentLogo, theme: "light" },
    { key: "traumzaun24", logo: traumzaun24Logo, theme: "light" },
    { key: "secmarket", logo: secmarketLogo, theme: "light" },
    { key: "uberall", logo: uberallLogo, theme: "light" },
    { key: "vaitrade", logo: vaiTradeLogo, theme: "dark" },
    { key: "jakobs", logo: jakobsMedienLogo, theme: "dark" }
]

// Additional projects from CV (without logos, for stats/mention)
const additionalProjects = [
    "bibliomed", "nec", "evident", "paychex", "raiffeisen",
    "goetzpartners", "enermess", "operatec", "exchange",
    "axians", "mysecondear", "hoehbauer", "glawe",
    "adventure", "index", "zahnarzt"
]

const References = () => {
    const { t } = useTranslation(["references", "common"])
    const [expandedProject, setExpandedProject] = useState<string | null>(null)

    const toggleProject = (key: string) => {
        setExpandedProject(expandedProject === key ? null : key)
    }

    return (
        <>
            <PageMeta
                title={t("common:meta.references.title")}
                description={t("common:meta.references.description")}
            />

            {/* Hero Section */}
            <section className="relative bg-black text-white">
                <div className="pt-28 pb-16 text-center">
                    <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
                        {t("references:section_title")}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium mt-6 text-white/80 max-w-4xl mx-auto px-6">
                        {t("references:description")}
                    </p>
                </div>

                {/* Hero Visual */}
                <div className="relative w-full h-[60vh] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80%] max-w-5xl aspect-video rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-16">
                        {t("references:intro")}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="text-6xl md:text-7xl font-semibold tracking-tight">
                                {allProjects.length + additionalProjects.length}+
                            </div>
                            <div className="text-lg mt-3 text-gray-600">
                                Completed Projects
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl md:text-7xl font-semibold tracking-tight">
                                7+
                            </div>
                            <div className="text-lg mt-3 text-gray-600">
                                Years Experience
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl md:text-7xl font-semibold tracking-tight">
                                10+
                            </div>
                            <div className="text-lg mt-3 text-gray-600">
                                Industries Served
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Grid - 3 Large Cards */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {["baywa", "peek", "sennder"].map((key) => (
                            <div
                                key={key}
                                className="bg-white rounded-3xl p-12 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => toggleProject(key)}
                            >
                                <div className="mb-8">
                                    <img
                                        src={allProjects.find(p => p.key === key)?.logo}
                                        alt={t(`references:items.${key}.name`)}
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">
                                    {t(`references:items.${key}.name`)}
                                </h3>
                                <p className="text-lg text-gray-600 mb-6">
                                    {t(`references:items.${key}.description`)}
                                </p>
                                <button className="text-blue-600 hover:underline text-lg">
                                    {expandedProject === key ? t("references:collapse") : t("references:expand")} →
                                </button>

                                {expandedProject === key && (
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed">
                                            {t(`references:items.${key}.detail`)}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Project List - Full Width Cards */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-6">
                        {allProjects.slice(3).map((project) => (
                            <div
                                key={project.key}
                                className="bg-gray-50 rounded-3xl p-10 md:p-12 hover:bg-gray-100 transition-colors cursor-pointer"
                                onClick={() => toggleProject(project.key)}
                            >
                                <div className="flex items-start justify-between gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-6 mb-6">
                                            <img
                                                src={project.logo}
                                                alt={t(`references:items.${project.key}.name`)}
                                                className="h-10 w-auto object-contain"
                                            />
                                            <h3 className="text-3xl font-semibold">
                                                {t(`references:items.${project.key}.name`)}
                                            </h3>
                                        </div>
                                        <p className="text-xl text-gray-600 mb-4">
                                            {t(`references:items.${project.key}.description`)}
                                        </p>

                                        {expandedProject === project.key && (
                                            <div className="mt-6 pt-6 border-t border-gray-300">
                                                <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
                                                    {t(`references:items.${project.key}.detail`)}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    <button className="text-blue-600 hover:underline text-lg shrink-0">
                                        {expandedProject === project.key ? "−" : "+"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Logos Showcase - Dark Background */}
            <section className="bg-black text-white py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-16 text-center">
                        Trusted by industry leaders
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {allProjects.map((project) => (
                            <div
                                key={project.key}
                                className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center p-8 hover:bg-white/10 transition-colors"
                            >
                                <img
                                    src={project.logo}
                                    alt={t(`references:items.${project.key}.name`)}
                                    className="w-full h-full object-contain filter brightness-0 invert opacity-80"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-white py-32">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">
                        Let's build something together.
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Interested in a collaboration? Get in touch to discuss your project.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Get in touch
                    </a>
                </div>
            </section>
        </>
    )
}

export default References
