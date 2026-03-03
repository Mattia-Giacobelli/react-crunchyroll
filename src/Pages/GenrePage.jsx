import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function GenrePage() {


    const { id } = useParams()

    const [animes, setAnimes] = useState([])


    function getGenreAnimes() {


        axios.get(`${import.meta.env.VITE_LARAVEL_API_URL}genres/${id}`)
            .then(res => {

                setAnimes(res.data.data)
                console.log(res.data.data);


            })
    }


    useEffect(() => {

        getGenreAnimes()
    }, [id])


    return (

        <>

            <div className="container">

                <h1 className="text-light  mb-3"></h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {animes.length > 0 ? animes?.map(anime => {

                        return (

                            <div key={anime.id} className="col" >

                                <Link to={`/animes/${anime.id}`}>

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

                                </Link>

                            </div>
                        )
                    }) : <h3> Nessun anime per questo genere </h3>}


                </div>


            </div>

        </>
    )
}