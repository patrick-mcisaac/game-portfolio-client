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
            <div className="m-auto flex w-[80%] flex-col items-center justify-center">
                <h1 className="text-center text-2xl font-semibold tracking-wider md:text-[3.5rem] lg:text-[5rem]">
                    {dev.first_name} {dev.last_name}
                </h1>

                <div className="mt-15 flex w-[80%] flex-col">
                    {dev.about.split("\n").map((paragraph: string) => (
                        <p
                            key={paragraph}
                            className="mt-5 p-1 indent-8 text-sm leading-5 md:text-xl md:leading-10 lg:text-2xl"
                        >
                            {`${paragraph}`}
                        </p>
                    ))}
                </div>
            </div>
        )
    }
}
