import Logo from "@/components/logo/Logo"
import dev_logo from "../public/svg/dev_logo.svg"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Logo svg={dev_logo} className="" width={1000} />
        </div>
    )
}
