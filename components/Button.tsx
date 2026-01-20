import React from "react"

type ButtonProps = {
    text: string
    className: string
}
export default function Button({ text, className }: ButtonProps) {
    return (
        <button
            className={`${className} font-semi cursor-pointer rounded-2xl p-4 text-xl transition hover:scale-110`}
        >
            {text}
        </button>
    )
}
