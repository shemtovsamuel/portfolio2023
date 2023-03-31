import Layout from "../src/layout/Layout";

const TreeProject = () => {
  return (
    <Layout project>
      <div className="tree-project">
        <div className="container">
          <div className="project-feature-img">
            <img src="static/img/projects/tree.png" title="Tree" alt="Tree" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">
                      Test technique dans le cadre de mon stage chez Onepoint
                    </a>
                  </h6>
                  <h2>Tree - Application mobile Flutter chez Onepoint</h2>
                  <div className="media" />
                </div>
                <div className="article-content">
                  <p>
                    Tree est mon premier projet mobile réalisé en Flutter chez
                    Onepoint, développé en octobre 2022 comme test technique. Il
                    s'agit d'une application mobile qui présente une liste de 20
                    arbres de Paris avec des détails tels que le nom, l'espèce,
                    la hauteur, la circonférence et l'adresse, en utilisant
                    l'API OpenData de la ville de Paris.
                  </p>
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
                  <p>
                    Mobile :
                    <ul>
                      <li>Dart</li>
                      <li>Flutter</li>
                    </ul>
                  </p>
                  <h4>Illustrations de l'application</h4>
                </div>
                <div className="row">
                  <img
                    src="static/img/projects/tree1.png"
                    title="Tree 1"
                    alt="Tree 1"
                  />
                  <img
                    src="static/img/projects/tree2.png"
                    title="Tree 2"
                    alt="Tree 2"
                  />
                </div>
                <div className="nav tag-cloud">
                  <a href="#">Dart</a>
                  <a href="#">Flutter</a>
                  <a href="#">Mobile</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default TreeProject;
