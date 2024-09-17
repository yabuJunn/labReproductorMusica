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
  console.log(searchedSongs)


  const handleSetSearch = (textToSearch: string) => {
    setSearch(textToSearch)
  }

  const handleSetData = (results: deezerFetchType) => {
    setData(results)
  }

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

  useMemo(async () => { await handleFetch(search, handleSetData, handleSearchedSongs) }, [search])

  if (Object.keys(data.data).length === 0 || search === "") {
    return <>
      <Reproductor imageUrl={"https://i.pinimg.com/originals/c1/65/8b/c1658bc18d28d7b9668cf2139b49d041.jpg"} songTitle={"Busca una cancion"} songUrl={""} songArtist={"En la barra de busqueda de abajo"} isPlaying={playing} handlePlaying={handlePlaying}></Reproductor>
      <SearchBar searchText={search} handleSetSearch={handleSetSearch}></SearchBar>
    </>
  } else {
    // console.log(data.data[0].album.title, data.data[0].preview)
    return (
      <>
        <Reproductor imageUrl={data.data[0].album.cover_xl} songTitle={data.data[0].album.title} songUrl={data.data[0].preview} songArtist={data.data[0].artist.name} isPlaying={playing} handlePlaying={handlePlaying}></Reproductor>
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