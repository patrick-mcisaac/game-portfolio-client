import { FetchOptionTypes } from "@/types/FetchTypes"

const baseURL = `http://localhost:8000`

export const fetchWithResponse = (url: string, options?: FetchOptionTypes) => {
    return fetch(`${baseURL}/${url}`, options).then((res) => res.json())
}
