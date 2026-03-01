import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AnimeContext = createContext()


function AnimeProvider({ children }) {

    const [animes, setAnimes] = useState([])


    function getAnimes() {

        axios.get(`${import.meta.env.VITE_LARAVEL_API_URL}animes`)
            .then(res => {

                setAnimes(res.data.data)
            })
    }


    useEffect(() => {

        getAnimes()
    }, [])

    useEffect(() => {
        console.log(animes);

    }, [animes])


    return (

        <AnimeContext.Provider
            value={{ animes }}>
            {children}
        </AnimeContext.Provider>
    )
}


function useAnimes() {

    const context = useContext(AnimeContext)

    return context
}

export { AnimeProvider, useAnimes }