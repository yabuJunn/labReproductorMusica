import './AudioControls.css'

import fastFoward from '../../assets/svg/fastForward.svg'
import fastRewind from '../../assets/svg/fastRewind.svg'
import pause from '../../assets/svg/pause.svg'
import play from '../../assets/svg/play.svg'

interface AudioControlsProps {
    isPlaying: boolean,
    handlePlaying: () => void,
    handlePlayingSongId: (action: string) => void
}

export const AudioControls = ({ isPlaying, handlePlaying, handlePlayingSongId }: AudioControlsProps) => {

    const handlePlayButton = () => {
        handlePlaying()
    }

    const handleNextPreviusButtons = (e: React.MouseEvent<HTMLButtonElement>, action: string) => {
        handlePlayingSongId(action)
    }

    if (isPlaying) {
        return <>
            <div id='buttonControlers' >
                <button onClick={(e) => {
                    handleNextPreviusButtons(e, "previous")
                }}>
                    <img src={fastRewind} alt="" />
                </button>

                <button id='playButton' onClick={handlePlayButton}>
                    <img src={pause} alt="" />
                </button>

                <button onClick={(e) => {
                    handleNextPreviusButtons(e, "next")
                }}>
                    <img src={fastFoward} alt="" />
                </button>
            </div>
        </>
    } else {
        return <>
            <div id='buttonControlers'>
                <button onClick={(e) => {
                    handleNextPreviusButtons(e, "previous")
                }}>
                    <img src={fastRewind} alt="" />
                </button>

                <button id='playButton' onClick={handlePlayButton}>
                    <img src={play} alt="" />
                </button>

                <button onClick={(e) => {
                    handleNextPreviusButtons(e, "next")
                }}>
                    <img src={fastFoward} alt="" />
                </button>
            </div>
        </>
    }

}