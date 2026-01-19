"use client"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    return isVisible ?
            <ul className="flex flex-col md:hidden items-center text-center tracking-wider font-semibold text-2xl">
                <Link href={"/"}>
                    <li className="h-20 w-screen flex items-center justify-center bg-amber-600">
                        About
                    </li>
                </Link>
                <Link href={""}>
                    <li className="h-20 w-screen flex items-center justify-center">
                        Games
                    </li>
                </Link>
                <Link href={""}>
                    <li className="h-20 w-screen flex items-center justify-center">
                        Contact
                    </li>
                </Link>
                <li
                    onClick={() => setIsVisible(false)}
                    className="h-20 w-screen hover:cursor-pointer flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faX} />
                </li>
            </ul>
        :   <div className="text-4xl md:hidden flex justify-end p-5">
                <button onClick={() => setIsVisible(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
}
