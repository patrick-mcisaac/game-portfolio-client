import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
type ContactCardProps = {
    icon: IconProp
    className: string
    href: string
}
export default function ContactCard({
    icon,
    className,
    href
}: ContactCardProps) {
    return (
        <a href={href} target="_blank">
            <FontAwesomeIcon
                icon={icon}
                className={`${className} text-3xl transition hover:scale-120 md:text-5xl lg:text-6xl xl:text-7xl`}
            />
        </a>
    )
}
