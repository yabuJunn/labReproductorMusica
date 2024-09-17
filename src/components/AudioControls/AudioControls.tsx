import './AudioControls.css'

import fastFoward from '../../assets/svg/fastForward.svg'
import fastRewind from '../../assets/svg/fastRewind.svg'
import pause from '../../assets/svg/pause.svg'
import play from '../../assets/svg/play.svg'

interface AudioControlsProps {
    isPlaying: boolean,
    handlePlaying: () => void
}

export const AudioControls = ({ isPlaying, handlePlaying }: AudioControlsProps) => {

    const handlePlayButton = () => {
        handlePlaying()
    }

    if (isPlaying) {
        return <>
            <div id='buttonControlers'>
                <button>
                    <img src={fastRewind} alt="" />
                </button>

                <button id='playButton' onClick={handlePlayButton}>
                    <img src={pause} alt="" />
                </button>

                <button>
                    <img src={fastFoward} alt="" />
                </button>
            </div>
        </>
    } else {
        return <>
            <div id='buttonControlers'>
                <button>
                    <img src={fastRewind} alt="" />
                </button>

                <button id='playButton' onClick={handlePlayButton}>
                    <img src={play} alt="" />
                </button>

                <button>
                    <img src={fastFoward} alt="" />
                </button>
            </div>
        </>
    }

}