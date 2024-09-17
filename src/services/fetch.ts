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

// curl--request GET \
// --url https://deezerdevs-deezer.p.rapidapi.com/track/302127 \
// --header 'x-rapidapi-host: deezerdevs-deezer.p.rapidapi.com' \
// --header 'x-rapidapi-key: defa7318efmsh3fa4956a0a8156dp1afc6cjsn41d178a39d5a'

// curl --request GET \
// --url 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem' \
// --header 'x-rapidapi-host: deezerdevs-deezer.p.rapidapi.com' \
// --header 'x-rapidapi-key: defa7318efmsh3fa4956a0a8156dp1afc6cjsn41d178a39d5a'

