import CTAButton from "@/components/CTAButton"
import PageMeta from "@/components/PageMeta"
import StructuredData from "@/components/StructuredData"
import Hero from "@/components/Hero"
import SocialLink from "@/components/SocialLink"
import { Database, Layers, GitBranch, Bolt, Compass, ArrowRight, LinkedIn, Mail, Calendar } from "@/components/Icons"
import { useTranslation } from "react-i18next"
import { getSocialLink } from "@/config/social"

export function Home () {
    const { t } = useTranslation(['home', 'common'])

    const cards = [
        {
            icon: Layers,
            key: "architecture",
        },
        {
            icon: GitBranch,
            key: "crm",
        },
        {
            icon: Bolt,
            key: "product",
        },
        {
            icon: Compass,
            key: "ownership",
        },
        {
            icon: Database,
            key: "ai",
        },
    ]

    const linkedinLink = getSocialLink('linkedin')

    const socialLinks = [
        { label: t("footer_cta.linkedin"), href: linkedinLink?.href || "#", icon: LinkedIn },
        { label: t("footer_cta.email"), href: "/contact", icon: Mail },
        { label: t("footer_cta.book"), href: "/contact#booker", icon: Calendar },
    ]

    return (
        <>
            <PageMeta
                title={ t("common:meta.home.title") }
                description={ t("common:meta.home.description") }
                url="https://sbbconsult.de/"
                keywords="Salesforce consulting, CRM implementation, enterprise architecture, AI solutions, product strategy, digital transformation"
            />

            <StructuredData
                breadcrumbs={ [
                    { name: "Home", url: "https://sbbconsult.de/" }
                ] }
                schema={ {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "SBB Consult",
                    "image": "https://sbbconsult.de/logo.png",
                    "description": t("common:meta.home.description"),
                    "url": "https://sbbconsult.de/",
                    "telephone": "+4917631111700",
                    "priceRange": "€€€"
                } }
            />

            {/* HERO */ }
            <Hero
                title={ t("common:hero.home.title") }
                description={ t("common:hero.home.description") }
                ctaLabel={ t("common:hero.home.cta") }
                ctaHref="/contact"
            />

            {/* POSITIONIERUNG */ }
            <section className="py-32 container mx-auto px-6 max-w-245 ">
                <p className="text-2xl md:text-4xl font-bold text-justify">
                    { t("positioning.title") + " " }
                    <span className="text-text-secondary">
                        { t("positioning.text") }
                    </span>
                </p>
            </section>

            {/* AI & DATA SCIENCE */ }
            <section className="py-32 px-6 space-y-16 bg-bg-card-solid">
                <div className="container mx-auto max-w-300 space-y-16">
                    <div className="space-y-8 text-center font-semibold tracking-tight leading-tight">
                        <h2 className="text-4xl md:text-6xl">
                            { t("home:ai.title") }
                        </h2>
                        <p className="text-2xl md:text-4xl text-text-secondary">
                            { t("home:ai.text") }
                        </p>
                    </div>

                    {/* Grid content */ }
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-12 border border-border-subtle rounded-2xl bg-linear-40 from-bg-glass to-fuchsia-400/5">
                        {/* Animated background */ }
                        { (() => {
                            const cards = t("home:ai.cards", { returnObjects: true })
                            return Array.isArray(cards) && cards.map((card: any, idx: number) => (
                                <div key={ idx } className="space-y-2 text-xl text-justify">
                                    <div className='font-bold'>
                                        { card.title + " " }
                                        <span className="text-text-secondary">{ card.subtitle }</span>
                                    </div>
                                    <p className="font-medium">{ card.description }</p>
                                </div>
                            ))
                        })() }
                    </div>
                </div>

                <div className="text-center">
                    <CTAButton href="/services#ai">
                        { t("positioning.cta") }
                    </CTAButton>
                </div>
            </section>

            {/* LEISTUNGEN */ }
            <section className="py-32 container mx-auto px-6 max-w-300 space-y-16">
                <p className="text-2xl md:text-4xl font-bold text-justify">
                    { t("services:focus.title") + " " }
                    <span className="text-text-secondary">
                        { t("services:focus.text") }
                    </span>
                </p>

                <article>
                    { cards.map((item, idx) => {
                        const href = `/services#${item.key}`
                        return (
                            <a
                                key={ item.key }
                                href={ href }
                                className="group relative overflow-hidden block py-12 px-8 md:px-12 transition-colors duration-300"
                            >
                                {/* Background animation */ }
                                <div className="absolute inset-0 -right-64 top-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none">
                                    <item.icon className="w-80 h-80" />
                                </div>

                                {/* Content */ }
                                <div className="relative z-10 md:flex items-center justify-between gap-8">
                                    <div className="md:flex items-start gap-6 flex-1 min-w-0">
                                        <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-2xl md:text-3xl font-semibold group-hover:opacity-70 transition-opacity duration-300 leading-tight">
                                                { t(`services:focus.items.${item.key}.title`) }
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="arrow-link flex items-center gap-2 shrink-0 text-sm font-semibold transition-opacity duration-300 group-hover:opacity-70">
                                        { t("positioning.cta") }
                                        <ArrowRight className="arrow-icon w-4 h-4" />
                                    </div>
                                </div>

                                {/* Divider */ }
                                { idx < cards.length - 1 && (
                                    <div className="absolute bottom-0 left-8 md:left-12 right-8 md:right-12 h-px bg-linear-to-r from-black/5 via-black/10 to-transparent" />
                                ) }
                            </a>
                        )
                    }) }
                </article>

                <div className="text-center">
                    <CTAButton href="/services">
                        { t("common:nav.services") ?? "View all services" }
                    </CTAButton>
                </div>
            </section>

            {/* SOCIAL LINKS */ }
            <section className="py-32 container mx-auto px-6 max-w-6xl text-center space-y-16">
                <h3 className="text-2xl md:text-4xl font-bold">
                    { t("footer_cta.title") }
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    { socialLinks.map(link => (
                        <SocialLink
                            key={ link.label }
                            href={ link.href }
                            label={ link.label }
                            Icon={ link.icon }
                            arrow={ true }
                            newTab={ link.href.startsWith("http") }
                        />
                    )) }
                </div>
            </section>
        </>
    )
}

export default Home
