import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
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
        <h3>Témoignages</h3>
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
                src="https://media.licdn.com/dms/image/C5603AQHXERbnGP797w/profile-displayphoto-shrink_800_800/0/1573060739210?e=1684368000&v=beta&t=bA7KereGVQepeHUg-aQ9gpEATFcJ1JVO7hH1VesyCWI"
                title=""
                alt=""
              />
            </div>
            <div className="media-body">
              <p>
                C'était vraiment un plaisir d'avoir Samuel dans mon équipe de
                développeurs, il s'est montré intéressé par le fonctionnement de
                l'entreprise et son comportement général a été très apprécié au
                sein de l'entreprise, et pas seulement dans le secteur
                informatique.
              </p>
              <h6>Sebastien Bisch</h6>
              <span>Director Of information Technonology, RTL AdConnect</span>
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
                src="https://media.licdn.com/dms/image/D4E35AQHgPESavaNheg/profile-framedphoto-shrink_800_800/0/1679477123804?e=1680566400&v=beta&t=yAbsTeGYImRrrGZRSg9HglfS6_hjXjUHB2DOSya_WDk"
                title=""
                alt=""
              />
            </div>
            <div className="media-body">
              <p>
                Samuel a fait un excellent premier stage chez nous. Il a été de
                très bonne volonté et très curieux. J'espère qu'il a pu
                apprendre plein de choses et nous sommes ravis de pouvoir
                continuer avec lui encore une fois.
              </p>
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
