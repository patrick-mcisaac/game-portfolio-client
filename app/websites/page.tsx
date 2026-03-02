"use client"
import WebsiteCard from "@/components/websites/WebsiteCard"
import { getWebsites } from "@/data/websiteRequests"
import { WebsiteTypes } from "@/types/WebsiteTypes"
import { useQuery } from "@tanstack/react-query"
import React from "react"

export default function Website() {
    const { data: websites, isSuccess } = useQuery({
        queryKey: ["websites"],
        queryFn: getWebsites
    })
    return (
        isSuccess && (
            <div className="flex flex-1 flex-col items-center justify-start gap-30 pt-50">
                <h1 className="text-5xl font-semibold tracking-wider">
                    My Websites
                </h1>
                <div>
                    {websites.map((w: WebsiteTypes) => (
                        <WebsiteCard key={w.id} website={w} />
                    ))}
                </div>
            </div>
        )
    )
}
