import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    const [genres, setGenres] = useState([])
    function getGenres() {

        axios.get(`${import.meta.env.VITE_LARAVEL_API_URL}genres`)
            .then(res => {
                console.log(res.data.data);
                setGenres(res.data.data)

            })
    }

    const genresList1 = genres.slice(0, 5);
    const genresList2 = genres.slice(5, 10);


    useEffect(() => {
        getGenres()
    }, [])

    return (

        <>

            <header>

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink to={'/'}>
                            <img className="navbar-brand" src={logo} />
                        </NavLink>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={'/latest'}>Novità</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/popular'}>Popolari</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={'/simulcast'}>Simulcast</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                        data-bs-auto-close="outside">
                                        Categorie
                                    </NavLink>
                                    <ul className="dropdown-menu d-flex">
                                        <li>
                                            <NavLink className="dropdown-item" to={'/animes'}>Sfoglia tutto (A - Z)</NavLink>
                                            <NavLink className="dropdown-item" to={'/releases'}>Calendario delle uscite</NavLink>
                                            <NavLink className="dropdown-item" to={'/music'}>Video musicali e concerti</NavLink>
                                        </li>

                                        <li className='divide'>
                                            <NavLink className="dropdown-item" to={'/genres'}>Generi</NavLink>

                                            <div className="d-flex">
                                                <div>
                                                    {genresList1 && genresList1.map(genre => {

                                                        // console.log(genre);

                                                        return (
                                                            <NavLink
                                                                key={genre.id}
                                                                className="dropdown-item" type='button'
                                                                to={`/genres/${genre.id}`}
                                                            >
                                                                {genre.name}
                                                            </NavLink>
                                                        )
                                                    })}

                                                </div>

                                                <div>
                                                    {genresList2 && genresList2.map(genre => {

                                                        // console.log(genre);

                                                        return (
                                                            <NavLink
                                                                key={genre.id}
                                                                className="dropdown-item" type='button'
                                                                to={`/genres/${genre.id}`}
                                                            >
                                                                {genre.name}
                                                            </NavLink>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <NavLink className="btn btn-outline-dark" to={'/search'}>
                                <i class="bi bi-search hide-search"></i>
                            </NavLink>
                        </div>
                    </div>
                </nav>

            </header>

        </>
    )
}