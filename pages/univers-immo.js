import Layout from "../src/layout/Layout";

const SingleBlog = () => {
    return (
        <Layout blog>
            <div className="single-blog">
                <div className="container">
                    <div className="blog-feature-img"></div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <article className="article">
                                <div className="article-title">
                                    <h6>
                                        <a href="#">Projet Freelance</a>
                                    </h6>
                                    <h2>Site Vitrine</h2>
                                    <div className="media">
                                        <div className="avatar">
                                            <img
                                                src="static/img/portfolio/universImmoLogo.png"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="media-body">
                                            <label>Univers Immo</label>
                                            <span>06/2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-content">
                                    <h4>L'entreprise</h4>
                                    <p>
                                        Univers Immo est une agence fondée en
                                        2003 dont la spécialité est l’immobilier
                                        d’entreprises. Avec plus de 500
                                        signatures à son actif notre agence
                                        conseille et accompagnes les PME, les
                                        foncières et les promoteurs immobiliers
                                        dans leurs recherches de locaux ou
                                        d’acquéreurs.
                                    </p>
                                    <h4>Ma mission</h4>
                                    <p>
                                        Le but était de créer un site vitrine
                                        présentant les biens immobiliers
                                        commerciaux de l'agence.
                                        <ul>
                                            <li>
                                                Accueil : Une introduction
                                                attrayante à l'agence et ses
                                                services.
                                            </li>
                                            <li>
                                                À propos : Une page détaillant
                                                l'histoire de l'agence, son
                                                éthique et son approche.
                                            </li>
                                            <li>
                                                Services : Une présentation des
                                                différents services offerts par
                                                l'agence.
                                            </li>
                                            <li>
                                                Produits : Une sélection de
                                                biens immobiliers disponibles
                                                pour la vente ou la location.
                                            </li>
                                            <li>
                                                L'équipe : Présentation des
                                                membres clés de l'équipe
                                                d'Univers Immo.
                                            </li>
                                            <li>
                                                Témoignages : Des témoignages de
                                                clients satisfaits pour établir
                                                la réputation de l'agence.
                                            </li>
                                            <li>
                                                Contact : Une page permettant
                                                aux visiteurs de prendre contact
                                                avec l'agence.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Le site a été conçu avec une approche
                                        responsive pour assurer une expérience
                                        utilisateur optimale sur tous les types
                                        d'appareils.
                                    </p>

                                    <h4>Technologies utilisées</h4>
                                    <p>
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JavaScript</li>
                                        </ul>
                                    </p>

                                    <h4>Illustrations de l'application</h4>
                                </div>
                                <div className="row">
                                    <img
                                        src="static/img/projects/universimmo.png"
                                        title="Univers Immo Home"
                                        alt="Univers Immo Home"
                                    />
                                    <img
                                        src="static/img/projects/universImmo1.png"
                                        title="Univers Immo Home"
                                        alt="Univers Immo Home"
                                    />
                                    <img
                                        src="static/img/projects/universImmo2.png"
                                        title="Univers Immo Home"
                                        alt="Univers Immo Home"
                                    />
                                </div>
                                <div className="nav tag-cloud">
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                    <a href="#">JavaScript</a>
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
