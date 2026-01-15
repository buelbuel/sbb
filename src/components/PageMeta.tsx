import { useEffect } from "react"

type PageMetaProps = {
    title: string
    description?: string
    keywords?: string
    image?: string
    url?: string
    type?: string
}

const PageMeta: React.FC<PageMetaProps> = ({
    title,
    description,
    keywords,
    image = "https://sbbconsult.de/og-image.png",
    url,
    type = "website"
}) => {
    useEffect(() => {
        document.title = title

        if (description) {
            let meta = document.querySelector("meta[name='description']")
            if (!meta) {
                meta = document.createElement("meta")
                meta.setAttribute("name", "description")
                document.head.appendChild(meta)
            }
            meta.setAttribute("content", description)
        }

        if (keywords) {
            let meta = document.querySelector("meta[name='keywords']")
            if (!meta) {
                meta = document.createElement("meta")
                meta.setAttribute("name", "keywords")
                document.head.appendChild(meta)
            }
            meta.setAttribute("content", keywords)
        }

        const setMetaTag = (property: string, content: string) => {
            let meta = document.querySelector(`meta[property='${property}']`)
            if (!meta) {
                meta = document.createElement("meta")
                meta.setAttribute("property", property)
                document.head.appendChild(meta)
            }
            meta.setAttribute("content", content)
        }

        setMetaTag("og:title", title)
        if (description) setMetaTag("og:description", description)
        setMetaTag("og:type", type)
        if (image) setMetaTag("og:image", image)
        if (url) {
            setMetaTag("og:url", url)
            let canonical = document.querySelector("link[rel='canonical']")
            if (!canonical) {
                canonical = document.createElement("link")
                canonical.setAttribute("rel", "canonical")
                document.head.appendChild(canonical)
            }
            canonical.setAttribute("href", url)
        }

        const setTwitterTag = (name: string, content: string) => {
            let meta = document.querySelector(`meta[name='twitter:${name}']`)
            if (!meta) {
                meta = document.createElement("meta")
                meta.setAttribute("name", `twitter:${name}`)
                document.head.appendChild(meta)
            }
            meta.setAttribute("content", content)
        }

        setTwitterTag("card", "summary_large_image")
        setTwitterTag("title", title)
        if (description) setTwitterTag("description", description)
        if (image) setTwitterTag("image", image)

    }, [title, description, keywords, image, url, type])

    return null
}

export default PageMeta
