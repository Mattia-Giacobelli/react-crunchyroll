import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function AnimePage() {

    const { id } = useParams()


    const [anime, setAnime] = useState()

    function getAnime() {

        axios.get(`${import.meta.env.VITE_LARAVEL_API_URL}animes/${id}`)
            .then(res => {

                console.log(res.data.data);


                setAnime(res.data.data)
            })
    }


    function stars() {


        const star = ['']

        for (let i = 0; i < 5; i++) {

            star.push(<i class="bi bi-star-fill"></i>)
        }

        return star
    }

    useEffect(() => {

        getAnime()

    }, [id])


    return (

        <>
            <div className="anime-card">

                <div className="card-img">
                    <img src={`${import.meta.env.VITE_LARAVEL_IMG_URL}/${anime?.cover}`} alt="cover" />
                </div>

                <div className="anime-info">

                    <h1>{anime?.name}</h1>

                    <h6>
                        <span>
                            {anime?.dubs.length > 0 && anime.subs.length > 0 && 'Dub|Sub'}
                            {anime?.dubs.length == 0 && anime.subs.length > 0 && 'Sottotitoli'}
                            {anime?.dubs.length > 0 && anime.subs.length == 0 && 'Doppiaggio'}
                        </span>

                        <i class="bi bi-dot"></i>

                        <span>
                            {anime?.genres?.map((genre, i) => {

                                return (

                                    <Link to={`/genres/${genre.id}`} className="genre" key={genre.id}>
                                        {genre.name} {i < anime.genres.length - 1 && ','}
                                    </Link>
                                )
                            })}
                        </span>
                    </h6>

                    <h6>
                        {stars().map(star => {

                            return (
                                star
                            )
                        })}
                        <span className="ps-2 pe-2">|</span>
                        Valutazione media:
                        <span className="vote">
                            {anime?.vote / 2}
                        </span>
                    </h6>

                    <div>
                        <button className="btn orange-btn me-3">
                            INIZIA A GUARDARE
                        </button>
                        <button className="btn orange-btn-outline me-3">
                            <i class="bi bi-bookmark"></i>
                        </button>


                        <span className="orange p-2 fs-2">
                            <i class="bi bi-plus"></i>
                        </span>
                        <span className="orange p-2 fs-4">
                            <i class="bi bi-share"></i>
                        </span>
                    </div>

                    <div className="description">

                        <p>
                            {anime?.plot}
                        </p>

                        <div>
                            <h6>
                                <span className="text-light">Doppiaggio:</span>
                                {anime?.dubs?.map((dub, i) => {

                                    return (

                                        <span key={dub.id}>
                                            {dub.language} {i < anime.dubs.length - 1 && ','}
                                        </span>
                                    )
                                })}
                            </h6>

                            <h6>
                                <span className="text-light">Sottotitoli: </span>

                                {anime?.subs?.map((sub, i) => {

                                    return (

                                        <span key={sub.id}>
                                            {sub.language} {i < anime.subs.length - 1 && ','}
                                        </span>
                                    )
                                })}
                            </h6>
                            <h6>
                                <span className="text-light">
                                    Studio di animazione:
                                </span>
                                {anime?.animation_studio.name}
                            </h6>
                            <h6>
                                <span className="text-light">
                                    {anime?.type.name}
                                </span>
                            </h6>

                        </div>
                    </div>

                </div>
            </div>

            <div className="container episodes">

                <h1 className="text-light  mb-3">Episodi</h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {anime?.episodes_list?.length > 0 ? anime?.episodes_list?.map(episode => {

                        return (

                            <div key={episode.id} className="col" >

                                <div className="card">

                                    <div className="card-img-top">
                                        <img src={`${import.meta.env.VITE_LARAVEL_IMG_URL}/${episode.cover}`} alt="cover" />
                                    </div>

                                    <div className="card-body">
                                        <h6 className="text-light"> {episode.title} </h6>
                                    </div>
                                </div>

                            </div>
                        )
                    }) : <h3> Nessun episode per questo genere </h3>}

                </div>

            </div>

        </>
    )
}