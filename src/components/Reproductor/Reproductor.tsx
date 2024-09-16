import './Reproductor.css'

import { AudioReproductor } from '../AudioReproductor/AudioControls'
import { AudioControls } from '../AudioControls/AudioControls'

interface ReproductorProps {
    imageUrl: string,
    songTitle: string,
    songArtist: string,
    songUrl: string
}


export const Reproductor = ({ imageUrl, songTitle, songArtist, songUrl }: ReproductorProps) => {

    return <>
        <div id="reproductor">
            <div id='reproductorImagen'>
                <img src={imageUrl} alt="" />
            </div>
            <div id='reproductorTexto'>
                <h1>{songTitle}</h1>
                <h2>{songArtist}</h2>
                <AudioReproductor songUrl={songUrl}></AudioReproductor>
                <AudioControls></AudioControls>
            </div>
        </div>
    </>
}