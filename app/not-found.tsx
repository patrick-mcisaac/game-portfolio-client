import React from "react"

// import notFound from "../public/svg/notFound.svg"
// import Image from "next/image"
// import Button from "@/components/Button"
import NotFoundSvg from "@/components/NotFoundSvg"

export default function NotFound() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <NotFoundSvg />
        </div>
    )
}
