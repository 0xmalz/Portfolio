import { SVGProps } from "react"

export function Logo(props: Readonly<SVGProps<SVGSVGElement>>) {
    return (
        <svg
            width={1080}
            height={1080}
            viewBox="0 0 1080 1080"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M842 810h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32h-166a32 32 0 0 1-32-32v-166a32 32 0 0 1 32-32z"
                fill="#08357B"
            />
            <path
                d="M842 540h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32h-166a32 32 0 0 1-32-32V572a32 32 0 0 1 32-32z"
                fill="#175DCA"
            />
            <path
                d="M842 270h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32h-166a32 32 0 0 1-32-32V302a32 32 0 0 1 32-32z"
                fill="#428CFF"
            />
            <path
                d="M572 540h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32h-166a32 32 0 0 1-32-32V572a32 32 0 0 1 32-32z"
                fill="#428CFF"
            />
            <path
                d="M572 810h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32h-166a32 32 0 0 1-32-32v-166a32 32 0 0 1 32-32z"
                fill="#175DCA"
            />
            <path
                d="M302 810h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32H302a32 32 0 0 1-32-32v-166a32 32 0 0 1 32-32z"
                fill="#428CFF"
            />
            <path
                d="M483 218h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32H483a32 32 0 0 1-32-32V250a32 32 0 0 1 32-32z"
                fill="#7EB1FF"
            />
            <path
                d="M147 55h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32H147a32 32 0 0 1-32-32V87a32 32 0 0 1 32-32z"
                fill="#ACCDFF"
            />
            <path
                d="M167 506h166a32 32 0 0 1 32 32v166a32 32 0 0 1-32 32H167a32 32 0 0 1-32-32V538a32 32 0 0 1 32-32z"
                fill="#7EB1FF"
            />
        </svg>
    )
}
