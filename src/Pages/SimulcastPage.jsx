import { useEffect, useState } from "react"
import { useAnimes } from "../Contexts/AnimeContext"

export default function SimulcastPage() {

    const { animes } = useAnimes()

    const [simulcast, setSimulcast] = useState()



    useEffect(() => {

        setSimulcast(animes.filter(anime => anime.dubs?.some(dub => dub.language.toLowerCase() === "italiano") && anime.dubs?.some(dub => dub.language.toLowerCase() === "giapponese")))

    }, [animes])


    return (

        <>

            <div className="container">

                <h1 className="text-light mt-5 mb-4"> Simulcast</h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {simulcast && simulcast.map(anime => {

                        return (

                            <div key={anime.id} className="col" >

                                <div className="card">

                                    <div className="card-img-top">
                                        <img src={`${import.meta.env.VITE_LARAVEL_IMG_URL}/${anime.cover}`} alt="cover" />
                                    </div>

                                    <div className="card-body">
                                        <h6> {anime.name} </h6>

                                        <span>
                                            {anime.dubs.length > 0 && anime.subs.length > 0 && 'Dub|Sub'}
                                            {anime.dubs.length == 0 && anime.subs.length > 0 && 'Sottotitoli'}
                                            {anime.dubs.length > 0 && anime.subs.length == 0 && 'Doppiaggio'}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        )
                    })}


                </div>

            </div>

        </>
    )
}