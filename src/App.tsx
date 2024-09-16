import './App.css'

import { Reproductor } from './components/Reproductor/Reproductor'

function App() {

  return (
    <>
      <Reproductor imageUrl={''} songTitle={'Prueba'} songUrl={"https://cdn-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-11.mp3"}></Reproductor>
    </>
  )
}

export default App
