import { useEffect } from "react"

type BreadcrumbItem = {
    name: string
    url: string
}

type BreadcrumbSchemaProps = {
    pathname: string
}

const getBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: "Home", url: "https://sbbconsult.de" }
    ]

    const pathSegments = pathname.split('/').filter(Boolean)

    const pathMap: Record<string, string> = {
        'services': 'Services',
        'about': 'About',
        'references': 'References',
        'contact': 'Contact',
        'imprint': 'Imprint',
        'privacy': 'Privacy',
    }

    if (pathSegments.length > 0) {
        const segment = pathSegments[0]!
        if (pathMap[segment]) {
            breadcrumbs.push({
                name: pathMap[segment],
                url: `https://sbbconsult.de/${segment}`
            })
        }
    }

    return breadcrumbs
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ pathname }) => {
    useEffect(() => {
        const breadcrumbs = getBreadcrumbs(pathname)

        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
            }))
        }

        // Remove old breadcrumb script if exists
        const existing = document.querySelector('script[data-breadcrumb-schema]')
        if (existing) {
            existing.remove()
        }

        // Add new breadcrumb script
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-breadcrumb-schema', 'true')
        script.textContent = JSON.stringify(schema)
        document.head.appendChild(script)
    }, [pathname])

    return null
}

export default BreadcrumbSchema
