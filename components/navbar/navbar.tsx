"use client"

import Link from "next/link"
import MobileMenu from "./mobileMenu"

export default function Navbar() {
    return (
        <nav>
            <ul
                className={`hidden h-30 items-center gap-20 pl-10 text-4xl font-semibold tracking-wider md:flex`}
            >
                <Link href={"/"}>
                    <li>About</li>
                </Link>
                <Link href={""}>
                    <li>Games</li>
                </Link>
                <Link href={""}>
                    <li>Contact</li>
                </Link>
            </ul>
            {/* Hamburger Menu */}
            <MobileMenu />
        </nav>
    )
}
