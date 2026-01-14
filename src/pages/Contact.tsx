import "../index.css"
import PageMeta from "../components/PageMeta"
import CTAButton from "@/components/CTAButton"
import Card from "../components/Card"
import { Mail, CheckCircle, ArrowRight } from "@/components/Icons"
import { useTranslation } from "react-i18next"
import { Booker } from "../components/Booker"
import { LinkedIn, GitHub, Trailhead } from '@/components/Icons'
import cvDe from "../assets/de_cv_9_buelbuel_2026.pdf"
import cvEn from "../assets/en_cv_9_buelbuel_2026.pdf"

const Contact = () => {
    const { t, i18n } = useTranslation()
    const locale = i18n.language || i18n.resolvedLanguage || "en"
    const cvHref = locale.startsWith("de") ? cvDe : cvEn

    const suitableItems = t("contact.text_col.suitable.items", { returnObjects: true }) as string[]

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
                title={ t("meta.contact.title") }
                description={ t("meta.contact.description") }
            />

            {/* CONTENT */ }
            <section className="py-8">

                <div className="container mx-auto my-6 max-w-245">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                        {/* Text Column */ }
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl font-semibold leading-tight">
                                { t("contact.text_col.intro") }
                            </p>

                            <p className="text-lg leading-relaxed font-medium">
                                { t("contact.text_col.sub") }
                            </p>

                            <Card className="p-8 md:p-10">
                                <h2 className="text-xl font-semibold mb-6">
                                    { t("contact.text_col.suitable.title") }
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
                                <Mail className="w-10 h-10 mb-6" strokeWidth={ 1.5 } />
                                <h3 className="text-2xl font-semibold mb-4">
                                    { t("contact.contact_col.title") }
                                </h3>
                                <p className="mb-8 font-medium">
                                    { t("contact.contact_col.text") }
                                </p>

                                <div className="mt-auto flex flex-col gap-3 w-full">
                                    <CTAButton href="mailto:hallo@sbb.dev">
                                        hallo@sbb.dev
                                    </CTAButton>
                                </div>
                            </Card>

                            <Card className="p-8 flex items-center justify-between group cursor-pointer border-border-subtle hover:bg-bg-glass transition-colors" variant="outline">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-bg-glass-dark flex items-center justify-center text-white">
                                        cv
                                    </div>
                                    <a href={ cvHref } download className="font-semibold">
                                        { t("contact.contact_col.CV") }
                                    </a>
                                </div>
                                <ArrowRight className="w-5 h-5 group-hover:opacity-70 transition-opacity" />
                            </Card>

                            {/* Social Links - Single Row with Text */ }
                            <div className="flex flex-wrap gap-2 justify-between">
                                { socialLinks.map(({ key, href, label, Icon }) => (
                                    <a
                                        key={ key }
                                        href={ href }
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center gap-2 rounded-xl border border-border-subtle bg-bg-glass px-3 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40"
                                    >
                                        <Icon className="w-5 h-5" />
                                        { label }
                                    </a>
                                )) }
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            <div className="border-t border-border-subtle mt-12" />
            <section id="booker" className='py-8 max-w-245 mx-auto'>
                <div className="space-y-8">
                    <h2 className='text-2xl md:text-4xl font-semibold leading-tight'>{ t("contact.booker.title") }</h2>
                    <p className='mb-6'>{ t("contact.booker.text") }</p>
                    <Booker />
                </div>
            </section>
        </>
    )
}

export default Contact
