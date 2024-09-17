import { useEffect, useRef, useState } from 'react'
import './AudioReproductor.css'

interface AudioReproductorProps {
    songUrl: string
}


export const AudioReproductor = ({ songUrl }: AudioReproductorProps) => {
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