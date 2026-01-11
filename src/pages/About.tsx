import "../index.css"
import CTAButton from "../components/CTAButton"
import PageMeta from "../components/PageMeta"
import Hero from "@/components/Hero"
import { useTranslation } from "react-i18next"
import portrait from "../assets/portrait.jpg"

const About = () => {
    const { t } = useTranslation()

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
