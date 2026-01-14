import CTAButton from "@/components/CTAButton"
import PageMeta from "@/components/PageMeta"
import Hero from "@/components/Hero"
import SocialLink from "@/components/SocialLink"
import { Layers, GitBranch, Bolt, Compass, ArrowRight, LinkedIn, Mail, Calendar } from "@/components/Icons"
import { useTranslation, Trans } from "react-i18next"
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
            />

            {/* HERO */ }
            <Hero
                title={ <Trans i18nKey="common:hero.home.title" components={ { br: <br /> } } /> }
                description={ t("common:hero.home.description") }
                ctaLabel={ t("common:hero.home.cta") }
                ctaHref="/contact"
            />

            {/* POSITIONIERUNG - Big Statement */ }
            <section className="py-32">
                <div className="container mx-auto px-6 max-w-245">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                            <Trans i18nKey="home:positioning.title" components={ { br: <br /> } } />
                        </h2>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-bold text-text-secondary text-justify">
                            { t("positioning.text") }
                        </p>
                    </div>
                </div>
            </section>

            {/* LEISTUNGEN - Modern List */ }
            <section className="py-40">
                <div className="container mx-auto px-6 max-w-300">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight leading-tight">
                            { t("common:meta.services.title").split(" – ")[0] }
                        </h2>
                        <p className="text-xl font-medium">
                            { t("services:focus.text") }
                        </p>
                    </div>

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

                    <div className="mt-6 text-center">
                        <CTAButton href="/services">
                            { t("common:nav.services") ?? "View all services" }
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* SOCIAL LINKS / FOOTER CTA */ }
            <section className="py-16 border-t border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h3 className="text-4xl font-semibold mb-12 tracking-tight">
                        { t("footer_cta.title") }
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
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
                </div>
            </section>
        </>
    )
}

export default Home
