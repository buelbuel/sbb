import { useEffect, useRef, useState } from "react"

interface LazyImageProps {
    src: string
    alt: string
    width?: number | string
    height?: number | string
    className?: string
    placeholder?: string
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    width,
    height,
    className = "",
    placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3C/svg%3E"
}) => {
    const imgRef = useRef<HTMLImageElement>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && imgRef.current) {
                        imgRef.current.src = src
                        imgRef.current.onload = () => setIsLoaded(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.01, rootMargin: "50px" }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [src])

    return (
        <img
            ref={ imgRef }
            src={ placeholder }
            alt={ alt }
            width={ width }
            height={ height }
            className={ `${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-50"}` }
            loading="lazy"
        />
    )
}

export default LazyImage
