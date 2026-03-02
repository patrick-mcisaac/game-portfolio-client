"use client"
import WebsiteCard from "@/components/websites/WebsiteCard"
import { getWebsiteById } from "@/data/websiteRequests"
import { WebsiteImageTypes } from "@/types/WebsiteTypes"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import React from "react"

export default function Details() {
    const { id } = useParams()
    const { data: website, isSuccess } = useQuery({
        queryKey: ["website", id],
        queryFn: () => getWebsiteById(id),
        enabled: !!id
    })
    return (
        isSuccess && (
            <div className="flex flex-1 flex-col items-center justify-center">
                <h1>{website.title}</h1>

                <p>{website.description}</p>

                <p>{website.learned}</p>

                <p>
                    {" "}
                    <a href={website.link} target="_blank">
                        Github Link
                    </a>
                </p>
                <section className="flex w-full flex-col items-center justify-center gap-15 lg:flex-row lg:gap-30">
                    {website.images.map((i: WebsiteImageTypes) => (
                        <WebsiteCard
                            key={i.id}
                            alt={"image"}
                            src={`${i.image}`}
                            width={500}
                            height={100}
                            className={`rounded-lg`}
                        />
                    ))}
                </section>
            </div>
        )
    )
}
