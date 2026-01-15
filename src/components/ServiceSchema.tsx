import { useEffect } from "react"

type ServiceSchemaProps = {
    name: string
    description: string
    url: string
    image?: string
    provider?: string
    areaServed?: string[]
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
    name,
    description,
    url,
    image,
    provider = "SBB Consult",
    areaServed = ["DE", "CH", "AT"]
}) => {
    useEffect(() => {
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": name,
            "description": description,
            "url": url,
            ...(image && { "image": image }),
            "provider": {
                "@type": "Organization",
                "name": provider,
                "url": "https://sbbconsult.de"
            },
            "areaServed": areaServed.map(area => ({
                "@type": "Country",
                "name": area
            })),
            "serviceType": "Consulting",
            "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": url
            }
        }

        let script = document.querySelector("script[data-service-schema]")
        if (!script) {
            script = document.createElement("script")
            script.setAttribute("data-service-schema", "true")
            script.setAttribute("type", "application/ld+json")
            document.head.appendChild(script)
        }
        script.textContent = JSON.stringify(serviceSchema)

        return () => {
            script?.remove()
        }
    }, [name, description, url, image, provider, areaServed])

    return null
}

export default ServiceSchema
