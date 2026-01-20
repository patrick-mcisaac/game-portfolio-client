import Link from "next/link"
import Logo from "../logo/Logo"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

type NavItemsProps = {
    isGames: boolean
    only_game: StaticImport
    only_dev: StaticImport
    classNameUl: string
}

export default function NavItems({
    isGames,
    only_dev,
    only_game,
    classNameUl
}: NavItemsProps) {
    return (
        <ul className={classNameUl}>
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
            <Link className="xl:mr-20 xl:ml-auto" href={"/contact"}>
                <li>Contact</li>
            </Link>
        </ul>
    )
}
