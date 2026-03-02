import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AnimeContext = createContext()


function AnimeProvider({ children }) {

    const [animes, setAnimes] = useState([])

    const [italyTrends, setItalyTrends] = useState()
    const [suggested, setSuggested] = useState()
    const [dubIta, setDubIta] = useState()


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
            value={{ animes, italyTrends, setItalyTrends, suggested, setSuggested, dubIta, setDubIta }}>
            {children}
        </AnimeContext.Provider>
    )
}


function useAnimes() {

    const context = useContext(AnimeContext)

    return context
}

export { AnimeProvider, useAnimes }