import Image from "next/image"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from "next/link"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"
import { Eye, Star } from "lucide-react"

export type Technology = {
    tooltip: string
    url: string
    icon: React.ComponentType<{ className?: string }>
    class?: string
}

export type Link = {
    tooltip: string
    url: string
    icon: React.ComponentType<{ className?: string }>
    class?: string
}

export type ProjectType = {
    title: string
    thumbnail: string
    description: string
    technologies: Technology[]
    links: Link[]
    state: string
}

export type StateInfo = {
    label: string
    class: string
}

export const Projects = ({
    projects,
    getStateInfo,
    className,
}: {
    projects: ProjectType[]
    getStateInfo: (state: string) => StateInfo
    className?: string
}) => {
    return (
        <div className={cn("space-y-4", className)}>
            {projects.map((project, i) => (
                <Project
                    key={project.title}
                    project={project}
                    getStateInfo={getStateInfo}
                />
            ))}
        </div>
    )
}

const Project = ({
    project,
    getStateInfo,
}: {
    project: ProjectType
    getStateInfo: (state: string) => StateInfo
}) => {
    return (
        <div className="rounded-[0.9rem] bg-gradient-to-r hover:bg-gradient-to-45 bg-card shadow-sm border w-full min-w-[25rem] md:p-[2px]">
            <div className="flex flex-col md:flex-row rounded-xl bg-card text-card-foreground group">
                <div className="relative md:m-5">
                    <Badge
                        className={cn(
                            "z-50 w-max absolute border-transparent top-0 -translate-y-1/2 -left-2 lg:translate-x-0 cursor-default",
                            getStateInfo(project.state).class
                        )}
                    >
                        {getStateInfo(project.state).label}
                    </Badge>
                    <Image
                        className="flex w-full h-full object-cover rounded-xl aspect-[16/9] md:border md:max-w-[24rem]"
                        src={project.thumbnail}
                        alt={`Thumbnail of ${project.title}`}
                        width={9999}
                        height={9999}
                    />
                </div>

                <div className="flex flex-row w-full h-full">
                    <div className="flex flex-col p-4">
                        <div className="flex flex-row items-center">
                            <h3 className="text-2xl font-semibold">
                                {project.title}
                            </h3>

                            <div className="ml-4 space-x-1 visible group-hover:visible md:invisible">
                                {project.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        className={link.class}
                                        target="_blank"
                                    >
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <div className="p-2 rounded-sm hover:bg-accent hover:text-accent-foreground">
                                                        <link.icon className="w-6 h-6 rounded-md transition" />
                                                    </div>
                                                    <TooltipContent>
                                                        <p>{link.tooltip}</p>
                                                    </TooltipContent>
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row space-x-[12px] mb-1">
                            <div className="flex flex-row items-center space-x-[6px] cursor-default">
                                <Eye className="w-4 h-4" />
                                <p className="text-base">554 Views</p>
                            </div>
                            <div className="flex flex-row items-center space-x-[6px] cursor-default">
                                <Star className="w-4 h-4" />
                                <p className="text-base">53 Stars</p>
                            </div>
                        </div>

                        <p className="text-base text-muted-foreground line-clamp-2">
                            {project.description}
                        </p>

                        <div className="flex flex-row pt-2 gap-4 items-center mt-2">
                            {project.technologies.map((technologie, i) => (
                                <TooltipProvider key={i}>
                                    <Tooltip>
                                        <TooltipTrigger className="h-fit rounded-md ">
                                            <Link
                                                href={technologie.url}
                                                target="_blank"
                                            >
                                                <technologie.icon
                                                    className={cn(
                                                        "w-8 h-full aspect-square text-muted-foreground hover:text-card-foreground/90",
                                                        technologie.class
                                                    )}
                                                />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent className="flex flex-row w-fit">
                                            <p>{technologie.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
