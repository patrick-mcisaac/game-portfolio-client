import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import Logo from "../logo/Logo"
import only_game from "../../public/svg/only_game.svg"
import only_dev from "../../public/svg/only_dev.svg"

type MobileMenuProps = {
    isGames: boolean
}
export default function MobileMenu({ isGames }: MobileMenuProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    return isVisible ?
            <ul className="flex w-screen flex-col items-center text-center text-2xl font-semibold tracking-wider md:hidden">
                <Link className="" href={"/"}>
                    <li className="flex h-20 w-screen items-center justify-center bg-black">
                        <Logo
                            svg={isGames ? only_game : only_dev}
                            className=""
                            width={100}
                        />
                    </li>
                </Link>
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
                <Link href={"/websites"}>
                    <li className="flex h-20 w-screen items-center justify-center bg-black">
                        Websites
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
        :   <div className="flex justify-between p-5 text-4xl md:hidden">
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
}
