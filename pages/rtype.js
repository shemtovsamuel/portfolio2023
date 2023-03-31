import Layout from "../src/layout/Layout";

const SingleBlog = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/projects/area.png" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Projet Scolaire</a>
                  </h6>
                  <h2>R-Type - Epitech 3ème année</h2>
                  <div className="media" />
                </div>
                <div className="article-content">
                  <p>
                    R-Type est un projet scolaire réalisé au cours de ma
                    troisième année à Epitech du 09/01/2023 au 05/03/2023. C'est
                    un jeu de tir classique à défilement horizontal dans lequel
                    vous pilotez un vaisseau spatial et combattez des vagues de
                    forces ennemies. Le jeu consiste à naviguer à travers divers
                    niveaux, vaincre des boss difficiles et sauver le monde
                    d'une invasion extraterrestre.
                  </p>
                  <p>
                    R-Type peut être joué à la fois hors ligne et en ligne. En
                    mode en ligne, les joueurs peuvent se réunir pour relever
                    les défis du jeu en mode coopératif. Le mode en ligne
                    utilise une architecture client-serveur, avec le serveur de
                    jeu responsable de la gestion de l'état du jeu et de
                    l'application des règles du jeu.
                  </p>
                  <p>
                    Le moteur de jeu utilisé pour R-Type a également été utilisé
                    pour développer deux autres jeux : Factorio et Flappy Bird.
                    Bien que ces jeux soient très différents les uns des autres,
                    leur moteur de jeu partagé leur permet d'avoir des
                    similitudes en termes de performances et d'utilisabilité.
                  </p>
                  <h4>Lien du projet GitHub</h4>
                  <p>
                    Pour plus d'informations, consultez le dépôt GitHub du
                    projet :{" "}
                    <a
                      href="https://github.com/shemtovsamuel/RTYPE"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/shemtovsamuel/RTYPE
                    </a>
                  </p>
                  <h4>Membres du groupe</h4>
                  <ul>
                    <li>Samuel Shemtov</li>
                    <li>Quentin Caniou</li>
                    <li>Kaan Bouldoires</li>
                    <li>William Karkegi</li>
                    <li>Enzo Alaimo</li>
                  </ul>
                  <h4>Illustrations de l'application</h4>
                </div>
                <div className="row">
                  <img
                    src="static/img/projects/rtype1.png"
                    title="R-Type 1"
                    alt="R-Type 1"
                  />
                  <img
                    src="static/img/projects/rtype3.png"
                    title="R-Type 3"
                    alt="R-Type 3"
                  />
                </div>
                <div className="nav tag-cloud">
                  <a href="#">C++</a>
                  <a href="#">SFML</a>
                  <a href="#">Boost.Asio</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SingleBlog;
