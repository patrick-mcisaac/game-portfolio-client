"use client"
import { WebsiteTypes } from "@/types/WebsiteTypes"
import Image from "next/image"
import { useRouter } from "next/navigation"

type Props = {
    website?: WebsiteTypes
    alt: string
    src: string | null
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
        <div className="w-200 flex-1">
            <h1 className="text-center text-3xl font-semibold tracking-wider">
                {website?.title}
            </h1>
            {src ?
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
            :   ""}
        </div>
    )
}
