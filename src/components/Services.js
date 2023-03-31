import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Mon travail</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg  icon-browser" />
              <div className="feature-content media-body">
                <h5>Développeur Full Stack</h5>
                <p>
                  Capable de travailler avec une grande variété de langages de
                  programmation et de frameworks pour créer des solutions
                  robustes et évolutives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-genius" />
              <div className="feature-content media-body">
                <h5>Développeur Web</h5>
                <p>
                  Ma créativité est un atout majeur pour créer des sites Web
                  modernes et esthétiques qui améliorent l'expérience
                  utilisateur au maximum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Développeur Mobile</h5>
                <p>
                  J'utilise les dernières technologies pour créer des
                  applications performantes et compatibles avec les deux
                  principales plateformes mobiles, iOS et Android. Techno :
                  React Native - Flutter
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-gears" />
              <div className="feature-content media-body">
                <h5>Chef de Projet</h5>
                <p>
                  • Gestion de projet : Planification, organisation, méthodes
                  agiles, établissement de budgets
                  <br />• Leadership : prise de décision, résolution de
                  problèmes, coordination de l'équipe de travail
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
