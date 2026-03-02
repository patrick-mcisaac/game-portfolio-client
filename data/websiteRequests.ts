import { ParamValue } from "next/dist/server/request/params"
import { fetchWithResponse } from "./fetchRequest"
const baseUrl = "websites"
export const getWebsites = () => {
    return fetchWithResponse(baseUrl)
}

export const getWebsiteById = (id: ParamValue) => {
    return fetchWithResponse(`${baseUrl}/${id}`)
}
