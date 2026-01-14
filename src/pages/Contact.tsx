import PageMeta from "@/components/PageMeta"
import CTAButton from "@/components/CTAButton"
import Card from "@/components/Card"
import SocialLink from "@/components/SocialLink"
import { Mail, CheckCircle, ArrowRight, Cv } from "@/components/Icons"
import { useTranslation } from "react-i18next"
import { Booker } from "@/components/Booker"
import { SOCIAL_LINKS } from "@/config/social"
import cvDe from "@/assets/de_cv_9_buelbuel_2026.pdf"
import cvEn from "@/assets/en_cv_9_buelbuel_2026.pdf"

const Contact = () => {
    const { t, i18n } = useTranslation(['contact', 'common'])
    const locale = i18n.language || i18n.resolvedLanguage || "en"
    const cvHref = locale.startsWith("de") ? cvDe : cvEn

    const suitableItems = t("text_col.suitable.items", { returnObjects: true }) as string[]

    return (
        <>
            <PageMeta
                title={ t("common:meta.contact.title") }
                description={ t("common:meta.contact.description") }
            />

            {/* CONTENT */ }
            <section className="py-8">
                <div className="container mx-auto px-6 my-6 max-w-245">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                        {/* Text Column */ }
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl font-semibold leading-tight">
                                { t("text_col.intro") }
                            </p>

                            <p className="text-lg font-medium">
                                { t("text_col.sub") }
                            </p>

                            <Card className="p-8 md:p-10">
                                <h2 className="text-xl font-semibold mb-6">
                                    { t("text_col.suitable.title") }
                                </h2>
                                <ul className="space-y-4">
                                    { suitableItems.map((item, i) => (
                                        <li key={ i } className="flex items-start gap-3 font-medium">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span>{ item }</span>
                                        </li>
                                    )) }
                                </ul>
                            </Card>
                        </div>

                        {/* Contact Column */ }
                        <div className="space-y-6">
                            <Card className="p-10 md:p-12 flex flex-col items-start h-full">
                                <div className="flex items-center gap-6">
                                    <Mail className="w-10 h-10 mb-6" />
                                    <h3 className="text-2xl font-semibold mb-4">
                                        { t("contact_col.title") }
                                    </h3></div>
                                <p className="mb-8 font-medium">
                                    { t("contact_col.text") }
                                </p>

                                <div className="mt-auto flex flex-col gap-3 w-full">
                                    <CTAButton href="mailto:hallo@sbb.dev">
                                        hallo@sbb.dev
                                    </CTAButton>
                                </div>
                            </Card>

                            <SocialLink
                                href={ cvHref }
                                label={ t("contact_col.CV") }
                                Icon={ Cv }
                                arrow={ true }
                                download
                                className="w-full"
                            />

                            {/* Social Links */ }
                            <div className="flex flex-wrap gap-2 justify-between">
                                { SOCIAL_LINKS.map(({ key, href, label, Icon }) => (
                                    <SocialLink
                                        key={ key }
                                        href={ href }
                                        label={ label }
                                        Icon={ Icon }
                                        arrow={ false }
                                        variant="pill"
                                    />
                                )) }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-border-subtle my-6" />

            <section id="booker" className='p-6 max-w-245 mx-auto'>
                <div className="space-y-8">
                    <h2 className='text-2xl md:text-4xl font-semibold leading-tight'>{ t("booker.title") }</h2>
                    <p className='mb-6'>{ t("booker.text") }</p>
                    <Booker />
                </div>
            </section>
        </>
    )
}

export default Contact
