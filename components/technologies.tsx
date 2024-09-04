import { cn } from "@/lib/utils"
import Link from "next/link"

export type Technology = {
    label: string
    url: string
    icon: React.ComponentType<{ className?: string }>
    class?: string
}

export type KnowlegeCol = {
    title: string
    technologies: Technology[]
}

export const Technologies = ({
    columns,
    className,
}: {
    columns: KnowlegeCol[]
    className?: string
}) => {
    return (
        <div className={cn("flex flex-wrap justify-between w-full", className)}>
            {columns.map((column, i) => (
                <TechnologyColumn key={column.title} column={column} />
            ))}
        </div>
    )
}

const TechnologyColumn = ({ column }: { column: KnowlegeCol }) => {
    return (
        <div className="flex flex-col mt-6 w-full sm:w-auto items-center sm:items-start">
            <h3 className="text-2xl font-semibold mb-2">{column.title}</h3>
            {column.technologies.map((technologie, i) => (
                <Link key={i} href={technologie.url} target="_blank">
                    <div className="flex flex-row w-[180px] rounded items-center text-lg py-2 px-4 hover:bg-foreground/10 cursor-default">
                        <technologie.icon
                            className={cn("w-6 h-6 mr-3", technologie.class)}
                        />
                        <p>{technologie.label}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
