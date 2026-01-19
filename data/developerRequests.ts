import { fetchWithResponse } from "./fetchRequest"

export const getDeveloperInfo = () => {
    const params = `?username=patrick-dev`
    const url = `developers/get_details`
    const combinedUrl = `${url}${params}`
    return fetchWithResponse(combinedUrl)
}
