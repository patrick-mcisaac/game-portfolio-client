"use client"
import { WebsiteTypes } from "@/types/WebsiteTypes"
import Image from "next/image"
import { useRouter } from "next/navigation"

type Props = {
    website: WebsiteTypes
}
export default function WebsiteCard({ website }: Props) {
    const router = useRouter()
    return (
        <Image
            src={`/api${website.images[0].image}`}
            alt="website image"
            width={500}
            height={100}
            className="cursor-pointer rounded-2xl transition hover:scale-110"
            onClick={() => {
                router.push(`websites/${website.id}`)
            }}
        />
    )
}
