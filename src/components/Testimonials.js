import { Fragment } from "react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Grid,
    Navigation,
    Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";
import { translations } from "./translationsData";
import { useContext } from "react";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
    const { night } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const props = {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".owl-dots",
            clickable: true,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 25 },
        },
    };
    return (
        <Fragment>
            <div className="title">
                <h3>{translations[language].testimonialsTitle}</h3>
            </div>
            <Swiper {...props}>
                <SwiperSlide className="testimonial-01 media">
                    <a
                        href="https://www.linkedin.com/in/sebastien-bisch-55a5805/"
                        target="_blank"
                        className="card-link"
                    >
                        <div className="avatar">
                            <img
                                src="https://media.licdn.com/dms/image/C5603AQHXERbnGP797w/profile-displayphoto-shrink_800_800/0/1573060739210?e=1690416000&v=beta&t=NflHXKOlaV1SIhjJd_cKg5U9bww5i194b2WHh1tK6RA"
                                title=""
                                alt=""
                            />
                        </div>
                        <div className="media-body">
                            <p>{translations[language].testimonials1}</p>
                            <h6>Sebastien Bisch</h6>
                            <span>
                                Director Of information Technonology, RTL
                                AdConnect
                            </span>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="testimonial-01 media">
                    <a
                        href="https://www.linkedin.com/in/lucas-leprestre/"
                        target="_blank"
                        className="card-link"
                    >
                        <div className="avatar">
                            <img
                                src="https://media.licdn.com/dms/image/D4E35AQHgPESavaNheg/profile-framedphoto-shrink_800_800/0/1679477123804?e=1685635200&v=beta&t=WbTxAhsASTRKMl1WO3bd0fB6v2vWL0cu_rNIUmTljTQ"
                                title=""
                                alt=""
                            />
                        </div>
                        <div className="media-body">
                            <p>{translations[language].testimonials2}</p>
                            <h6>Lucas Leprestre</h6>
                            <span>Lead Developer, Onepoint</span>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
            <div className="owl-dots"></div>
        </Fragment>
    );
};
export default Testimonials;
