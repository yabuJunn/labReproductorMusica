import { useState } from 'react'
import './App.css'

import { Reproductor } from './components/Reproductor/Reproductor'
import { SearchBar } from './components/SearchBar/SearchBar'
import { fetchApiDeezer } from './services/fetch'

function App() {
  const [search, setSearch] = useState("Prueba")

  const handleSetSearch = (textToSearch: string) => {
    setSearch(textToSearch)
  }

  //fetchApiDeezer("taylor swift")

  return (
    <>
      <Reproductor imageUrl={'https://cdn.dribbble.com/users/108183/screenshots/2327938/media/535a615e91eccb5a744e675104db1ba1.png?resize=800x600&vertical=center'} songTitle={'Prueba'} songUrl={"https://cdn-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3"} songArtist={'Otra'}></Reproductor>
      <SearchBar searchText={search} handleSetSearch={handleSetSearch}></SearchBar>
    </>
  )
}

export default App
