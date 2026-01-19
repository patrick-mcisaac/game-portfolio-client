import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import React from "react"

type LogoProps = {
    svg: StaticImport
    className: string
    width: number
}

export default function Logo({ svg, className, width }: LogoProps) {
    return (
        <Image src={svg} alt="logo" width={width} className={`${className}`} />
    )
}
