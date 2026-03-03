import { useEffect, useState } from "react"
import { useAnimes } from "../Contexts/AnimeContext"
import { Link } from "react-router-dom"

export default function SearchPage() {

    const { animes, search, setSearch } = useAnimes()

    const [searchedAnimes, setsSarchedAnimes] = useState()

    function filterAnimes() {

        const filteredAnimes = animes.filter(anime => anime.name.toLowerCase().includes(search.toLowerCase()))

        setsSarchedAnimes(filteredAnimes)
    }

    useEffect(() => {

        filterAnimes()

    }, [search])

    return (

        <>
            <div className="search-bar">
                <input type="text" value={search} onChange={e => { setSearch(e.target.value) }} placeholder="Cerca..." />
            </div>
            <div className="container">



                <h1 className="text-light  mb-3"></h1>

                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {search == '' ? animes?.map(anime => {

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
                    })
                        :
                        searchedAnimes?.map(anime => {

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
                        })}


                </div>


            </div >

        </>
    )
}