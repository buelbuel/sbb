import "../index.css"
import {
    Bolt,
    Clipboard,
    Lightbulb,
    Zap,
    Check
} from "../components/Icons"
import CTAButton from "../components/CTAButton"
import PageMeta from "../components/PageMeta"
import Hero from "@/components/Hero"
import { useTranslation } from "react-i18next"
import ArchitectureGraph from "../components/ArchitectureGraph"
import CRMFunnel from "../components/CRMFunnel"
import OwnershipFlow from "../components/OwnershipFlow"
import Accordion from "../components/Accordion"
import Card from "../components/Card"

const Services = () => {
    const { t } = useTranslation()

    const situations = t("services.situations.items", { returnObjects: true }) as string[]

    const services = [
        {
            key: "architecture",
            icon: Bolt,
            title: t("services.focus.items.architecture.title"),
            description: t("services.focus.items.architecture.text"),
            details: t("services.details.architecture.points", { returnObjects: true }) as string[],
        },
        {
            key: "crm",
            icon: Zap,
            title: t("services.focus.items.crm.title"),
            description: t("services.focus.items.crm.text"),
            details: t("services.details.crm.points", { returnObjects: true }) as string[],
        },
        {
            key: "product",
            icon: Lightbulb,
            title: t("services.focus.items.product.title"),
            description: t("services.focus.items.product.text"),
            details: t("services.details.product.points", { returnObjects: true }) as string[],
        },
        {
            key: "ownership",
            icon: Clipboard,
            title: t("services.focus.items.ownership.title"),
            description: t("services.focus.items.ownership.text"),
            details: t("services.details.ownership.points", { returnObjects: true }) as string[],
        },
    ]

    return (
        <>
            <PageMeta
                title={ t("meta.services.title") }
                description={ t("meta.services.description") }
            />

            <Hero
                title={ t("hero.services.title") }
                description={ t("hero.services.description") }
            />

            {/* SERVICE 1: ARCHITECTURE */ }
            <section id="architecture" className="py-40">
                <div className="container mx-auto px-6 max-w-300">
                    <div className="mb-12">
                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
                            { services?.[0]?.title ?? "" }

                        </h2>
                        <p className="text-2xl font-medium leading-relaxed">
                            { services?.[0]?.description ?? "" }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-12">
                        <div>
                            <h3 className="text-lg font-semibold mb-6">{ t("services.details.architecture.subtitle") }</h3>
                            <ul className="space-y-4">
                                { services?.[0]?.details?.map((point, idx) => (
                                    <li key={ idx } className="flex gap-4 items-start">
                                        <Check className="w-6 h-6 shrink-0 mt-0.5" strokeWidth={ 2.5 } />
                                        <span className="text-base leading-relaxed font-medium">
                                            { point }
                                        </span>
                                    </li>
                                )) }
                            </ul>
                        </div>
                        <ArchitectureGraph />
                    </div>

                    <div className="prose prose-invert max-w-none mb-16">
                        <p className="text-lg leading-relaxed mb-8">
                            { t("services.details.architecture.longtext1") }
                        </p>
                        <p className="text-lg leading-relaxed">
                            { t("services.details.architecture.longtext2") }
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE 2: CRM STRATEGY */ }
            <section id="crm" className="py-40 bg-bg-base">
                <div className="container mx-auto px-6 max-w-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                                { services?.[1]?.title ?? "" }
                            </h2>
                            <p className="text-xl font-medium leading-relaxed mb-10">
                                { services?.[1]?.description ?? "" }
                            </p>

                            <Card className="p-10 mb-10">
                                <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">{ t("services.details.crm.subtitle") }</h3>
                                <ul className="space-y-5">
                                    { services?.[1]?.details?.map((point, idx) => (
                                        <li key={ idx } className="flex gap-4 items-start">
                                            <div className="w-2 h-2 rounded-full mt-2.5 shrink-0" />
                                            <span className="text-base leading-relaxed">
                                                { point }
                                            </span>
                                        </li>
                                    )) }
                                </ul>
                            </Card>

                            <p className="text-base leading-relaxed">
                                { t("services.details.crm.longtext") }
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="h-96 rounded-3xl bg-linear-to-br from-amber-50 via-bg-base to-[#e8e8ed] flex items-center justify-center relative overflow-hidden">
                                <CRMFunnel />
                            </div><div className="grid grid-cols-2 gap-6">
                                <Card className="p-8 text-center">
                                    <div className="text-3xl font-bold mb-2">{ t("services.details.crm.stats.adoption") }</div>
                                    <p className="text-sm">{ t("services.details.crm.stats.adoption_label") }</p>
                                </Card>
                                <Card className="p-8 text-center">
                                    <div className="text-3xl font-bold mb-2">{ t("services.details.crm.stats.timeline") }</div>
                                    <p className="text-sm">{ t("services.details.crm.stats.timeline_label") }</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

            {/* SERVICE 3: PRODUCT */ }
            <section id="product" className="py-40" >
                <div className="container mx-auto px-6 max-w-300">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                            { services?.[2]?.title ?? "" }
                        </h2>
                        <p className="text-2xl font-medium leading-relaxed mb-6">
                            { services?.[2]?.description ?? "" }
                        </p>
                    </div>



                    <div className="bg-linear-to-br from-green-50 via-bg-base to-[#e8e8ed] rounded-3xl flex items-center justify-center relative overflow-hidden mb-16 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            { services?.[2]?.details?.map((point, idx) => (
                                <div key={ idx } className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                                        <span className="text-sm font-bold">{ idx + 1 }</span>
                                    </div>
                                    <p className="text-base leading-relaxed font-medium">
                                        { point }
                                    </p>
                                </div>
                            )) }
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none text-center">
                        <p className="text-lg leading-relaxed mx-auto max-w-2xl">
                            { t("services.details.product.longtext") }
                        </p>
                    </div>
                </div>
            </section >

            {/* SERVICE 4: OWNERSHIP */ }
            <section id="ownership" className="py-40 bg-bg-base" >
                <div className="container mx-auto px-6 max-w-300">
                    <div className="mb-16">
                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
                            { services?.[3]?.title ?? "" }
                        </h2>
                        <p className="text-2xl font-medium leading-relaxed">
                            { services?.[3]?.description ?? "" }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <h3 className="text-xl font-semibold mb-6">{ t("services.details.ownership.subtitle") }</h3>
                            <ul className="space-y-6">
                                { services?.[3]?.details?.map((point, idx) => (
                                    <li key={ idx } className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-text-primary mt-3 shrink-0" />
                                        <span className="text-base leading-relaxed font-medium">
                                            { point }
                                        </span>
                                    </li>
                                )) }
                            </ul>
                        </div>
                        <OwnershipFlow />
                    </div>

                    <Card className="p-12">
                        <p className="text-base leading-relaxed mb-6">
                            { t("services.details.ownership.longtext1") }
                        </p>
                        <p className="text-base leading-relaxed">
                            { t("services.details.ownership.longtext2") }
                        </p>
                    </Card>
                </div>
            </section >

            {/* FAQ Accordion */ }
            <Accordion
                title={ t("services.faq.title") }
                subtitle={ t("services.faq.subtitle") }
                idPrefix="faq"
                items={ t("services.faq.items", { returnObjects: true }) as Array<{ question: string; answer: string }> }
            />

            {/* CTA SECTION */ }
            < section className="py-40 bg-linear-to-br from-text-primary to-[#4b5563]" >
                <div className="container mx-auto px-6 max-w-300 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white tracking-tight">
                        { t("services.cta.title") }
                    </h2>
                    <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto font-medium">
                        { t("services.cta.subtitle") }
                    </p>

                    <CTAButton href="/contact#booker">
                        { t("nav.contact") }
                    </CTAButton>
                </div>
            </section >
        </>
    )
}

export default Services
