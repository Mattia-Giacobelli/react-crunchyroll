import { useEffect, useState } from "react";
import { useAnimes } from "../Contexts/AnimeContext";
import { Link } from "react-router-dom";

export default function AZPage() {

    const { animes } = useAnimes()

    const [sortedAnimes, setSortedAnimes] = useState()

    useEffect(() => {

        setSortedAnimes(animes.sort((a, b) => a.name.localeCompare(b.name)))
        console.log();



    }, [animes])



    return (

        <>

            <div className="container">



                <h1 className="text-light  mb-5">A-Z</h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {sortedAnimes?.map(anime => {

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

                            </div>)
                    })}

                </div>


            </div >

        </>
    )
}