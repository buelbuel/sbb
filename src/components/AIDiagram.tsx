import { Brain, Database, GitBranch, Zap, Users } from "@/components/Icons"

const nodes = [
    { id: "data", label: "Business & CRM Data", Icon: Database, x: 10, y: 50 },
    { id: "models", label: "AI / ML Models", Icon: Brain, x: 40, y: 20 },
    { id: "logic", label: "Automation & Logic", Icon: GitBranch, x: 40, y: 80 },
    { id: "apps", label: "Salesforce & Apps", Icon: Zap, x: 70, y: 30 },
    { id: "users", label: "Users & Customers", Icon: Users, x: 90, y: 60 }
]

const connections: Array<[string, string]> = [
    ["data", "models"],
    ["data", "logic"],
    ["models", "apps"],
    ["logic", "apps"],
    ["apps", "users"]
]

export default function AIDiagram () {
    return (
        <div
            className="relative w-full h-105 rounded-3xl bg-linear-to-br from-indigo-50 via-bg-base to-[#e8e8ed] overflow-hidden"
            role="img"
            aria-label="AI and machine learning architecture diagram showing data flow from Business & CRM Data through AI/ML Models and Automation Logic to Salesforce Apps for Users & Customers"
        >

            {/* SVG connections */ }
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                { connections.map(([from, to]) => {
                    const a = nodes.find(n => n.id === from)!
                    const b = nodes.find(n => n.id === to)!

                    return (
                        <line
                            key={ `${from}-${to}` }
                            x1={ `${a.x}%` }
                            y1={ `${a.y}%` }
                            x2={ `${b.x}%` }
                            y2={ `${b.y}%` }
                            stroke="currentColor"
                            className="text-primary"
                            strokeWidth={ 2 }
                            strokeDasharray="4 4"
                        />
                    )
                }) }
            </svg>

            {/* Nodes */ }
            { nodes.map(({ id, label, Icon, x, y }) => (
                <div
                    key={ id }
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={ { left: `${x}%`, top: `${y}%` } }
                >
                    <div className="w-28 h-28 rounded-2xl bg-bg-base shadow-sm border border-black/5 flex flex-col items-center justify-center text-center gap-2">
                        <Icon className="w-6 h-6" />
                        <span className="text-xs font-semibold leading-tight px-2">
                            { label }
                        </span>
                    </div>
                </div>
            )) }
        </div>
    )
}
