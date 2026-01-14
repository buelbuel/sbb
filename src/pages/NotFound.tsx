import React from "react"
import CTAButton from "@/components/CTAButton"
import { useTranslation } from "react-i18next"

const NotFound: React.FC = () => {
    const { t } = useTranslation(['legal', 'common'])

    return (
        <section className="min-h-[70vh] flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <h1 className="text-7xl font-semibold mb-6 tracking-tight">
                    { t("notfound.title") }
                </h1>

                <p className="text-xl font-medium mb-12">
                    { t("notfound.text") }
                </p>

                <div className="flex justify-center">
                    <CTAButton href="/">
                        { t("notfound.cta") }
                    </CTAButton>
                </div>
            </div>
        </section>
    )
}

export default NotFound
