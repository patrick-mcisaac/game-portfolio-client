"use client"
import MobileMenu from "./mobileMenu"
import only_dev from "../../public/svg/only_dev.svg"
import only_game from "../../public/svg/only_game.svg"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import NavItems from "./NavItems"

export default function Navbar() {
    const pathname = usePathname()

    const isGames = useMemo(() => {
        if (pathname.includes("games")) {
            return true
        }
        return false
    }, [pathname])

    return (
        <nav className="absolute z-1 w-screen">
            <NavItems
                isGames={isGames}
                only_dev={only_dev}
                only_game={only_game}
                classNameUl="md: hidden bg-background h-30 w-full items-center font-semibold tracking-wider md:flex md:justify-center md:gap-10 md:text-3xl lg:gap-20 lg:text-4xl xl:justify-start"
            />

            <MobileMenu isGames={isGames} />
        </nav>
    )
}
