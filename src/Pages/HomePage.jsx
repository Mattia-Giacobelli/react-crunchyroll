
import { useAnimes } from "../Contexts/AnimeContext"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import AnimeSwiper from "../Components/AnimeSwiper";
import { Link } from "react-router-dom";

export default function HomePage() {

    const { animes, italyTrends, setItalyTrends, suggested, setSuggested, dubIta, setDubIta, watchAdded } = useAnimes()

    const cardStyle = {
        height: "80vh",
        width: "100%",
        background: "#f2f2f2",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        fontWeight: "bold",
    };



    useEffect(() => {
        // console.log(animes);

        setItalyTrends(animes.filter(anime => anime.dubs?.some(dub => dub.language.toLowerCase() === "italiano") || anime.subs?.some(sub => sub.language.toLowerCase() === "italiano")))
        // console.log(italyTrends);

        setSuggested(animes.filter(anime => anime.id == 2 || anime.id == 8 || anime.id == 15 || anime.id == 18))

        setDubIta(animes.filter(anime => anime.dubs?.some(dub => dub.language.toLowerCase() === "italiano")))


    }, [animes])

    return (

        <>
            <div className="jumbo">


                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000, // 3 secondi
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        type: 'progressbar',
                    }}
                    navigation={true}
                >
                    {animes?.map((anime, i) => (
                        i == 2 || i == 8 || i == 15 || i == 18 ?
                            <SwiperSlide key={i}>

                                <Link to={`/animes/${anime.id}`}>

                                    <div style={cardStyle}>

                                        <img src={`${import.meta.env.VITE_LARAVEL_IMG_URL}/${anime.cover}`} alt="anime cover"
                                            className="swipe-img" />

                                        <div className="swipe-info">
                                            <h1>{anime.name}</h1>

                                            <h6>
                                                <span>{anime.dubs.length + anime.subs.length}</span> Dub|Sub
                                            </h6>
                                            <div>
                                                <button className="btn orange-btn me-3">
                                                    INIZIA A GUARDARE
                                                </button>
                                                <button onClick={() => { toggleWatchlist(anime) }} className="btn orange-btn-outline me-3">
                                                    <i class={`bi ${watchAdded ? "bi-bookmark-fill" : "bi-bookmark"}`}></i>
                                                </button>
                                            </div>
                                            <p>
                                                {anime.plot}
                                            </p>
                                        </div>



                                    </div>
                                </Link>
                            </SwiperSlide> : ''
                    ))}
                </Swiper>

            </div >

            <div className="container-custom text-light">

                <h1>Anime di tendenza in Italia</h1>

                <AnimeSwiper animes={italyTrends} />

                <h1>I nostri consigliati per te</h1>

                <AnimeSwiper animes={suggested} />

                <h1>Doppiaggio in Italiano</h1>

                <AnimeSwiper animes={dubIta} />

                <div className="d-flex flex-column justify-content-center align-items-center">

                    <h6 className="text-center text-light  w-50 mt-5">
                        Stai ancora cercando qualcosa da guardare? <br />
                        Dai un occhiata al catalogo
                    </h6>

                    <Link className="btn orange-btn-outline" to={'/popular'}>
                        Vedi tutto
                    </Link>

                </div>
            </div>


        </>
    )
}