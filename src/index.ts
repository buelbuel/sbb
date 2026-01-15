import { serve } from "bun"
import index from "@/index.html"

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
                headers: { "Content-Type": "application/xml" },
            }),
        "/robots.txt": () =>
            new Response(Bun.file("public/robots.txt"), {
                headers: { "Content-Type": "text/plain" },
            }),
    },

    development: process.env.NODE_ENV !== "production" && {
        hmr: true,
        console: true,
    },
})

console.log("🚀 Server running")
