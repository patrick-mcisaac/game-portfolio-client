import Link from "next/link"
import React, { Dispatch, SetStateAction } from "react"
import Logo from "../logo/Logo"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

type HamburgerToggleProps = {
    isGames: boolean
    only_game: StaticImport
    only_dev: StaticImport
    setIsVisible: Dispatch<SetStateAction<boolean>>
}

export default function HamburgerToggle({
    isGames,
    only_dev,
    only_game,
    setIsVisible
}: HamburgerToggleProps) {
    return (
        <div className="flex justify-between p-5 text-4xl md:hidden">
            <Link className="" href={"/"}>
                <Logo
                    svg={isGames ? only_game : only_dev}
                    className=""
                    width={100}
                />
            </Link>
            <button onClick={() => setIsVisible(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}
