import { serve } from "bun"
import index from "./index.html"

serve({
    routes: {
        "/": index,
        "/about": index,
        "/services": index,
        "/contact": index,
        "/imprint": index,
        "/privacy": index,
        "/*": index,
    },

    development: process.env.NODE_ENV !== "production" && {
        hmr: true,
        console: true,
    },
})

console.log("🚀 Server running")
