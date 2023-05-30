import Layout from "../src/layout/Layout";

const SingleBlogRTL = () => {
    return (
        <Layout blog>
            <div className="single-blog">
                <div className="container">
                    <div className="blog-feature-img">
                        <img
                            src="static/img/projects/RTL.png"
                            title=""
                            alt=""
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <article className="article">
                                <div className="article-title">
                                    <h6>
                                        <a href="#">Projet professionnel</a>
                                    </h6>
                                    <h2>Stage chez RTL AdConnect</h2>
                                    <div className="media">
                                        <div className="avatar">
                                            <img
                                                src="static/img/portfolio/rtlLogo.jpeg"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="media-body">
                                            <label>RTL Ad Connect</label>
                                            <span>07/2021 - 12/2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-content">
                                    <p>
                                        J'ai effectué un stage au sein de RTL
                                        AdConnect du 5 juillet 2021 au 31
                                        décembre 2021. Durant ce stage, j'ai
                                        travaillé sur le développement d'une
                                        application web reliée à l’annuaire de
                                        l’entreprise pour faciliter la gestion
                                        des utilisateurs. Ce projet m'a permis
                                        de mettre en pratique et de renforcer
                                        mes compétences en développement full
                                        stack.
                                    </p>
                                    <h4>L'entreprise</h4>
                                    <p>
                                        RTL AdConnect est spécialisée dans la
                                        vente d’espace vidéo de RTL group. C’est
                                        une société internationale fournissant
                                        un accès simplifié à l'ensemble du
                                        portefeuille vidéo de RTL Group ainsi
                                        qu'à des mandats externes tels que ITV
                                        au Royaume-Uni ou RAI en Italie, sur un
                                        total de 12 marchés, plus de 150 chaînes
                                        de télévision et 500 plateformes en
                                        ligne. C’est l’entreprise leader en
                                        Europe dans le secteur.
                                    </p>

                                    <h4>Ma mission</h4>
                                    <p>
                                        L'objectif principal de ce projet était
                                        de développer une application web pour
                                        gérer les utilisateurs de l'entreprise.
                                        L'application devait être reliée à
                                        l'Active Directory de l'entreprise pour
                                        récupérer les informations des
                                        utilisateurs et les afficher de manière
                                        ergonomique. De plus, j'ai mis en place
                                        un formulaire pour la création de
                                        nouveaux utilisateurs et j'ai élaboré un
                                        script pour ajouter automatiquement ces
                                        nouveaux utilisateurs à l'Active
                                        Directory.
                                    </p>
                                    <h4>Technologies utilisées</h4>
                                    <p>
                                        <ul>
                                            <li>Angular</li>
                                            <li>Angular Material</li>
                                            <li>Spring Boot</li>
                                            <li>Java</li>
                                            <li>TypeScript</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Active Directory</li>
                                        </ul>
                                    </p>
                                    <h4>Conclusion</h4>
                                    <p>
                                        Cette expérience de stage chez RTL
                                        AdConnect a été très enrichissante pour
                                        moi, tant sur le plan personnel que
                                        professionnel. J'ai acquis de nouvelles
                                        compétences en développement et j'ai
                                        confirmé mon désir de devenir
                                        développeur full stack.
                                    </p>
                                    <h4>Illustrations de l'application</h4>
                                </div>
                                <div className="row">
                                    <img
                                        src="static/img/portfolio/rtl1.png"
                                        title="RTL App 1"
                                        alt="RTL App 1"
                                    />
                                    <img
                                        src="static/img/portfolio/rtl2.png"
                                        title="RTL App 2"
                                        alt="RTL App 2"
                                    />
                                </div>
                                <div className="nav tag-cloud">
                                    <a href="#">Angular</a>
                                    <a href="#">Spring Boot</a>
                                    <a href="#">Java</a>
                                    <a href="#">TypeScript</a>
                                    <a href="#">HTML</a>
                                    <a href="#">CSS</a>
                                    <a href="#">Active Directory</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SingleBlogRTL;
