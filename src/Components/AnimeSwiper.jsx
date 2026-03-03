import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


export default function AnimeSwiper({ animes, style }) {

    const cardStyle = {
        height: "100%",
        width: "100%",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // allinea testo a sinistra
        justifyContent: "flex-end", // parte dall'alto
        position: "relative",
        overflow: "hidden",
    };


    return (


        <>

            <Swiper
                className="anime-swiper"
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 4 },
                    1400: { slidesPerView: 7.5 }
                }}
                pagination={{ clickable: true }}
                centeredSlides={false}
                navigation={true}
            >
                {animes?.map((anime, i) => (
                    <SwiperSlide key={i}>

                        <Link to={`/animes/${anime.id}`}>

                            <div style={cardStyle}>

                                <img src={`${import.meta.env.VITE_LARAVEL_IMG_URL}/${anime.cover}`} alt="anime cover"
                                    className="anime-swipe-img" />

                                <div className="anime-swipe-info">
                                    <h6>{anime.name}</h6>

                                    <h6>
                                        {anime.dubs.length > 0 && anime.subs.length > 0 && 'Dub|Sub'}
                                        {anime.dubs.length == 0 && anime.subs.length > 0 && 'Sottotitoli'}
                                        {anime.dubs.length > 0 && anime.subs.length == 0 && 'Doppiaggio'}
                                    </h6>

                                </div>


                            </div>

                        </Link>

                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}