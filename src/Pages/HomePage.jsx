
import { useAnimes } from "../Contexts/AnimeContext"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";

export default function HomePage() {

    const { animes } = useAnimes()

    const cardStyle = {
        height: "80vh",
        width: "100vw",
        background: "#f2f2f2",
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        fontWeight: "bold",
    };



    useEffect(() => {
        console.log(animes);

    }, [animes])

    return (

        <>
            <div className="jumbo">


                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000, // 3 secondi
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                >
                    {animes?.map((anime, i) => (
                        i == 2 || i == 8 || i == 15 || i == 18 ?
                            <SwiperSlide key={i}>

                                <div style={cardStyle}>

                                    <img src={`${import.meta.env.VITE_LARAVEL_IMG_URL}/${anime.cover}`} alt="anime cover"
                                        className="swipe-img" />

                                    <div className="swipe-info">
                                        <h1>{anime.name}</h1>

                                        <h6>
                                            <span>{anime.dubs.length + anime.subs.length}</span> Dub|Sub
                                        </h6>

                                        <p>
                                            {anime.plot}
                                        </p>
                                    </div>


                                </div>
                            </SwiperSlide> : ''
                    ))}
                </Swiper>

            </div>

            <div className="container">



            </div>
        </>
    )
}