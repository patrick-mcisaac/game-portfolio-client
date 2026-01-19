"use client"

import { getDeveloperInfo } from "@/data/developerRequests"
import { useQuery } from "@tanstack/react-query"

export default function Page() {
    const { data: dev, isSuccess } = useQuery({
        queryKey: ["developer"],
        queryFn: () => getDeveloperInfo()
    })

    if (isSuccess) {
        return (
            <div className="m-auto flex min-h-screen w-[80%] flex-col items-center justify-center">
                <h1 className="text-center text-2xl font-semibold tracking-wider md:-mt-20 md:text-[3.5rem] lg:-mt-60 lg:text-[5rem]">
                    {dev.first_name} {dev.last_name}
                </h1>
                <p className="mt-15 p-1 text-sm leading-5 md:text-xl md:leading-10 lg:text-2xl">
                    {dev.about}
                </p>
            </div>
        )
    }
}
