import { useMemo, useState } from 'react'
import './App.css'

import { Reproductor } from './components/Reproductor/Reproductor'
import { SearchBar } from './components/SearchBar/SearchBar'
import { fetchApiDeezer } from './services/fetch'
import { arrayDeezer, dataDeezerType } from './types/deezerTypes'

function App() {
  const [search, setSearch] = useState("")

  const [playing, setPlaying] = useState(true)

  const [searchedSongs, setSearchedSongs] = useState<arrayDeezer>([])

  const handleSetSearch = (textToSearch: string) => {
    setSearch(textToSearch)
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

    setPlayingSongId(searchedSongs.length)

    handleSetPlaying(true)
  }

  const handleDeleteSong = (songIndex: number) => {

    if (searchedSongs.length === 1) {
      setSearchedSongs([])
      setSearch("")

      console.log("Length 1")

    } else if (searchedSongs.length === 2) {
      searchedSongs.splice(songIndex + 1, 1)

      const newSearchedSongs = [...searchedSongs]

      setSearchedSongs(newSearchedSongs)
    } else {
      console.log("Length other", songIndex)
      searchedSongs.splice(songIndex, 1)

      const newSearchedSongs = [...searchedSongs]

      setSearchedSongs(newSearchedSongs)
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


  useMemo(async () => { await handleFetch(search, handleSearchedSongs) }, [search])

  console.log("Playing song id: ", playingSongId)

  console.log("Searched songs: ", searchedSongs)

  console.log("Searched text: ", search)

  if (Object.keys(searchedSongs).length === 0) {
    return <>
      <Reproductor imageUrl={"https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif"} songTitle={"Busca una cancion"} songUrl={""} songArtist={"En la barra de busqueda de abajo"} isPlaying={playing} handlePlaying={handlePlaying} handlePlayingSongId={handlePlayingSongId} playingSongId={playingSongId} deleteSong={handleDeleteSong} handleSetPlaying={handleSetPlaying} searchText={search} searchedSongsArray={searchedSongs}></Reproductor>
      <SearchBar handleSetSearch={handleSetSearch}></SearchBar>
    </>
  } else {
    return (
      <>
        <Reproductor imageUrl={searchedSongs[playingSongId].album.cover_xl} songTitle={searchedSongs[playingSongId].album.title} songUrl={searchedSongs[playingSongId].preview} songArtist={searchedSongs[playingSongId].artist.name} isPlaying={playing} handlePlaying={handlePlaying} handlePlayingSongId={handlePlayingSongId} playingSongId={playingSongId} deleteSong={handleDeleteSong} handleSetPlaying={handleSetPlaying} searchText={search} searchedSongsArray={searchedSongs}></Reproductor>
        <SearchBar handleSetSearch={handleSetSearch}></SearchBar>
      </>
    )
  }


}

export default App

const handleFetch = async (searchText: string, handleSearchedSongs: (newSong: dataDeezerType) => void) => {
  if (searchText !== "") {
    const data = await fetchApiDeezer(searchText)

    handleSearchedSongs(data.data[0])

  } else {
    console.log("No hay nada que buscar")
  }
}