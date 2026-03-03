import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AnimeContext = createContext()


function AnimeProvider({ children }) {

    const [animes, setAnimes] = useState([])

    const [italyTrends, setItalyTrends] = useState()
    const [suggested, setSuggested] = useState()
    const [dubIta, setDubIta] = useState()
    const [search, setSearch] = useState('')


    const [watchAdded, setWatchAdded] = useState(false);

    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem("watchlist");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    function toggleWatchlist(anime) {

        const exists = watchlist.some(item => item.id === anime.id);

        if (exists) {
            setWatchlist(prev => prev.filter(item => item.id !== anime.id));
        } else {
            setWatchlist(prev => [...prev, anime]);
        }

        setWatchAdded(!watchlist.some(item => item.id === anime.id))

    }


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
            value={{
                animes, italyTrends, setItalyTrends, suggested, setSuggested, dubIta, setDubIta,
                search, setSearch, watchAdded, toggleWatchlist, watchlist
            }}>
            {children}
        </AnimeContext.Provider>
    )
}


function useAnimes() {

    const context = useContext(AnimeContext)

    return context
}

export { AnimeProvider, useAnimes }