import Layout from "../src/layout/Layout";

const SingleBlog = () => {
    return (
        <Layout blog>
            <div className="single-blog">
                <div className="container">
                    <div className="blog-feature-img">
                        <img
                            src="static/img/projects/compressor.png"
                            title=""
                            alt=""
                        />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <article className="article">
                                <div className="article-title">
                                    <h6>
                                        <a href="#">Projet Scolaire</a>
                                    </h6>
                                    <h2>Image Compressor</h2>
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
                                    <h4>Mission</h4>
                                    <p>
                                        Image Compressor est un projet scolaire
                                        réalisé lors de ma troisième année à
                                        Epitech, dont le but est de créer un
                                        programme de compression d'image en
                                        utilisant le langage de programmation
                                        Haskell.
                                    </p>
                                    <h4>implémentation</h4>
                                    <p>
                                        Une façon assez basique de compresser
                                        une image consiste à réduire le nombre
                                        de couleurs qu'elle contient. Pour ce
                                        faire, trois étapes sont nécessaires :
                                    </p>
                                    <ol>
                                        <li>
                                            Lire l'image et extraire les
                                            couleurs de chaque pixel.
                                        </li>
                                        <li>
                                            Regrouper ces couleurs en clusters
                                            et remplacer chaque couleur d'un
                                            cluster donné par la couleur moyenne
                                            de ce cluster.
                                        </li>
                                        <li>
                                            Indexer les moyennes des clusters et
                                            créer l'image compressée.
                                        </li>
                                    </ol>
                                    <h4>Algorithme K-means</h4>
                                    <p>
                                        Dans ce projet, j'ai dû implémenter
                                        l'algorithme K-means.
                                    </p>
                                    <p>
                                        <b>AVANTAGES :</b>
                                        <ul>
                                            <li>Simplicité de compréhension</li>
                                            <li>
                                                Efficace pour les ensembles de
                                                données de taille moyenne
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        <b>INCONVÉNIENTS :</b>
                                        <ul>
                                            <li>
                                                Peut converger vers des optima
                                                locaux
                                            </li>
                                            <li>
                                                Peut être sensible aux valeurs
                                                initiales des clusters
                                            </li>
                                            <li>
                                                Ne fonctionne pas bien avec des
                                                formes de clusters non linéaires
                                            </li>
                                        </ul>
                                    </p>
                                    <h4>Compression</h4>
                                    <div className="row">
                                        <img
                                            src="static/img/portfolio/imagecompressor11.png"
                                            title="Image Compressor 1"
                                            alt="Image Compressor 1"
                                        />
                                    </div>
                                    <h4>Lien du projet GitHub</h4>
                                    <p>
                                        Pour plus d'informations, consultez le
                                        dépôt GitHub du projet :{" "}
                                        <a
                                            href="https://github.com/shemtovsamuel/image_compressor"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            https://github.com/shemtovsamuel/image_compressor
                                        </a>
                                    </p>
                                    <h4>Technologies utilisées</h4>
                                    <p>
                                        <ul>
                                            <li>Haskell</li>
                                        </ul>
                                    </p>
                                    <div className="nav tag-cloud">
                                        <a href="#">Haskell</a>
                                        <a href="#">Algorithme K-means</a>
                                    </div>
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
