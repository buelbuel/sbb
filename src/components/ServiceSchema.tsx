import { useEffect } from "react"

type ServiceArea = string | {
    type: "Country" | "City" | "AdministrativeArea"
    name: string
}

type ServiceSchemaProps = {
    name: string
    description: string
    url: string
    image?: string
    provider?: string
    areaServed?: ServiceArea[]
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
    name,
    description,
    url,
    image,
    provider = "SBB Consult",
    areaServed = [
        { type: "City", name: "Berlin" },
        { type: "Country", name: "Germany" },
        { type: "AdministrativeArea", name: "European Union" },
        { type: "Country", name: "Austria" },
        { type: "Country", name: "Switzerland" }
    ]
}) => {
    useEffect(() => {
        const countryNames: Record<string, string> = {
            DE: "Germany",
            AT: "Austria",
            CH: "Switzerland",
            EU: "European Union"
        }

        const normalizeArea = (area: ServiceArea) => {
            if (typeof area === "string") {
                const name = countryNames[area] ?? area
                const type = name === "European Union" ? "AdministrativeArea" : "Country"
                return { "@type": type, "name": name }
            }

            return { "@type": area.type, "name": area.name }
        }

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
            "areaServed": areaServed.map(normalizeArea),
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
