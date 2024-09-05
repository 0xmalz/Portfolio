"use client"

import { ProjectType, StateInfo, Projects } from "@/components/projects"
import { SiResend, SiTypescript, SiShadcnui } from "react-icons/si"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { FaGithub as Github } from "react-icons/fa"

import { Link } from "lucide-react"
import { KnowlegeCol, Technologies } from "@/components/technologies"
import {
    AfterEffects,
    Cplusplus,
    Csharp,
    Docker,
    Figma,
    Git,
    Illustrator,
    InteliJ,
    Java,
    Javascript,
    Jira,
    NodeJS,
    Photoshop,
    PyCharm,
    Python,
    React,
    Slack,
    Svelte,
    Trello,
    Typescript,
    Vscode,
} from "@/public/icons"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"

const projects: ProjectType[] = [
    {
        title: "Portfolio",
        thumbnail:
            "https://asset.gecdesigns.com/img/wallpapers/aesthetic-landscape-reflection-background-hd-wallpaper-sr10012410-1706502139247-cover.webp",
        description:
            "This portfolio is an attempt to express my professional self and explain the rapidly evolving world of technology in simple terms that everyone can understand.",
        technologies: [
            {
                tooltip: "NextJS",
                url: "https://nextjs.org",
                icon: RiNextjsFill,
                class: "w-[2rem] h-[2rem]",
            },
            {
                tooltip: "Typescript",
                url: "https://typescriptlang.org",
                icon: SiTypescript,
                class: "w-[1.61rem] h-[1.61rem] hover:text-[#3178C6]",
            },
            {
                tooltip: "Tailwind CSS",
                url: "https://tailwindcss.com/",
                icon: RiTailwindCssFill,
                class: "w-[1.6rem] h-[1.6rem] hover:text-[#06b6d4]",
            },
            {
                tooltip: "Shadcn UI",
                url: "https://ui.shadcn.com/",
                icon: SiShadcnui,
                class: "w-[1.4rem] h-[1.4rem]",
            },
            {
                tooltip: "Resend",
                url: "https://resend.com/",
                icon: SiResend,
                class: "w-[1.35rem] h-[1.35rem]",
            },
        ],
        links: [
            {
                tooltip: "View on Github",
                url: "https://github.com/dpaulos6/portfolio",
                icon: Github,
            },
            {
                tooltip: "Visit Website",
                url: "https://github.com/dpaulos6/portfolio",
                icon: Link,
            },
        ],
        state: "beta",
    },
    {
        title: "My Nutrition",
        thumbnail:
            "https://static.vecteezy.com/system/resources/previews/036/597/885/non_2x/ai-generated-healthy-food-store-advertisment-background-with-copy-space-free-photo.jpg",
        description:
            "The modern way to live healthy, with everything you need to stay active and track your goals. Join the community or become part of the development team, anyway we'd love to see you!",
        technologies: [
            {
                tooltip: "NextJS",
                url: "https://nextjs.org",
                icon: RiNextjsFill,
                class: "w-[2rem] h-[2rem]",
            },
            {
                tooltip: "Typescript",
                url: "https://typescriptlang.org",
                icon: SiTypescript,
                class: "w-[1.61rem] h-[1.61rem] hover:text-[#3178C6]",
            },
            {
                tooltip: "Tailwind CSS",
                url: "https://tailwindcss.com/",
                icon: RiTailwindCssFill,
                class: "w-[1.6rem] h-[1.6rem] hover:text-[#06b6d4]",
            },
            {
                tooltip: "Shadcn UI",
                url: "https://ui.shadcn.com/",
                icon: SiShadcnui,
                class: "w-[1.4rem] h-[1.4rem]",
            },
            {
                tooltip: "Resend",
                url: "https://resend.com/",
                icon: SiResend,
                class: "w-[1.35rem] h-[1.35rem]",
            },
        ],
        links: [
            {
                tooltip: "Visit Website",
                url: "https://my-nutrition.io",
                icon: Link,
            },
        ],
        state: "exploratoryDevelopment",
    },
]

