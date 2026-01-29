import {
    Bolt,
    Clipboard,
    Lightbulb,
    Zap,
    Check,
    Layers
} from "@/components/Icons"
import CTAButton from "@/components/CTAButton"
import PageMeta from "@/components/PageMeta"
import StructuredData from "@/components/StructuredData"
import ServiceSchema from "@/components/ServiceSchema"
import FAQSchema from "@/components/FAQSchema"
import Hero from "@/components/Hero"
import { useTranslation } from "react-i18next"
import ArchitectureGraph from "@/components/ArchitectureGraph"
import CRMFunnel from "@/components/CRMFunnel"
import OwnershipFlow from "@/components/OwnershipFlow"
import AIDiagram from '@/components/AIDiagram'
import Accordion from "@/components/Accordion"
import Card from "@/components/Card"

const Services = () => {
    const { t } = useTranslation(['services', 'common'])

    const situations = t("situations.items", { returnObjects: true }) as string[]

    const services = [
        {
            key: "architecture",
            icon: Bolt,
            title: t("focus.items.architecture.title"),
            description: t("focus.items.architecture.text"),
            details: t("details.architecture.points", { returnObjects: true }) as string[],
        },
        {
            key: "crm",
            icon: Zap,
            title: t("focus.items.crm.title"),
            description: t("focus.items.crm.text"),
            details: t("details.crm.points", { returnObjects: true }) as string[],
        },
        {
            key: "product",
            icon: Lightbulb,
            title: t("focus.items.product.title"),
            description: t("focus.items.product.text"),
            details: t("details.product.points", { returnObjects: true }) as string[],
        },
        {
            key: "ownership",
            icon: Clipboard,
            title: t("focus.items.ownership.title"),
            description: t("focus.items.ownership.text"),
            details: t("details.ownership.points", { returnObjects: true }) as string[],
        },
        {
            key: "ai",
            icon: Layers,
            title: t("focus.items.ai.title"),
            description: t("focus.items.ai.text"),
            details: t("details.ai.points", { returnObjects: true }) as string[],
        },
    ]

    return (
        <>
            <PageMeta
                title={ t("common:meta.services.title") }
                description={ t("common:meta.services.description") }
                url="https://sbbconsult.de/services"
                keywords="Salesforce consultancy, Salesforce customization, Salesforce architecture, CRM integration, Berlin, Germany, EU, enterprise consulting"
            />

            <StructuredData
                breadcrumbs={ [
                    { name: "Home", url: "https://sbbconsult.de/" },
                    { name: "Services", url: "https://sbbconsult.de/services" }
                ] }
                schema={ {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": t("common:meta.services.title"),
                    "description": t("common:meta.services.description"),
                    "url": "https://sbbconsult.de/services"
                } }
            />

            <Hero
                title={ t("common:hero.services.title") }
                description={ t("common:hero.services.description") }
            />

            {/* SERVICE 1: ARCHITECTURE */ }
            <ServiceSchema
                name={ services?.[0]?.title ?? "Salesforce Solution Design" }
                description={ services?.[0]?.description ?? "" }
                url="https://sbbconsult.de/services#architecture"
            />
            <section id="architecture" className="py-32">
                <div className="container mx-auto px-6 max-w-300">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
                            { services?.[0]?.title ?? "" }
                        </h2>
                        <p className="text-xl font-medium">
                            { services?.[0]?.description ?? "" }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold">{ t("details.architecture.subtitle") }</h3>
                            <ul className="space-y-6">
                                { services?.[0]?.details?.map((point, idx) => (
                                    <li key={ idx } className="flex gap-4 items-start">
                                        <Check className="w-6 h-6 shrink-0 mt-0.5" alt="checkmark" aria-hidden="true" />
                                        <span className="text-xl font-medium">
                                            { point }
                                        </span>
                                    </li>
                                )) }
                            </ul>

                            <div className="space-y-6">
                                <p className="text-xl font-medium">
                                    { t("details.architecture.longtext1") }
                                </p>
                                <p className="text-xl font-medium">
                                    { t("details.architecture.longtext2") }
                                </p>
                            </div>
                        </div>
                        <ArchitectureGraph aria-label="Salesforce architecture diagram showing system integration layers" />
                    </div>

                </div>
            </section>

            {/* SERVICE 2: CRM STRATEGY */ }
            <ServiceSchema
                name={ services?.[1]?.title ?? "Integrations & System Coupling" }
                description={ services?.[1]?.description ?? "" }
                url="https://sbbconsult.de/services#crm"
            />
            <section id="crm" className="py-32 bg-bg-base">
                <div className="container mx-auto px-6 max-w-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                                { services?.[1]?.title ?? "" }
                            </h2>
                            <p className="text-xl font-medium">
                                { services?.[1]?.description ?? "" }
                            </p>

                            <Card className="p-10">
                                <h3 className="text-xl font-bold mb-6">{ t("details.crm.subtitle") }</h3>
                                <ul className="space-y-6">
                                    { services?.[1]?.details?.map((point, idx) => (
                                        <li key={ idx } className="flex gap-4 items-start">
                                            <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" aria-hidden="true" />
                                            <span className="text-xl font-medium">
                                                { point }
                                            </span>
                                        </li>
                                    )) }
                                </ul>
                            </Card>

                            <p className="text-xl font-medium">
                                { t("details.crm.longtext") }
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="h-96 rounded-3xl bg-linear-to-br from-amber-50 via-bg-base to-[#e8e8ed] flex items-center justify-center relative overflow-hidden">
                                <CRMFunnel aria-label="CRM funnel visualization showing customer journey stages" />
                            </div><div className="grid grid-cols-2 gap-6">
                                <Card className="p-8 text-center">
                                    <div className="text-2xl md:text-4xl font-bold mb-2">{ t("details.crm.stats.adoption") }</div>
                                    <p className="text-xl font-medium">{ t("details.crm.stats.adoption_label") }</p>
                                </Card>
                                <Card className="p-8 text-center">
                                    <div className="text-2xl md:text-4xl font-bold mb-2">{ t("details.crm.stats.timeline") }</div>
                                    <p className="text-xl font-medium">{ t("details.crm.stats.timeline_label") }</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            {/* SERVICE 3: PRODUCT */ }
            <ServiceSchema
                name={ services?.[2]?.title ?? "Data Models & Processes" }
                description={ services?.[2]?.description ?? "" }
                url="https://sbbconsult.de/services#product"
            />
            <section id="product" className="py-32 container mx-auto px-6 max-w-300 space-y-16">
                <div className="text-center max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        { services?.[2]?.title ?? "" }
                    </h2>
                </div>

                <p className="text-xl md:text-2xl font-bold text-justify">
                    { services?.[2]?.description ?? "" }
                    <span className="text-text-secondary">
                        { " " + t("details.product.longtext") }
                    </span>
                </p>

                <div className="bg-linear-to-br from-green-50 via-bg-base to-[#e8e8ed] rounded-3xl flex items-center justify-center relative overflow-hidden p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        { services?.[2]?.details?.map((point, idx) => (
                            <div key={ idx } className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold">{ idx + 1 }</span>
                                </div>
                                <p className="text-xl font-medium">
                                    { point }
                                </p>
                            </div>
                        )) }
                    </div>
                </div>
            </section >

            {/* SERVICE 4: OWNERSHIP */ }
            <ServiceSchema
                name={ services?.[3]?.title ?? "Responsibility & Decision Assurance" }
                description={ services?.[3]?.description ?? "" }
                url="https://sbbconsult.de/services#ownership"
            />
            <section id="ownership" className="py-32">
                <div className="container mx-auto px-6 max-w-300">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
                            { services?.[3]?.title ?? "" }
                        </h2>
                        <p className="text-xl font-medium">
                            { services?.[3]?.description ?? "" }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h3 className="text-xl font-bold">{ t("details.ownership.subtitle") }</h3>
                            <ul className="space-y-6">
                                { services?.[3]?.details?.map((point, idx) => (
                                    <li key={ idx } className="flex gap-4 items-start">
                                        <Check className="w-6 h-6 shrink-0 mt-0.5" alt="checkmark" aria-hidden="true" />
                                        <span className="text-xl font-medium">
                                            { point }
                                        </span>
                                    </li>
                                )) }
                            </ul>

                            <div className="space-y-6">
                                <p className="text-xl font-medium">
                                    { t("details.ownership.longtext1") }
                                </p>
                                <p className="text-xl font-medium">
                                    { t("details.ownership.longtext2") }
                                </p>
                            </div>
                        </div>
                        <OwnershipFlow aria-label="Data ownership lifecycle diagram" />
                    </div>
                </div>
            </section>

            {/* SERVICE 5: AI, GPT & DATA SCIENCE */ }
            <ServiceSchema
                name={ services?.[4]?.title ?? "AI, GPT & Data Science" }
                description={ services?.[4]?.description ?? "" }
                url="https://sbbconsult.de/services#ai"
            />
            <section id="ai" className="py-32 bg-bg-base">
                <div className="container mx-auto px-6 max-w-300">

                    {/* Headline */ }
                    <div className="mb-16 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            { services?.[4]?.title }
                        </h2>
                        <p className="text-xl font-medium">
                            { services?.[4]?.description }
                        </p>
                    </div>

                    {/* Diagram */ }
                    <div className="mb-16">
                        <div className="h-96 rounded-3xl bg-linear-to-br from-blue-50 via-bg-base to-[#e8e8ed] flex items-center justify-center relative overflow-hidden">
                            <AIDiagram aria-label="AI and data science architecture showing machine learning pipeline" />
                        </div>
                    </div>

                    {/* Capability statements */ }
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        { services?.[4]?.details?.map((point, idx) => {
                            const [title, text] = point.split(" — ")
                            return (
                                <Card key={ idx } className="p-8 h-full space-y-4">
                                    <p className="text-xl font-bold">
                                        { title }
                                    </p>
                                    <p className="text-xl font-medium">
                                        { text ?? point }
                                    </p>
                                </Card>
                            )
                        }) }
                    </div>

                    {/* Philosophy */ }
                    <div className="space-y-8 text-2xl md:text-4xl font-bold">
                        { t("details.ai.approach_title") + " " }
                        <span className="text-text-secondary">
                            { t("details.ai.longtext1") }
                            { t("details.ai.longtext2") }
                        </span>
                    </div>

                </div>
            </section>

            {/* FAQ Accordion */ }
            <>
                <FAQSchema
                    faqs={ t("faq.items", { returnObjects: true }) as Array<{ question: string; answer: string }> }
                />
                <Accordion
                    title={ t("faq.title") }
                    subtitle={ t("faq.subtitle") }
                    idPrefix="faq"
                    items={ t("faq.items", { returnObjects: true }) as Array<{ question: string; answer: string }> }
                />
            </>

            {/* CTA SECTION */ }
            < section className="py-32 bg-linear-to-br from-text-primary to-[#4b5563]" >
                <div className="container mx-auto px-6 max-w-300 text-center space-y-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                        { t("cta.title") }
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
                        { t("cta.subtitle") }
                    </p>

                    <CTAButton href="/contact#booker">
                        { t("common:nav.contact") }
                    </CTAButton>
                </div>
            </section >
        </>
    )
}

export default Services
