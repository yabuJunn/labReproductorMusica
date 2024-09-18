import './Reproductor.css'

import { AudioReproductor } from '../AudioReproductor/AudioReproductor'
import { AudioControls } from '../AudioControls/AudioControls'
import { arrayDeezer } from '../../types/deezerTypes'

interface ReproductorProps {
    imageUrl: string,
    songTitle: string,
    songArtist: string,
    songUrl: string,
    isPlaying: boolean,
    handlePlaying: () => void,
    handlePlayingSongId: (action: string) => void,
    playingSongId: number,
    deleteSong: (songIndex: number) => void,
    handleSetPlaying: (newPlayingState: boolean) => void,
    searchText: string,
    searchedSongsArray: arrayDeezer
}


export const Reproductor = ({ imageUrl, songTitle, songArtist, songUrl, isPlaying, handlePlaying, handlePlayingSongId, playingSongId, deleteSong, handleSetPlaying, searchText, searchedSongsArray }: ReproductorProps) => {

    if (Object.keys(searchedSongsArray).length === 0 || searchText === "") {
        return <>
            <div id="reproductor">
                <div id='reproductorImagen'>
                    <img src={imageUrl} alt="" />
                </div>
                <div id='reproductorTexto'>
                    <h1>{songTitle}</h1>
                    <h2>{songArtist}</h2>
                    <AudioReproductor songUrl={songUrl} isPlaying={isPlaying} playingSongId={playingSongId} ></AudioReproductor>
                </div>
            </div>
        </>
    }
    return <>
        <div id="reproductor">
            <div id='reproductorImagen'>
                <img src={imageUrl} alt="" />
            </div>
            <div id='reproductorTexto'>
                <h1>{songTitle}</h1>
                <h2>{songArtist}</h2>
                <AudioReproductor songUrl={songUrl} isPlaying={isPlaying} playingSongId={playingSongId} ></AudioReproductor>
                <AudioControls handlePlaying={handlePlaying} isPlaying={isPlaying} handlePlayingSongId={handlePlayingSongId} deleteSong={deleteSong} playingSongId={playingSongId} handleSetPlaying={handleSetPlaying}></AudioControls>
            </div>
        </div>
    </>
}