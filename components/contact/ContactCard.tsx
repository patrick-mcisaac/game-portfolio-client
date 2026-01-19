"use client"
import { getDevContact } from "@/data/contactRequest"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import React from "react"
type ContactCardProps = {
    icon: IconProp
    className: string

    name: string
}
export default function ContactCard({
    icon,
    className,

    name
}: ContactCardProps) {
    const { data, isSuccess } = useQuery({
        queryKey: ["contact", name],
        queryFn: () => getDevContact(name),
        staleTime: 5 * 60 * 100
    })
    if (isSuccess && name !== "email")
        return (
            <a href={data.link} target="_blank">
                <FontAwesomeIcon
                    icon={icon}
                    className={`${className} text-3xl transition hover:scale-120 md:text-5xl lg:text-6xl xl:text-7xl`}
                />
            </a>
        )
    if (isSuccess && name === "email")
        return (
            <Link href={"/"}>
                <FontAwesomeIcon
                    icon={icon}
                    className={`${className} text-3xl transition hover:scale-120 md:text-5xl lg:text-6xl xl:text-7xl`}
                />
            </Link>
        )
}
