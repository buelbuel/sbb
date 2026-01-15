import { useEffect } from "react"

type FAQItem = {
    question: string
    answer: string
}

type FAQSchemaProps = {
    faqs: FAQItem[]
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
    useEffect(() => {
        if (!faqs || faqs.length === 0) return

        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        }

        let script = document.querySelector("script[data-faq-schema]")
        if (!script) {
            script = document.createElement("script")
            script.setAttribute("data-faq-schema", "true")
            script.setAttribute("type", "application/ld+json")
            document.head.appendChild(script)
        }
        script.textContent = JSON.stringify(faqSchema)

        return () => {
            script?.remove()
        }
    }, [faqs])

    return null
}

export default FAQSchema
