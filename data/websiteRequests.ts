import { fetchWithResponse } from "./fetchRequest"
const baseUrl = "websites"
export const getWebsites = () => {
    return fetchWithResponse(baseUrl)
}
