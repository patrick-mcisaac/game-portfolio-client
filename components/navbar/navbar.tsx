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
                className={`hidden h-30 w-full items-center gap-20 text-4xl font-semibold tracking-wider md:flex md:justify-center lg:justify-start`}
            >
                <Link className="" href={"/"}>
                    <li>
                        <Logo
                            svg={isGames ? only_game : only_dev}
                            className=""
                            width={100}
                        />
                    </li>
                </Link>
                <Link className="-ml-15" href={"/about"}>
                    <li>About</li>
                </Link>
                <Link href={"/games"}>
                    <li>Games</li>
                </Link>
                <Link href={"/websites"}>
                    <li>Websites</li>
                </Link>
                <Link className="mr-20 ml-auto" href={"/contact"}>
                    <li>Contact</li>
                </Link>
            </ul>
            {/* Hamburger Menu */}
            <MobileMenu />
        </nav>
    )
}
