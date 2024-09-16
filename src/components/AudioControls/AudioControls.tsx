import './AudioControls.css'

import fastFoward from '../../assets/svg/fastForward.svg'
import fastRewind from '../../assets/svg/fastRewind.svg'
import pause from '../../assets/svg/pause.svg'
import play from '../../assets/svg/play.svg'

export const AudioControls = () => {
    return <>
        <div id='buttonControlers'>
            <button>
                <img src={fastRewind} alt="" />
            </button>

            <button id='playButton'>
                <img src={play} alt="" />
            </button>

            <button>
                <img src={fastFoward} alt="" />
            </button>
        </div>
    </>
}