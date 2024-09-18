import './AudioControls.css'

import fastFoward from '../../assets/svg/fastForward.svg'
import fastRewind from '../../assets/svg/fastRewind.svg'
import pause from '../../assets/svg/pause.svg'
import play from '../../assets/svg/play.svg'
import trash from '../../assets/svg/trash.svg'

interface AudioControlsProps {
    isPlaying: boolean,
    handlePlaying: () => void,
    handlePlayingSongId: (action: string) => void,
    deleteSong: (songIndex: number) => void,
    playingSongId: number,
    handleSetPlaying: (newPlayingState: boolean) => void
}

export const AudioControls = ({ isPlaying, handlePlaying, handlePlayingSongId, deleteSong, playingSongId, handleSetPlaying }: AudioControlsProps) => {

    const handlePlayButton = () => {
        handlePlaying()
    }

    const handleNextPreviusButtons = (e: React.MouseEvent<HTMLButtonElement>, action: string) => {
        handlePlayingSongId(action)
        handleSetPlaying(true)
    }

    const handleDeleteSong = () => {
        // console.log(playingSongId)
        //Ok
        handlePlayingSongId("delete")
        deleteSong(playingSongId)
    }

    if (isPlaying) {
        return <>
            <div id='globalContainer'>
                <div id='buttonControlers' >
                    <button id='previousButton' onClick={(e) => {
                        handleNextPreviusButtons(e, "previous")
                    }}>
                        <img src={fastRewind} alt="" />
                    </button>

                    <button id='playButton' onClick={handlePlayButton}>
                        <img src={pause} alt="" />
                    </button>

                    <button id='nextButton' onClick={(e) => {
                        handleNextPreviusButtons(e, "next")
                    }}>
                        <img src={fastFoward} alt="" />
                    </button>
                </div>

                <button id='deleteButton' onClick={handleDeleteSong}>
                    <img src={trash} alt="" />
                </button>
            </div>
        </>
    } else {
        return <>
            <div id='globalContainer'>
                <div id='buttonControlers'>
                    <button id='previousButton' onClick={(e) => {
                        handleNextPreviusButtons(e, "previous")
                    }}>
                        <img src={fastRewind} alt="" />
                    </button>

                    <button id='playButton' onClick={handlePlayButton}>
                        <img src={play} alt="" />
                    </button>

                    <button id='nextButton' onClick={(e) => {
                        handleNextPreviusButtons(e, "next")
                    }}>
                        <img src={fastFoward} alt="" />
                    </button>

                </div>

                <button id='deleteButton' onClick={handleDeleteSong}>
                    <img src={trash} alt="" />
                </button>
            </div>
        </>
    }

}