import { FetchOptionTypes } from "@/types/FetchTypes"

export const fetchWithResponse = (url: string, options?: FetchOptionTypes) => {
    return fetch(`/api/${url}`, options).then((res) => res.json())
}
