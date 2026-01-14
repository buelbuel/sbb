import "../index.css"
import CTAButton from "../components/CTAButton"
import PageMeta from "../components/PageMeta"
import Hero from "../components/Hero"
import { Layers, GitBranch, Bolt, Compass, ArrowRight } from "../components/Icons"
import { useTranslation, Trans } from "react-i18next"

export function Home () {
    const { t } = useTranslation()

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

    const socialLinks = [
        { label: t("home.footer_cta.linkedin"), href: "https://www.linkedin.com/in/alicem-buelbuel/" },
        { label: t("home.footer_cta.email"), href: "/contact" },
        { label: t("home.footer_cta.book"), href: "/contact#booker" },
    ]

    return (
        <>
            <PageMeta
                title={ t("meta.home.title") }
                description={ t("meta.home.description") }
            />

            {/* HERO */ }
            <Hero
                title={ <Trans i18nKey="hero.home.title" components={ { br: <br /> } } /> }
                description={ t("hero.home.description") }
                ctaLabel={ t("hero.home.cta") }
                ctaHref="/contact"
            />

            {/* POSITIONIERUNG - Big Statement */ }
            <section className="py-32">
                <div className="container mx-auto px-6 max-w-245">
                    <div className="text-center space-y-8">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                            <Trans i18nKey="home.positioning.title" components={ { br: <br /> } } />
                        </h2>
                        <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                            { t("home.positioning.text") }
                        </p>
                    </div>
                </div>
            </section>

            {/* LEISTUNGEN - Modern List */ }
            <section className="py-40">
                <div className="container mx-auto px-6 max-w-300">
                    <div className="mb-24 max-w-3xl">
                        <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight leading-tight">
                            { t("meta.services.title").split(" – ")[0] }
                        </h2>
                        <p className="text-xl font-medium leading-relaxed">
                            { t("services.focus.text") }
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
                                                { t(`services.focus.items.${item.key}.title`) }
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0 text-sm font-semibold group-hover:opacity-70 transition-opacity duration-300">
                                        { t("home.positioning.cta") }
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                            { t("nav.services") ?? "View all services" }
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* SOCIAL LINKS / FOOTER CTA */ }
            <section className="py-16 border-t border-gray-100 dark:border-gray-800">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h3 className="text-4xl font-semibold mb-12 tracking-tight">
                        { t("home.footer_cta.title") }
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        { socialLinks.map(link => (
                            <CTAButton
                                key={ link.label }
                                href={ link.href }
                                variant='neutral'
                            >
                                { link.label }
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </CTAButton>
                        )) }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
