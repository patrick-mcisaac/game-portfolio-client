"use client"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    return isVisible ?
            <ul className="flex w-screen flex-col items-center text-center text-2xl font-semibold tracking-wider md:hidden">
                <Link href={"/about"}>
                    <li className="flex h-20 w-screen items-center justify-center bg-amber-600">
                        About
                    </li>
                </Link>
                <Link href={"/games"}>
                    <li className="flex h-20 w-screen items-center justify-center bg-black">
                        Games
                    </li>
                </Link>
                <Link href={"/contact"}>
                    <li className="flex h-20 w-screen items-center justify-center bg-black">
                        Contact
                    </li>
                </Link>
                <li
                    onClick={() => setIsVisible(false)}
                    className="flex h-20 w-screen items-center justify-center bg-black hover:cursor-pointer"
                >
                    <FontAwesomeIcon icon={faX} />
                </li>
            </ul>
        :   <div className="flex justify-end p-5 text-4xl md:hidden">
                <button onClick={() => setIsVisible(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
}
