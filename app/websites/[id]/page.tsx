"use client"
import { getWebsiteById } from "@/data/websiteRequests"
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
            <div className="flex flex-1 items-center justify-center">
                <h1>{website.title}</h1>
                {id}
            </div>
        )
    )
}
