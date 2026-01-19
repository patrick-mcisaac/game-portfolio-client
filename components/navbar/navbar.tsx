"use client"

import Link from "next/link"
import MobileMenu from "./mobileMenu"
import Logo from "../logo/Logo"
import only_dev from "../../public/svg/only_dev.svg"
import only_game from "../../public/svg/only_game.svg"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

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
            <ul
                className={`md: hidden h-30 w-full items-center font-semibold tracking-wider md:flex md:justify-center md:gap-10 md:text-3xl lg:gap-20 lg:text-4xl xl:justify-start`}
            >
                <Link className="shrink-0" href={"/"}>
                    <li>
                        <Logo
                            svg={isGames ? only_game : only_dev}
                            className=""
                            width={100}
                        />
                    </li>
                </Link>
                <Link className="md:-ml-10 lg:-ml-15" href={"/about"}>
                    <li>About</li>
                </Link>
                <Link href={"/games"}>
                    <li>Games</li>
                </Link>
                <Link href={"/websites"}>
                    <li>Websites</li>
                </Link>
                <Link className="mr-20 xl:ml-auto" href={"/contact"}>
                    <li>Contact</li>
                </Link>
            </ul>
            {/* Hamburger Menu */}
            <MobileMenu isGames={isGames} />
        </nav>
    )
}
