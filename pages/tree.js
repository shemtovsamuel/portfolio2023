import Layout from "../src/layout/Layout";

const SingleBlog = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/portfolio/tree.png" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Projet Professionnel</a>
                  </h6>
                  <h2>Projet de l'arbre - Onepoint 2022</h2>
                  <div className="media" />
                </div>
                <div className="article-content">
                  <p>Test technique dans le cadre de mon stage chez Onepoint</p>
                  <p>
                    Le Pojet de l'arbre est mon premier projet mobile réalisé en
                    Flutter chez Onepoint, développé en octobre 2022 comme test
                    technique. Il s'agit d'une application mobile qui présente
                    une liste de 20 arbres de Paris avec des détails tels que le
                    nom, l'espèce, la hauteur, la circonférence et l'adresse, en
                    utilisant l'API OpenData de la ville de Paris.
                  </p>
                  <p>Le projet a été réalisé en utilisant l'architecture de</p>
                  <h4>Lien du projet GitHub</h4>
                  <p>
                    Pour plus d'informations, consultez le dépôt GitHub du
                    projet :{" "}
                    <a
                      href="https://github.com/shemtovsamuel/tree"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/shemtovsamuel/tree
                    </a>
                  </p>
                  <h4>Technologies utilisées</h4>
                  <ul>
                    <li>Dart</li>
                    <li>Flutter</li>
                  </ul>

                  <h4>Illustrations de l'application</h4>
                </div>
                <div className="row">
                  <img
                    src="static/img/projects/tree.png"
                    title="Area Mobile"
                    alt="Area Mobile"
                  />
                </div>
                <div className="nav tag-cloud">
                  <a href="#">React</a>
                  <a href="#">TypeScript</a>
                  <a href="#">Go</a>
                  <a href="#">Flutter</a>
                  <a href="#">Dart</a>
                  <a href="#">Docker</a>
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
