import "../index.css"
import CTAButton from "../components/CTAButton"
import PageMeta from "../components/PageMeta"
import Hero from "@/components/Hero"
import { useTranslation } from "react-i18next"
import portrait from "../assets/portrait.jpg"
import { LinkedIn, GitHub, Trailhead } from '@/components/Icons'
import { ArrowRight } from "@/components/Icons"

const About = () => {
    const { t } = useTranslation()

    const socialLinks = [
        {
            key: "linkedin",
            href: "https://www.linkedin.com/in/alicem-buelbuel/",
            label: t("contact.contact_col.linkedin"),
            handle: t("contact.contact_col.social.linkedin_handle"),
            Icon: LinkedIn
        },
        {
            key: "trailhead",
            href: "https://www.salesforce.com/trailblazer/alicemb",
            label: t("contact.contact_col.trailhead"),
            handle: t("contact.contact_col.social.trailhead_handle"),
            Icon: Trailhead
        },
        {
            key: "github",
            href: "https://github.com/buelbuel",
            label: t("contact.contact_col.github"),
            handle: t("contact.contact_col.social.github_handle"),
            Icon: GitHub
        }
    ]

    return (
        <>
            <PageMeta
                title={ t("meta.about.title") }
                description={ t("meta.about.description") }
            />

            {/* HERO */ }
            <Hero
                title={ t("hero.about.title") }
                description={ t("hero.about.description") }
            />

            {/* PROFIL */ }
            <section className="py-32">
                <div className="container mx-auto px-6 max-w-245">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-semibold mb-10 tracking-tight">
                                { t("about.profile.title") }
                            </h2>

                            <div className="space-y-8 text-xl leading-relaxed font-medium">
                                <p dangerouslySetInnerHTML={ { __html: t("about.profile.p1") } } />
                                <p>{ t("about.profile.p2") }</p>
                                <p>{ t("about.profile.p3") }</p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <figure className="overflow-hidden">
                                <img
                                    src={ portrait }
                                    alt="Portrait"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </figure>

                            {/* Philosophy / Approach */ }
                            <div className="space-y-8 text-xl leading-relaxed font-medium">
                                <p dangerouslySetInnerHTML={ { __html: t("about.profile.philosophy.p1") } } />
                                <p>{ t("about.profile.philosophy.p2") }</p>
                                <p>{ t("about.profile.philosophy.p3") }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto my-10 max-w-245">
                <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                        { t("contact.contact_col.social.title") }
                    </h3>
                    <p className="text-text-secondary text-base md:text-lg">
                        { t("contact.contact_col.social.subtitle") }
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    { socialLinks.map(({ key, href, label, handle, Icon }) => (
                        <a
                            key={ key }
                            href={ href }
                            target="_blank"
                            rel="noreferrer"
                            className="group relative flex items-center gap-4 rounded-3xl border border-border-subtle bg-bg-glass p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                                <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-base">{ label }</div>
                                <div className="text-sm text-text-secondary truncate">{ handle }</div>
                            </div>
                            <ArrowRight className="h-5 w-5 shrink-0 opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                        </a>
                    )) }
                </div>
            </div>

            {/* CTA */ }
            <section className="py-32 bg-bg-base">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-4xl font-semibold mb-8 tracking-tight">
                        { t("about.cta.title") }
                    </h2>
                    <p className="text-xl text-text-secondary font-medium mb-10">
                        { t("about.cta.text") }
                    </p>
                    <CTAButton href="/contact">
                        { t("nav.contact") }
                    </CTAButton>
                </div>
            </section>
        </>
    )
}

export default About
