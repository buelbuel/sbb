import "../index.css"
import PageMeta from "../components/PageMeta"
import CTAButton from "@/components/CTAButton"
import Card from "../components/Card"
import Hero from "@/components/Hero"
import { Mail, CheckCircle2, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

const Contact = () => {
    const { t } = useTranslation()

    const suitableItems = t("contact.text_col.suitable.items", { returnObjects: true }) as string[]

    return (
        <>
            <PageMeta
                title={ t("meta.contact.title") }
                description={ t("meta.contact.description") }
            />

            {/* HERO */ }
            <Hero
                title={ t("hero.contact.title") }
                description={ t("hero.contact.description") }
            />

            {/* CONTENT */ }
            <section className="py-32 bg-bg-base">
                <div className="container mx-auto px-6 max-w-245">
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
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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

                                <CTAButton href="mailto:hallo@sbb.dev" className="w-full justify-center">
                                    hallo@sbb.dev
                                </CTAButton>
                            </Card>

                            <Card className="p-8 flex items-center justify-between group cursor-pointer border-border-subtle hover:bg-bg-glass dark:hover:bg-bg-glass-dark transition-colors" variant="outline">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                        in
                                    </div>
                                    <a href="https://www.linkedin.com/in/alicem-buelbuel/" className="font-semibold">{ t("contact.contact_col.linkedin") }</a>
                                </div>
                                <ArrowRight className="w-5 h-5 group-hover:opacity-70 transition-opacity" />
                            </Card>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
