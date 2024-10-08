import { useEffect, useRef, useState } from 'react'
import './AudioReproductor.css'

interface AudioReproductorProps {
    songUrl: string,
    isPlaying: boolean,
    playingSongId: number
}


export const AudioReproductor = ({ songUrl, isPlaying, playingSongId }: AudioReproductorProps) => {
    const [render, setRender] = useState(true)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    // if (audioRef.current) {
    //     audioRef.current.addEventListener('timeupdate', () => {
    //         if (audioRef.current) {
    //             const progressPercent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    //             progress.style.width = `${progressPercent}%`;
    //         }
    //     });
    // }

    useEffect(() => {
        setRender(true)
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.load()
            audioRef.current.play()
        }

        return () => {
            setRender(false)
        }
    }, [songUrl, playingSongId])

    useEffect(() => {

        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()

            }
        }

    }, [isPlaying])

    if (!songUrl) {
        return null
    }

    if (render) {
        return <>
            <audio controls ref={audioRef}>
                <source src={songUrl} type="audio/mpeg" />
            </audio>
        </>
    }
}