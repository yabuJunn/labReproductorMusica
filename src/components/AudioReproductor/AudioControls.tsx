import './AudioReproductor.css'

interface AudioReproductorProps {
    songUrl: string
}

export const AudioReproductor = ({ songUrl }: AudioReproductorProps) => {

    return <>
        <audio controls>
            <source src={songUrl} type="audio/mpeg" />
        </audio>
    </>
}