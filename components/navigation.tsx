import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Logo } from "@/public/logo"

export default function Navigation() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav className="w-full h-fit flex justify-center py-4 z-50 select-none">
            <div className="flex w-full max-w-7xl justify-between">
                <div>
                    <Link
                        href="/"
                        className="flex flex-row items-center space-x-3 text-2xl font-semibold group rounded-xl"
                    >
                        <Logo className="w-8 h-8" />
                        <p className="mt-1">malz</p>
                    </Link>
                </div>
                <div className="flex items-center gap-6 md:gap-6">
                    {mounted && (
                        <button
                            className="text-text p-2 rounded-xl hover:bg-text/5 transition"
                            onClick={() =>
                                setTheme(theme === "light" ? "dark" : "light")
                            }
                        >
                            {theme === "light" ? <Moon /> : <Sun />}
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
