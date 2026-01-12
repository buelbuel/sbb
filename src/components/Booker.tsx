import { getCalApi } from "@calcom/embed-react"
import { useEffect, useState } from "react"

export const Booker: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches ||
            document.documentElement.classList.contains('dark')
        setTheme(isDark ? 'dark' : 'light')

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const observer = new MutationObserver(() => {
            const isDark = document.documentElement.classList.contains('dark')
            setTheme(isDark ? 'dark' : 'light')
        })

        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light')
        }

        mediaQuery.addEventListener('change', handleChange)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        })

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({
                namespace: "intro",
                embedJsUrl: "https://app.cal.eu/embed/embed.js"
            })

            const container = document.getElementById("cal-booking")
            if (container) {
                container.innerHTML = ''
            }

            cal("inline", {
                elementOrSelector: "#cal-booking",
                calLink: "sbbdev/intro",
                config: {
                    hideEventTypeDetails: "false",
                    theme: theme
                }
            })

            cal("ui", {
                styles: {
                    branding: { brandColor: "#007AFF" }
                },
                hideEventTypeDetails: false
            })
        })()
    }, [theme])

    return (
        <div
            id="cal-booking"
            style={ { width: "100%", height: "100%", overflow: "scroll" } }
        />
    )
}
