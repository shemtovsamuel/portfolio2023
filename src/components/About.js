import { ReactComponent as AngularDark } from "../../public/assets/Dark/angular.svg";
import { ReactComponent as AwsDark } from "../../public/assets/Dark/aws.svg";
import { ReactComponent as CDark } from "../../public/assets/Dark/c.svg";
import { ReactComponent as CppDark } from "../../public/assets/Dark/cpp.svg";
import { ReactComponent as CssDark } from "../../public/assets/Dark/css.svg";
import { ReactComponent as DartDark } from "../../public/assets/Dark/dart.svg";
import { ReactComponent as DigitalOceanDark } from "../../public/assets/Dark/digitalOcean.svg";
import { ReactComponent as DockerDark } from "../../public/assets/Dark/docker.svg";
import { ReactComponent as FlutterDark } from "../../public/assets/Dark/flutter.svg";
import { ReactComponent as GithubDark } from "../../public/assets/Dark/github.svg";
import { ReactComponent as GitlabDark } from "../../public/assets/Dark/gitlab.svg";
import { ReactComponent as HtmlDark } from "../../public/assets/Dark/html.svg";
import { ReactComponent as JavascriptDark } from "../../public/assets/Dark/javascript.svg";
import { ReactComponent as MysqlDark } from "../../public/assets/Dark/mysql.svg";
import { ReactComponent as PostgreDark } from "../../public/assets/Dark/postgre.svg";
import { ReactComponent as PythonDark } from "../../public/assets/Dark/python.svg";
import { ReactComponent as ReactDark } from "../../public/assets/Dark/react.svg";
import { ReactComponent as SpringDark } from "../../public/assets/Dark/spring.svg";
import { ReactComponent as TypescriptDark } from "../../public/assets/Dark/typescript.svg";

import { ReactComponent as AngularLight } from "../../public/assets/Light/angular.svg";
import { ReactComponent as AwsLight } from "../../public/assets/Light/aws.svg";
import { ReactComponent as CLight } from "../../public/assets/Light/c.svg";
import { ReactComponent as CppLight } from "../../public/assets/Light/cpp.svg";
import { ReactComponent as CssLight } from "../../public/assets/Light/css.svg";
import { ReactComponent as DartLight } from "../../public/assets/Light/dart.svg";
import { ReactComponent as DigitalOceanLight } from "../../public/assets/Light/digitalOcean.svg";
import { ReactComponent as DockerLight } from "../../public/assets/Light/docker.svg";
import { ReactComponent as FlutterLight } from "../../public/assets/Light/flutter.svg";
import { ReactComponent as GithubLight } from "../../public/assets/Light/github.svg";
import { ReactComponent as GitlabLight } from "../../public/assets/Light/gitlab.svg";
import { ReactComponent as HtmlLight } from "../../public/assets/Light/html.svg";
import { ReactComponent as JavascriptLight } from "../../public/assets/Light/javascript.svg";
import { ReactComponent as MysqlLight } from "../../public/assets/Light/mysql.svg";
import { ReactComponent as PostgreLight } from "../../public/assets/Light/postgre.svg";
import { ReactComponent as PythonLight } from "../../public/assets/Light/python.svg";
import { ReactComponent as ReactLight } from "../../public/assets/Light/react.svg";
import { ReactComponent as SpringLight } from "../../public/assets/Light/spring.svg";
import { ReactComponent as TypescriptLight } from "../../public/assets/Light/typescript.svg";

import React, { useState } from "react";
import ExperienceRow from "./ExperienceRow";

const About = () => {
  const listIcon = [
    {
      name: "Angular",
      icon: <AngularDark />,
      iconLight: <AngularLight />,
    },
    {
      name: "AWS",
      icon: <AwsDark />,
      iconLight: <AwsLight />,
    },
    {
      name: "C",
      icon: <CDark />,
      iconLight: <CLight />,
    },
    {
      name: "C++",
      icon: <CppDark />,
      iconLight: <CppLight />,
    },
    {
      name: "CSS",
      icon: <CssDark />,
      iconLight: <CssLight />,
    },
    {
      name: "Dart",
      icon: <DartDark />,
      iconLight: <DartLight />,
    },
    {
      name: "Digital Ocean",
      icon: <DigitalOceanDark />,
      iconLight: <DigitalOceanLight />,
    },
    {
      name: "Docker",
      icon: <DockerDark />,
      iconLight: <DockerLight />,
    },
    {
      name: "Flutter",
      icon: <FlutterDark />,
      iconLight: <FlutterLight />,
    },
    {
      name: "Github",
      icon: <GithubDark />,
      iconLight: <GithubLight />,
    },
    {
      name: "Gitlab",
      icon: <GitlabDark />,
      iconLight: <GitlabLight />,
    },
    {
      name: "HTML",
      icon: <HtmlDark />,
      iconLight: <HtmlLight />,
    },
    {
      name: "Javascript",
      icon: <JavascriptDark />,
      iconLight: <JavascriptLight />,
    },
    {
      name: "MySQL",
      icon: <MysqlDark />,
      iconLight: <MysqlLight />,
    },
    {
      name: "PostgreSQL",
      icon: <PostgreDark />,
      iconLight: <PostgreLight />,
    },
    {
      name: "Python",
      icon: <PythonDark />,
      iconLight: <PythonLight />,
    },

    {
      name: "React",
      icon: <ReactDark />,
      iconLight: <ReactLight />,
    },
    {
      name: "Spring",
      icon: <SpringDark />,

      iconLight: <SpringLight />,
    },
    {
      name: "Typescript",
      icon: <TypescriptDark />,
      iconLight: <TypescriptLight />,
    },
  ];

  const [experienceBackgroundColor, setExperienceBackgroundColor] =
    useState("");

  // const changeBackgroundColor = (color) => {
  //   setExperienceBackgroundColor(color);
  // };

  // const resetBackgroundColor = () => {
  //   setExperienceBackgroundColor("");
  // };

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
                <img
                  src="static/img/about-me.png"
                  style={{ width: "100%" }}
                  title=""
                  alt=""
                />
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
            <div className="skills-box toto">
              <h3>Mes compétences</h3>
              <p>
                Mon expérience en entreprise et mon parcours à Epitech m'ont
                doté d'une connaissance approfondie en programmation. Je suis un
                développeur créatif, curieux et soucieux de la qualité de mon
                travail.
              </p>
            </div>
            <div className="list-icon">
              {listIcon.map((iconObj) => (
                <svg
                  className="language-icon"
                  viewBox="0 0 512 512"
                  key={iconObj.name}
                >
                  {/* {iconObj.icon} */}
                  {iconObj.iconLight}
                </svg>
              ))}
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
