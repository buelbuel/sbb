import CTAButton from "@/components/CTAButton"
import PageMeta from "@/components/PageMeta"
import Hero from "@/components/Hero"
import { useTranslation } from "react-i18next"
import portrait from "@/assets/portrait.jpg"
import badgeAiAssociate from "@/assets/badge_ai_associate.png"
import badgePlatformAppBuilder from "@/assets/badge_platform_app_builder.png"
import badgePlatformAdministrator from "@/assets/badge_platform_adminstrator.png"
import badgeCpqAdministrator from "@/assets/badge_cpq_administrator.png"
import SocialLink from "@/components/SocialLink"
import { SOCIAL_LINKS } from "@/config/social"

const badges = [
    {
        src: badgeAiAssociate,
        alt: "Berlin Certified Salesforce AI Associate",
    },
    {
        src: badgePlatformAppBuilder,
        alt: "Berlin Certified Salesforce Platform App Builder",
    },
    {
        src: badgePlatformAdministrator,
        alt: "Berlin Certified Salesforce Platform Administrator",
    },
    {
        src: badgeCpqAdministrator,
        alt: "Berlin Certified Salesforce CPQ Administrator",
    },
]

const About = () => {
    const { t } = useTranslation(['about', 'common', 'contact'])

    return (
        <>
            <PageMeta
                title={ t("common:meta.about.title") }
                description={ t("common:meta.about.description") }
            />

            {/* HERO */ }
            <Hero
                title={ t("common:hero.about.title") }
                description={ t("common:hero.about.description") }
            />

            {/* BADGES */ }
            <section className="py-8">
                <div className="container mx-auto px-6 max-w-245">
                    <div className="flex flex-wrap justify-center gap-6">
                        { badges.map(({ src, alt }) => (
                            <img
                                key={ alt }
                                src={ src }
                                alt={ alt }
                                className="h-32 object-contain"
                                loading="lazy"
                            />
                        )) }
                    </div>
                </div>
            </section>

            {/* PROFIL */ }
            <section className="py-32">
                <div className="container mx-auto px-6 max-w-245">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                        <div className="space-y-8">
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                                { t("profile.title") }
                            </h2>

                            <div className="space-y-8 text-xl font-medium">
                                <p dangerouslySetInnerHTML={ { __html: t("profile.p1") } } />
                                <p>{ t("profile.p2") }</p>
                                <p>{ t("profile.p3") }</p>
                            </div>
                        </div>

                        <div className="space-y-10">
                            <figure className="overflow-hidden">
                                <img
                                    src={ portrait }
                                    alt={ t("profile.image_alt") }
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </figure>

                            {/* Philosophy / Approach */ }
                            <div className="space-y-8 text-xl font-medium">
                                <p dangerouslySetInnerHTML={ { __html: t("profile.philosophy.p1") } } />
                                <p>{ t("profile.philosophy.p2") }</p>
                                <p>{ t("profile.philosophy.p3") }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto my-10 max-w-245">
                <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                        { t("contact:contact_col.social.title") }
                    </h3>
                    <p className="text-text-secondary text-base md:text-lg">
                        { t("contact:contact_col.social.subtitle") }
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    { SOCIAL_LINKS.map(({ key, href, label, handle, Icon }) => (
                        <SocialLink
                            key={ key }
                            href={ href }
                            label={ label }
                            handle={ handle }
                            Icon={ Icon }
                            arrow={ true }
                        />
                    )) }
                </div>
            </div>

            {/* CTA */ }
            <section className="py-32 bg-bg-base">
                <div className="container mx-auto px-6 max-w-3xl text-center space-y-8">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        { t("cta.title") }
                    </h2>
                    <p className="text-xl font-medium">
                        { t("cta.text") }
                    </p>
                    <CTAButton href="/contact">
                        { t("common:nav.contact") }
                    </CTAButton>
                </div>
            </section>
        </>
    )
}

export default About
