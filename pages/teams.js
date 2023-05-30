import Layout from "../src/layout/Layout";

const TeamsProject = () => {
    return (
        <Layout blog>
            <div className="single-blog">
                <div className="container">
                    <div className="blog-feature-img">
                        <img
                            src="static/img/projects/teams.png"
                            title="Teams"
                            alt="Teams"
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <article className="article">
                                <div className="article-title">
                                    <h6>
                                        <a href="#">Projet Scolaire</a>
                                    </h6>
                                    <h2>Teams - Epitech 3ème année</h2>
                                    <div className="media">
                                        <div className="avatar">
                                            <img
                                                src="static/img/portfolio/epitechLogo.jpeg"
                                                title=""
                                                alt=""
                                            />
                                        </div>
                                        <div className="media-body">
                                            <label>Epitech</label>
                                            <span>3ème année</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article-content">
                                    <p>
                                        "Teams" est un projet qui m'a permis
                                        d'acquérir une connaissance approfondie
                                        de la programmation en C et de la
                                        gestion de communication réseau.
                                    </p>
                                    <h4>Sujet du projet</h4>
                                    <p>
                                        L'objectif du projet "Teams" était de
                                        développer un système de messagerie et
                                        de communication de groupe. Cela
                                        nécessitait la création d'un serveur
                                        capable de gérer plusieurs clients
                                        simultanément, l'élaboration d'un
                                        protocole de communication personnalisé
                                        et la mise en place d'une interface
                                        client CLI pour interagir avec le
                                        serveur.
                                    </p>
                                    <h4>Lien du projet GitHub</h4>
                                    <p>
                                        Pour plus d'informations, consultez le
                                        dépôt GitHub du projet :{" "}
                                        <a
                                            href="https://github.com/shemtovsamuel/teams"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://github.com/shemtovsamuel/teams
                                        </a>
                                    </p>
                                    <h4>Apprentissages clés</h4>
                                    <p>
                                        Ce projet m'a offert une occasion
                                        précieuse d'approfondir mes
                                        connaissances en programmation en C, en
                                        mettant un accent particulier sur la
                                        multiplexion des entrées-sorties, la
                                        conception de protocoles de
                                        communication et la persistance des
                                        données.
                                    </p>
                                    <h4>Technologies utilisées</h4>
                                    <ul>
                                        <li>C</li>
                                        <li>Sockets TCP</li>
                                    </ul>
                                </div>
                                <div className="nav tag-cloud">
                                    <a href="#">C</a>
                                    <a href="#">TCP Sockets</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TeamsProject;
