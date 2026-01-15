import { useEffect } from "react"

type BreadcrumbItem = {
    name: string
    url: string
}

type StructuredDataProps = {
    breadcrumbs?: BreadcrumbItem[]
    schema?: Record<string, any>
}

const StructuredData: React.FC<StructuredDataProps> = ({ breadcrumbs, schema }) => {
    useEffect(() => {
        if (breadcrumbs && breadcrumbs.length > 0) {
            const breadcrumbSchema = {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.name,
                    "item": item.url
                }))
            }

            let script = document.querySelector("script[data-breadcrumb-schema]")
            if (!script) {
                script = document.createElement("script")
                script.setAttribute("data-breadcrumb-schema", "true")
                script.setAttribute("type", "application/ld+json")
                document.head.appendChild(script)
            }
            script.textContent = JSON.stringify(breadcrumbSchema)
        }

        if (schema) {
            let script = document.querySelector("script[data-custom-schema]")
            if (!script) {
                script = document.createElement("script")
                script.setAttribute("data-custom-schema", "true")
                script.setAttribute("type", "application/ld+json")
                document.head.appendChild(script)
            }
            script.textContent = JSON.stringify(schema)
        }

    }, [breadcrumbs, schema])

    return null
}

export default StructuredData
