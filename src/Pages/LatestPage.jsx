import { useEffect, useState } from "react"
import { useAnimes } from "../Contexts/AnimeContext"
import { Link } from "react-router-dom"

export default function LatestPage() {

    const { animes } = useAnimes()

    const [lastDay, setLastDay] = useState([])

    const [lastWeek, setLastWeek] = useState([])

    const [previous, setPrevious] = useState([])


    useEffect(() => {

        const today = new Date();

        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(today.getMonth() - 2);

        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);


        const filteredAnimes = animes.filter(anime => {

            if (!anime.end_date) return false;

            const animeEndDate = new Date(anime.end_date);

            return animeEndDate >= oneYearAgo && animeEndDate <= twoMonthsAgo;
        });


        // console.log(animes);

        setLastDay(animes.filter(anime => anime.completed == 0))

        setLastWeek(animes.filter(anime => anime.completed == 0))

        setPrevious(filteredAnimes)


    }, [animes])


    return (

        <>

            <div className="container">

                <h1 className="text-light  mb-3">Ultime 24h</h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {lastDay.length > 0 ? lastDay?.map(anime => {

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
                    }) : <h3> Nessuna uscita nelle ultime 24h </h3>}


                </div>


                <h1 className="text-light  mb-3">Ultima settimana</h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {lastWeek.length > 0 ? lastWeek?.map(anime => {

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
                    }) : <h3> Nessuna uscita nell'ultima settimana </h3>}

                </div>


                <h1 className="text-light mb-3">Precedenti</h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {previous.length > 0 ? previous?.map(anime => {

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
                    }) : <h3> Nessuna uscita recente </h3>}

                </div>

            </div >

        </>
    )
}