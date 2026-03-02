export type WebsiteTypes = {
    id: number
    title: string
    description: string
    link: string
    learned: string
    images: WebsiteImageTypes[]
}

export type WebsiteImageTypes = {
    id: number
    image: string
}