const knowlege: KnowlegeCol[] = [
    {
        title: "Frameworks",
        technologies: [
            { label: "NextJS", url: "https://nextjs.org/", icon: RiNextjsFill },
            { label: "React", url: "https://react.dev/", icon: React },
            { label: "Svelte", url: "https://svelte.dev/", icon: Svelte },
            { label: "NodeJS", url: "https://nodejs.org/", icon: NodeJS },
        ],
    },
    {
        title: "Languages",
        technologies: [
            {
                label: "Typescript",
                url: "https://www.typescriptlang.org/",
                icon: Typescript,
            },
            {
                label: "Javascript",
                url: "https://en.wikipedia.org/wiki/JavaScript",
                icon: Javascript,
            },
            {
                label: "Java",
                url: "https://www.oracle.com/de/java/technologies/downloads/",
                icon: Java,
            },
            {
                label: "C#",
                url: "https://de.wikipedia.org/wiki/C-Sharp",
                icon: Csharp,
            },
            {
                label: "C++",
                url: "https://de.wikipedia.org/wiki/C%2B%2B",
                icon: Cplusplus,
            },
            { label: "Python", url: "https://www.python.org/", icon: Python },
        ],
    },
    {
        title: "Tools",
        technologies: [
            {
                label: "VSCode",
                url: "https://code.visualstudio.com/",
                icon: Vscode,
            },
            {
                label: "InteliJ",
                url: "https://www.jetbrains.com/idea/",
                icon: InteliJ,
            },
            {
                label: "PyCharm",
                url: "https://www.jetbrains.com/pycharm/",
                icon: PyCharm,
            },
            { label: "Docker", url: "https://www.docker.com/", icon: Docker },
            {
                label: "Git",
                url: "https://git-scm.com/",
                icon: Git,
            },
        ],
    },
    {
        title: "Design",
        technologies: [
            {
                label: "Figma",
                url: "https://www.figma.com/",
                icon: Figma,
            },
            {
                label: "Illustrator",
                url: "https://www.adobe.com/products/illustrator",
                icon: Illustrator,
            },
            {
                label: "Photoshop",
                url: "https://www.adobe.com/products/photoshop",
                icon: Photoshop,
            },
            {
                label: "After Effects",
                url: "https://www.adobe.com/products/aftereffects",
                icon: AfterEffects,
            },
        ],
    },
    {
        title: "Team Managment",
        technologies: [
            {
                label: "Jira",
                url: "https://www.atlassian.com/software/jira",
                icon: Jira,
            },
            {
                label: "Trello",
                url: "https://trello.com/",
                icon: Trello,
            },
            {
                label: "Slack",
                url: "https://slack.com/",
                icon: Slack,
            },
        ],
    },
]

export default function Home() {
    const stateInfoMap: Record<string, StateInfo> = {
        active: {
            label: "Active",
            class: "bg-[#c3ffdc] hover:bg-[#c3ffdc] text-black",
        },
        beta: {
            label: "Beta",
            class: "bg-[#ccbdfd] hover:bg-[#ccbdfd] text-black",
        },
        exploratoryDevelopment: {
            label: "Exploratory Development",
            class: "bg-[#fdc5c5] hover:bg-[#fdc5c5] text-black",
        },
        minimalViableProduct: {
            label: "Minimal Viable Product",
            class: "bg-[#fff6a3] hover:bg-[#fff6a3] text-black",
        },
    }

    const getStateInfo = (state: string) => stateInfoMap[state]

    return (
        <div className="flex justify-center w-full h-screen">
            <div className="flex flex-col space-y-8 md:space-y-4 mx-[1rem] w-full max-w-6xl sm:w-fit h-fit">
                <Navigation />
                <Hero />
                <Technologies
                    columns={knowlege}
                    className="py-5 px-8 bg-muted rounded-2xl"
                />
                <Projects projects={projects} getStateInfo={getStateInfo} />
                <div className="pb-[100rem]"></div>
            </div>
        </div>
    )
}

/*

*/
