import PageMeta from "@/components/PageMeta"
import { useTranslation } from "react-i18next"

const Imprint = () => {
    const { t } = useTranslation(['legal', 'common'])
    const sections = t("imprint_sections", { returnObjects: true }) as { title: string; items: string[] }[]

    return (
        <>
            <PageMeta
                title={ t("common:meta.imprint.title") }
                description={ t("common:meta.imprint.description") }
            />

            <section className="py-28">
                <div className="container mx-auto px-6 max-w-4xl space-y-12">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                            { t("imprint_title") }
                        </p>
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                            { t("imprint_heading") }
                        </h1>
                        <p className="text-lg md:text-xl">
                            { t("imprint_intro") }
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
                </div>
            </section>
        </>
    )
}

export default Imprint
