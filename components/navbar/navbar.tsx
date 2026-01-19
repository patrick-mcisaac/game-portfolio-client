"use client"

import Link from "next/link"
import MobileMenu from "./mobileMenu"

export default function Navbar() {
    return (
        <nav className="absolute z-1 w-screen">
            <ul
                className={`hidden h-30 items-center gap-20 text-4xl font-semibold tracking-wider md:flex md:justify-center lg:justify-start lg:pl-10`}
            >
                <Link href={"/about"}>
                    <li>About</li>
                </Link>
                <Link href={"/games"}>
                    <li>Games</li>
                </Link>
                <Link href={"/contact"}>
                    <li>Contact</li>
                </Link>
            </ul>
            {/* Hamburger Menu */}
            <MobileMenu />
        </nav>
    )
}
