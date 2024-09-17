import { useMemo, useState } from 'react'
import './App.css'

import { Reproductor } from './components/Reproductor/Reproductor'
import { SearchBar } from './components/SearchBar/SearchBar'
import { fetchApiDeezer } from './services/fetch'
import { arrayDeezer, dataDeezerType, deezerFetchType } from './types/deezerTypes'

function App() {
  const [search, setSearch] = useState("")

  const [data, setData] = useState<deezerFetchType>({
    data: [],
    next: "string",
    total: 2
  })

  const [playing, setPlaying] = useState(true)

  const [searchedSongs, setSearchedSongs] = useState<arrayDeezer>([])

  //Intento de quitar la cancion duplicada

  // if (searchedSongs.length !== 0 && searchedSongs.length !== 1) {
  //   console.log(searchedSongs.splice(searchedSongs.length - 1, 1))
  // }

  const handleSetSearch = (textToSearch: string) => {
    setSearch(textToSearch)
  }

  const handleSetData = (results: deezerFetchType) => {
    setData(results)
  }

  const [playingSongId, setPlayingSongId] = useState(0)

  const handlePlaying = () => {
    setPlaying((prev) => {
      if (prev) {
        return false
      } else {
        return true
      }

    })
  }

  const handleSearchedSongs = (newSong: dataDeezerType) => {
    setSearchedSongs((prevSearchedSongs) => {
      return [
        ...prevSearchedSongs,
        newSong
      ]
    })
  }

  const handlePlayingSongId = (action: string) => {
    switch (action) {
      case "next":
        setPlayingSongId((prevPlayingSongId) => {
          if (searchedSongs.length === 0) {
            return 0
          } else {
            if (searchedSongs.length === playingSongId + 1) {
              return prevPlayingSongId
            } else {
              return prevPlayingSongId + 1
            }
          }

        })
        break;
      case "previous":
        setPlayingSongId((prevPlayingSongId) => {
          if (searchedSongs.length === 0) {
            return 0
          } else {
            if (playingSongId === 0) {
              return prevPlayingSongId
            } else {
              return prevPlayingSongId - 1
            }
          }
        })
        break;
      default:
        break;
    }
  }

  useMemo(async () => { await handleFetch(search, handleSetData, handleSearchedSongs) }, [search])

  console.log("Playing song id: ", playingSongId)

  console.log("Searched songs: ", searchedSongs)

  if (Object.keys(data.data).length === 0 || search === "") {
    return <>
      <Reproductor imageUrl={"https://i.pinimg.com/originals/c1/65/8b/c1658bc18d28d7b9668cf2139b49d041.jpg"} songTitle={"Busca una cancion"} songUrl={""} songArtist={"En la barra de busqueda de abajo"} isPlaying={playing} handlePlaying={handlePlaying} handlePlayingSongId={handlePlayingSongId} playingSongId={playingSongId}></Reproductor>
      <SearchBar searchText={search} handleSetSearch={handleSetSearch}></SearchBar>
    </>
  } else {
    return (
      <>
        <Reproductor imageUrl={searchedSongs[playingSongId].album.cover_xl} songTitle={searchedSongs[playingSongId].album.title} songUrl={searchedSongs[playingSongId].preview} songArtist={searchedSongs[playingSongId].artist.name} isPlaying={playing} handlePlaying={handlePlaying} handlePlayingSongId={handlePlayingSongId} playingSongId={playingSongId}></Reproductor>
        <SearchBar searchText={search} handleSetSearch={handleSetSearch}></SearchBar>
      </>
    )
  }


}

export default App

const handleFetch = async (searchText: string, handleSetData: (results: deezerFetchType) => void, handleSearchedSongs: (newSong: dataDeezerType) => void) => {
  if (searchText !== "") {
    const data = await fetchApiDeezer(searchText)

    handleSetData(data)

    handleSearchedSongs(data.data[0])

  } else {
    console.log("No hay nada que buscar")
  }
}