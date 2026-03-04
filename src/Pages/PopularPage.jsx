import { Link } from "react-router-dom"
import { useAnimes } from "../Contexts/AnimeContext"

export default function PopularPage() {

    const { animes } = useAnimes()

    return (

        <>

            <div className="container">

                <h1 className="text-light mt-5 mb-4"> Popular</h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {animes && animes.map(anime => {

                        return (

                            <div key={anime.id} className="col" >

                                <div className="card">

                                    <Link to={`/animes/${anime.id}`}>

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

                                    </Link>

                                </div>

                            </div>
                        )
                    })}


                </div>

            </div>

        </>
    )
}