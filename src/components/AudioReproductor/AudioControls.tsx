import { useEffect, useRef, useState } from 'react'
import './AudioReproductor.css'

interface AudioReproductorProps {
    songUrl: string,
    isPlaying: boolean
}


export const AudioReproductor = ({ songUrl, isPlaying}: AudioReproductorProps) => {
    const [render, setRender] = useState(true)

    const audioRef = useRef<HTMLAudioElement | null>(null)

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
    }, [songUrl])

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