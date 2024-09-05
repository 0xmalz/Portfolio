import { useEffect, useRef } from "react"

export default function Hero() {
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const box = boxRef.current
        if (!box) return // Exit if box is null

        let currentAngle = 0

        // Fetch transition and pause durations from attributes, with default values
        const boxTransitionDuration =
            parseFloat(box.getAttribute("data-transition-duration") ?? "1") *
            1000
        const pauseDurationMilliseconds =
            parseFloat(box.getAttribute("data-pause-duration") ?? "1") * 1000
        const totalDuration = boxTransitionDuration + pauseDurationMilliseconds

        function rotateBox() {
            currentAngle += 90 // Increment rotation angle

            //@ts-ignore
            box.style.transform = `rotateX(${currentAngle}deg)`
            //@ts-ignore
            box.style.transition = `transform ${boxTransitionDuration}ms ease`

            setTimeout(rotateBox, totalDuration) // Rotate after total duration
        }

        rotateBox() // Start rotation on mount
    }, [])

    return (
        <div>
            <p className="~text-2xl/3xl font-medium bg-background pb-2">
                Hello I'm a
            </p>
            <div
                ref={boxRef}
                className="box custom-spin-animation relative w-full flex items-center h-[70px] z-0"
                data-transition-duration="1"
                data-pause-duration="1"
            >
                <div className="box-face box-face-top bg-background">
                    <MathFace />
                </div>
                <div className="box-face box-face-front bg-background">
                    <DeveloperFace />
                </div>
                <div className="box-face box-face-bottom bg-background">
                    <DesignerFace />
                </div>
                <div className="box-face box-face-back bg-background">
                    <SportsmanFace />
                </div>
            </div>
            <p className="max-w-[450px] mt-3 text-muted-foreground">
                Hello world, I'm Jérôme Bastien, I live in Germany and I'm
                currently in my first year at university.
            </p>
        </div>
    )
}

const DesignerFace = () => {
    return (
        <h1 className="~text-3xl/5xl font-black">
            UI & UX{" "}
            <span className="bg-gradient-to-b from-[#FF66D9] to-[#A00033] text-transparent bg-clip-text">
                Designer
            </span>
        </h1>
    )
}

const DeveloperFace = () => {
    return (
        <h1 className="~text-3xl/5xl font-black bg-gradient-to-b from-[#5BE1FF] to-[#3943FD] text-transparent bg-clip-text">
            Software Developer
        </h1>
    )
}

const MathFace = () => {
    return (
        <h1 className="~text-3xl/5xl font-black bg-gradient-to-b from-[#9DFF68] to-[#008704] text-transparent bg-clip-text">
            Mathematician
        </h1>
    )
}

const SportsmanFace = () => {
    return (
        <h1 className="~text-3xl/5xl font-black bg-gradient-to-b from-[#fcd76f] to-[#ffbb00] text-transparent bg-clip-text">
            Sportsman
        </h1>
    )
}
