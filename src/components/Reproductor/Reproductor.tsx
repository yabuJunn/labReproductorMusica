import './Reproductor.css'

interface ReproductorProps {
    imageUrl: string,
    songTitle: string,
    songUrl: string
}


export const Reproductor = ({ imageUrl, songTitle, songUrl }: ReproductorProps) => {

    console.log("Hola")

    return <>
        <div id="reproductor">
            <h1>{songTitle}</h1>
            <audio controls>
                <source src={songUrl} type="audio/mpeg" />
            </audio>
        </div>
    </>
}