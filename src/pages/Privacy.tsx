import PageMeta from "@/components/PageMeta"
import CTAButton from "@/components/CTAButton"
import { useTranslation } from "react-i18next"

const Privacy = () => {
    const { t } = useTranslation(['legal', 'common'])
    const sections = t("privacy_sections", { returnObjects: true }) as { title: string; items: string[] }[]

    return (
        <>
            <PageMeta
                title={ t("common:meta.privacy.title") }
                description={ t("common:meta.privacy.description") }
            />

            <section className="py-28">
                <div className="container mx-auto px-6 max-w-4xl space-y-12">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                            { t("privacy_title") }
                        </p>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                            { t("privacy_heading") }
                        </h1>
                        <p className="text-lg md:text-xl">
                            { t("privacy_intro") }
                        </p>
                    </div>

                    <div className="space-y-10">
                        { sections.map(section => (
                            <>
                                <h2 className="text-2xl font-semibold mb-4">
                                    { section.title }
                                </h2>
                                <ul className="space-y-3 text-lg">
                                    { section.items.map((item, idx) => (
                                        <li key={ idx }>{ item }</li>
                                    )) }
                                </ul>
                            </>
                        )) }
                    </div>

                    <div className="bg-[#0f172a] text-white rounded-2xl p-8 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-2">
                                { t("privacy_contact_label") }
                            </p>
                            <p className="text-lg md:text-xl font-semibold">
                                { t("privacy_contact_text") }
                            </p>
                        </div>
                        <CTAButton href="/contact">
                            { t("privacy_contact_cta") }
                        </CTAButton>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Privacy
