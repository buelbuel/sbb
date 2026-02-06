import React from "react"
import { Link } from "./Link"
import { useTranslation } from "react-i18next"

const Footer: React.FC = () => {
    const { t } = useTranslation('common')
    const currentYear = new Date().getFullYear()
    const firmName = "Salesforce Beratung Bülbül"

    const footerSections = [
        {
            title: t("footer.sections.discover"),
            links: [
                { label: t("footer.links.home"), href: "/" },
                { label: t("footer.links.about"), href: "/about" },
                { label: t("footer.links.services"), href: "/services" },
                { label: t("footer.links.references"), href: "/references" },
            ],
        },
        {
            title: t("footer.sections.contact"),
            links: [
                { label: t("footer.links.request"), href: "/contact" },
                { label: "LinkedIn", href: "https://linkedin.com/in/alicem-buelbuel" },
                { label: t("footer.links.email"), href: "mailto:kontakt@sbbconsult.de" },
            ],
        },
        {
            title: t("footer.sections.legal"),
            links: [
                { label: t("footer.links.imprint"), href: "/imprint" },
                { label: t("footer.links.privacy"), href: "/privacy" },
            ],
        },
    ]

    return (
        <footer className="bg-bg-base text-[12px] pt-16 pb-8 border-t border-black/5">
            <div className="container mx-auto px-6 max-w-245">
                {/* Upper Footer: Navigation Grid */ }
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    { footerSections.map((section) => (
                        <div key={ section.title }>
                            <h3 className="font-semibold mb-3">
                                { section.title }
                            </h3>
                            <ul className="space-y-2">
                                { section.links.map((link) => (
                                    <li key={ link.label }>
                                        { link.href.startsWith("http") || link.href.startsWith("mailto") ? (
                                            <a
                                                href={ link.href }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline hover:transition-colors"
                                            >
                                                { link.label }
                                            </a>
                                        ) : (
                                            <Link
                                                href={ link.href }
                                                className="hover:underline hover:transition-colors"
                                            >
                                                { link.label }
                                            </Link>
                                        ) }
                                    </li>
                                )) }
                            </ul>
                        </div>
                    )) }
                    <div>
                        <address className="not-italic">
                            <h3 className="font-semibold mb-3">
                                { firmName }
                            </h3>
                            <p>
                                { t("footer.address.street") }<br />
                                { t("footer.address.city") }<br />
                                { t("footer.address.country") }
                            </p>
                        </address>
                    </div>
                </div>

                {/* Lower Footer: Copyright & Legal */ }
                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="whitespace-nowrap">
                        Copyright © { currentYear } { firmName }. { t("footer.copyright") }
                    </p>

                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:underline">
                            { t("footer.links.privacy") }
                        </Link>
                        <Link href="/imprint" className="hover:underline">
                            { t("footer.links.imprint") }
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
