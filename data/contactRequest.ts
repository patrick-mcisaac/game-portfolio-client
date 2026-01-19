import { fetchWithResponse } from "./fetchRequest"

export const getDevContact = (param: string) => {
    const url = `contacts/get_dev_contact?dev=patrick-dev&name=${param}`
    return fetchWithResponse(url)
}
