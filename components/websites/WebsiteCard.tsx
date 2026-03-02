"use client"
import { WebsiteTypes } from "@/types/WebsiteTypes"
import Image from "next/image"
import { useRouter } from "next/navigation"

type Props = {
    website?: WebsiteTypes
    alt: string
    src: string
    width: number
    height: number
    className?: string
}
export default function WebsiteCard({
    website,
    alt,
    src,
    width,
    height,
    className
}: Props) {
    const router = useRouter()
    return (
        <div>
            <Image
                src={`/api${src}`}
                alt={alt}
                width={width}
                height={height}
                className={`${className}`}
                onClick={() => {
                    if (website) {
                        router.push(`websites/${website.id}`)
                    }
                }}
            />
        </div>
    )
}
