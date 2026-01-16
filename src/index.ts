import { serve } from "bun"
import index from "@/index.html"

const cacheHeaders = {
    js: "public, max-age=31536000, immutable",
    css: "public, max-age=31536000, immutable",
    image: "public, max-age=31536000, immutable",
    font: "public, max-age=31536000, immutable",
    html: "public, max-age=0, must-revalidate",
}

const getContentType = (path: string): string => {
    if (path.endsWith('.js')) return 'application/javascript'
    if (path.endsWith('.css')) return 'text/css'
    if (path.endsWith('.html')) return 'text/html'
    if (path.endsWith('.json')) return 'application/json'
    if (path.endsWith('.png')) return 'image/png'
    if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg'
    if (path.endsWith('.svg')) return 'image/svg+xml'
    if (path.endsWith('.webp')) return 'image/webp'
    if (path.endsWith('.woff2')) return 'font/woff2'
    if (path.endsWith('.woff')) return 'font/woff'
    return 'application/octet-stream'
}

const getCacheControl = (path: string): string => {
    if (path.endsWith('.js')) return cacheHeaders.js
    if (path.endsWith('.css')) return cacheHeaders.css
    if (path.match(/\.(png|jpg|jpeg|svg|webp|gif|ico)$/)) return cacheHeaders.image
    if (path.match(/\.(woff2|woff|ttf|eot)$/)) return cacheHeaders.font
    if (path.endsWith('.html')) return cacheHeaders.html
    return 'public, max-age=3600'
}

serve({
    routes: {
        "/": index,
        "/about": index,
        "/services": index,
        "/contact": index,
        "/imprint": index,
        "/privacy": index,
        "/test": index,
        "/*": index,
        "/sitemap.xml": () =>
            new Response(Bun.file("public/sitemap.xml"), {
                headers: {
                    "Content-Type": "application/xml",
                    "Cache-Control": "public, max-age=86400",
                },
            }),
        "/robots.txt": () =>
            new Response(Bun.file("public/robots.txt"), {
                headers: {
                    "Content-Type": "text/plain",
                    "Cache-Control": "public, max-age=86400",
                },
            }),
    },

    development: process.env.NODE_ENV !== "production" && {
        hmr: true,
        console: true,
    },

    websocket: {
        open () { },
        close () { },
        message () { },
    },

    fetch (req) {
        const url = new URL(req.url)
        const path = url.pathname

        if (path.match(/\.(js|css|png|jpg|jpeg|svg|webp|gif|ico|woff2|woff|ttf|eot)$/)) {
            const file = Bun.file(`dist${path}`)
            const headers = new Headers({
                "Content-Type": getContentType(path),
                "Cache-Control": getCacheControl(path),
            })

            if (path.match(/\.(js|css|html|json|svg)$/)) {
                const acceptEncoding = req.headers.get('accept-encoding') || ''
                if (acceptEncoding.includes('br')) {
                    headers.set('Content-Encoding', 'br')
                } else if (acceptEncoding.includes('gzip')) {
                    headers.set('Content-Encoding', 'gzip')
                }
            }

            return new Response(file, { headers })
        }

        return undefined
    },
})

console.log("🚀 Server running")
