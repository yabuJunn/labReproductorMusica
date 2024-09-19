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

  const handleSetPlaying = (newPlayingState: boolean) => {
    setPlaying(newPlayingState)
  }

  const handleSearchedSongs = (newSong: dataDeezerType) => {
    setSearchedSongs((prevSearchedSongs) => {
      return [
        ...prevSearchedSongs,
        newSong
      ]
    })
  }

  const handleDeleteSong = (songIndex: number) => {
    console.log("length: ", searchedSongs.length)
    if (searchedSongs.length === 1) {
      setSearchedSongs([])
      setSearch("")
      console.log("Kawabonga")
    } else {
      searchedSongs.splice(songIndex, 1)

      setSearchedSongs(searchedSongs)

      console.log("length after: ", searchedSongs.length)
    }
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

      case "delete":
        if (playingSongId - 1 === -1) {
          setPlayingSongId(0)
        } else {
          setPlayingSongId(playingSongId - 1)
        }
        break;
      default:
        break;
    }
  }

  
  useMemo(async () => { await handleFetch(search, handleSetData, handleSearchedSongs) }, [search])

  console.log("Playing song id: ", playingSongId)

  console.log("Searched songs: ", searchedSongs)

  console.log("Searched text: ", search)

  if (Object.keys(searchedSongs).length === 0) {
    return <>
      <Reproductor imageUrl={"https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif"} songTitle={"Busca una cancion"} songUrl={""} songArtist={"En la barra de busqueda de abajo"} isPlaying={playing} handlePlaying={handlePlaying} handlePlayingSongId={handlePlayingSongId} playingSongId={playingSongId} deleteSong={handleDeleteSong} handleSetPlaying={handleSetPlaying} searchText={search} searchedSongsArray={searchedSongs}></Reproductor>
      <SearchBar searchText={search} handleSetSearch={handleSetSearch}></SearchBar>
    </>
  } else {
    return (
      <>
        <Reproductor imageUrl={searchedSongs[playingSongId].album.cover_xl} songTitle={searchedSongs[playingSongId].album.title} songUrl={searchedSongs[playingSongId].preview} songArtist={searchedSongs[playingSongId].artist.name} isPlaying={playing} handlePlaying={handlePlaying} handlePlayingSongId={handlePlayingSongId} playingSongId={playingSongId} deleteSong={handleDeleteSong} handleSetPlaying={handleSetPlaying} searchText={search} searchedSongsArray={searchedSongs}></Reproductor>
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