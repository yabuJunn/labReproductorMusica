import { deezerFetchType } from "../types/deezerTypes"

export const fetchApiDeezer = async (search: string) => {
    console.log("Prueba fetch")

    const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, {
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': 'defa7318efmsh3fa4956a0a8156dp1afc6cjsn41d178a39d5a'
        }
    })

    const responseJson: deezerFetchType = await response.json()

    return responseJson

}