import { ReactComponent as PythonIcon } from "../../public/assets/icons/python-icon.svg";
import { ReactComponent as ReactIcon } from "../../public/assets/icons/react-icon.svg";
import { ReactComponent as AngularIcon } from "../../public/assets/icons/angular-icon.svg";
import { ReactComponent as JavaScripIcon } from "../../public/assets/icons/javascript-icon.svg";
import { ReactComponent as TypescriptIcon } from "../../public/assets/icons/typescript-icon.svg";
import { ReactComponent as CIcon } from "../../public/assets/icons/c-icon.svg";
import { ReactComponent as CppIcon } from "../../public/assets/icons/cpp-icon.svg";
import { ReactComponent as HTMLIcon } from "../../public/assets/icons/html-icon.svg";
import { ReactComponent as FlutterIcon } from "../../public/assets/icons/flutter-icon.svg";
import { ReactComponent as SpringIcon } from "../../public/assets/icons/spring-icon.svg";
import { ReactComponent as MySQLIcon } from "../../public/assets/icons/mysql-icon.svg";
import { ReactComponent as DjangoIcon } from "../../public/assets/icons/django-icon.svg";
import { ReactComponent as AWSIcon } from "../../public/assets/icons/aws-icon.svg";
import React, { useState } from "react";
import ExperienceRow from "./ExperienceRow";

const About = () => {
  const [experienceBackgroundColor, setExperienceBackgroundColor] =
    useState("");

  const changeBackgroundColor = (color) => {
    setExperienceBackgroundColor(color);
  };

  const resetBackgroundColor = () => {
    setExperienceBackgroundColor("");
  };

  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>À propos de moi</h3>
              </div>
              <div className="about-text">
                <h3>Développeur en troisième année à Epitech 🚀</h3>
                <p>
                  Mon objectif en tant que développeur est de créer des
                  solutions innovantes qui résolvent des problèmes et améliorent
                  l'expérience utilisateur. Je suis constamment à la recherche
                  de nouvelles technologies et de nouvelles approches pour
                  améliorer mes compétences en programmation et fournir des
                  résultats de haute qualité pour mes clients et mes
                  utilisateurs.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">52</span>
                      <div className="media-body">
                        Projets <br />
                        réalisés
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">+4</span>
                      <div className="media-body">
                        Années d'expérience
                        <br />
                        en programmation
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Me contacter</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>ÉDUCATION &amp; COMPÉTENCES</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2020-2025</span>
                <h6>EPITECH</h6>
                <p>Expert en technonologies de l’information</p>
                <p>
                  Compétences acquises : <b>autonomie / travail d’équipe</b>
                </p>
              </li>
              <li>
                <span>2020</span>
                <h6>NOTRE DAME DES MISSIONS</h6>
                <p>Baccalauréat scientifique</p>
                <p>Mention: Bien</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Mes compétences</h3>
              <p>
                Mon expérience en entreprise et mon parcours à Epitech m'ont
                doté d'une connaissance approfondie en programmation. Je suis un
                développeur créatif, curieux et soucieux de la qualité de mon
                travail.
              </p>
            </div>
            <div className="list-icon">
              <PythonIcon
                alt="Python"
                title="Python"
                className="language-icon"
              />
              <ReactIcon alt="React" title="React" className="language-icon" />
              <AngularIcon
                alt="Angular"
                title="Angular"
                className="language-icon"
              />
              <JavaScripIcon
                alt="JavaScript"
                title="JavaScript"
                className="language-icon"
              />
              <FlutterIcon
                alt="Flutter"
                title="Flutter"
                className="language-icon-width"
              />
              <TypescriptIcon
                alt="TypeScript"
                title="TypeScript"
                className="language-icon"
              />
              <CIcon alt="C" title="C" className="language-icon" />
              <CppIcon alt="C++" title="C++" className="language-icon" />
              <HTMLIcon alt="HTML" title="HTML" className="language-icon" />
              <SpringIcon
                alt="Spring"
                title="Spring"
                className="language-icon"
              />
              <MySQLIcon alt="MySQL" title="MySQL" className="language-icon" />
              <DjangoIcon
                alt="Django"
                title="Django"
                className="language-icon"
              />
              <AWSIcon alt="AWS" title="AWS" className="language-icon" />
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experiences</h3>
        </div>
        <div className="resume-box">
          <ExperienceRow
            logoSrc="static/img/one-point-logo.png"
            title="Développeur mobiles"
            label="One point | avril 2022 - Present"
            time="Stage"
            description="One Point est une entreprise qui propose des solutions de conseil, de développement et d'accompagnement pour aider les entreprises à se transformer grâce au digital. Elle accompagne ses clients dans leur transformation digitale à travers une large gamme de services allant de la conception de solutions sur-mesure à l'accompagnement de projets de grande envergure."
          />
          <ExperienceRow
            logoSrc="static/img/one-point-logo.png"
            title="Développeur mobiles"
            label="One point | octobre 2022 - avril 2023"
            time="Stage à temps partiel"
            description="One Point est une entreprise qui propose des solutions de conseil, de développement et d'accompagnement pour aider les entreprises à se transformer grâce au digital. Elle accompagne ses clients dans leur transformation digitale à travers une large gamme de services allant de la conception de solutions sur-mesure à l'accompagnement de projets de grande envergure."
          />
          <ExperienceRow
            logoSrc="static/img/taker-logo.png"
            title="Chef de projet"
            label="Taker | mars 2022 - avril 2023"
            time="Association"
            description="• Prospection : recherche de nouveaux clients (start-up,
              grands comptes...), prise de contact <br />• Gestion de
              projet : planification, organisation, méthodes agiles,
              établissement de budgets <br />• Communication :
              communication avec les clients, travail en équipe <br />•
              Compétences techniques : maîtrise de plusieurs langages de
              programmation <br />• Leadership : prise de décision,
              résolution de problèmes, coordination de l'équipe de travail"
          />
          <ExperienceRow
            logoSrc="static/img/rtl-ad-connect-logo.png"
            title="Développeur Full Stack"
            label="RTL AdConnect | juillet 2021 - decembre 2021"
            time="Stage"
            description="Durant mon stage, j'ai développé un dashboard de gestion des
            collaborateurs permettant aux services RH et généraux de
            gérer les utilisateurs de l'entreprise de manière efficace
            et ergonomique. L'application a été reliée à l'Active
            Directory pour récupérer et stocker les informations des
            utilisateurs dans une base de données, afin de fournir une
            vue complète et centralisée de tous les collaborateurs de
            l'entreprise."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
