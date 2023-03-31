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
                  <h2>Area - Epitech 3ème année</h2>
                  <div className="media" />
                </div>
                <div className="article-content">
                  <p>
                    Area est un projet scolaire réalisé lors de ma troisième
                    année à Epitech, dont le but est de créer une plateforme
                    d'automatisation similaire à IFTTT et/ou Zapier. Le projet
                    comprend une application web et mobile et permet de réaliser
                    242 actions et 4 réactions avec nos services tels que
                    Github, Asana, Miro, Linkedin, Twitter et Trello.
                  </p>
                  <p>
                    Le projet est composé de trois parties principales : un
                    serveur d'applications, un client web et un client mobile.
                    Le serveur d'applications met en œuvre toutes les
                    fonctionnalités, tandis que le client web et mobile
                    permettent de se connecter à l'application depuis un
                    navigateur ou un téléphone.
                  </p>
                  <h4>Lien du projet GitHub</h4>
                  <p>
                    Pour plus d'informations, consultez le dépôt GitHub du
                    projet :{" "}
                    <a
                      href="https://github.com/shemtovsamuel/Area.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/shemtovsamuel/Area.git
                    </a>
                  </p>
                  <h4>Technologies utilisées</h4>
                  <p>
                    Front End :
                    <ul>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Chakra</li>
                      <li>Material UI</li>
                    </ul>
                  </p>
                  <p>
                    Mobile :
                    <ul>
                      <li>Dart</li>
                      <li>Flutter</li>
                    </ul>
                  </p>
                  <p>
                    Back End :
                    <ul>
                      <li>Architecture sous forme de micro-services</li>
                      <li>
                        Go (service du routeur / service de Twitter / service de
                        Trello)
                      </li>
                      <li>TypeScript (service d'authentification)</li>
                      <li>
                        JavaScript (Service de Miro / Service de Asana / Service
                        de Github / Service de Linkedin)
                      </li>
                    </ul>
                  </p>
                  <h4>Avantages et inconvénients de l'architecture</h4>
                  <p>
                    Avantages :
                    <ul>
                      <li>Scalabilité</li>
                      <li>Maintenabilité</li>
                      <li>Indépendance</li>
                    </ul>
                  </p>
                  <p>
                    Inconvénients :
                    <ul>
                      <li>Mise en place exhaustive</li>
                      <li>Architecture compliquée à mettre en place</li>
                    </ul>
                  </p>
                  <h4>Tests unitaires et CI/CD</h4>
                  <p>
                    Front end :
                    <ul>
                      <li>Cypress</li>
                      <li>Jest</li>
                    </ul>
                  </p>
                  <p>
                    Back end :
                    <ul>
                      <li>Postman</li>
                    </ul>
                  </p>
                  <h4>Organisation et méthodes agiles</h4>
                  <p>
                    <ol>
                      <li>Système d'issue</li>
                      <li>Une branche par issue</li>
                      <li>Pull request pour chaque branche</li>
                      <li>Review d'au moins 3 personnes par PR</li>
                      <li>Mise en production de la PR si confirmation</li>
                      <li>Close la PR et l'issue</li>
                    </ol>
                  </p>
                  <h4>Double système d'authentification</h4>
                  <p>
                    <ul>
                      <li>Avec une adresse mail</li>
                      <li>Avec Google</li>
                    </ul>
                  </p>
                  <p>
                    Le projet se lance avec Docker et a pour objectif de créer
                    une plateforme d'automatisation avec des exemples
                    d'utilisation tels que : "si création d'une branche GitHub,
                    alors je poste un tweet".
                  </p>

                  <h4>Membres du groupe</h4>
                  <ul>
                    <li>Samuel Shemtov</li>
                    <li>Enzo Alaimo</li>
                    <li>William Karkegi</li>
                    <li>Kan Bouldoires</li>
                    <li>Quentin Caniou</li>
                  </ul>
                  <h4>Illustrations de l'application</h4>
                </div>
                <div className="row">
                  <img
                    src="static/img/projects/areaMobile.png"
                    title="Area Mobile"
                    alt="Area Mobile"
                  />
                  <img
                    src="static/img/projects/areaWeb1.png"
                    title="Area Web 1"
                    alt="Area Web 1"
                  />
                  <img
                    src="static/img/projects/areaWeb2.png"
                    title="Area Web 2"
                    alt="Area Web 2"
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
