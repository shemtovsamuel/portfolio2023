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

import { ReactComponent as AngularBlue } from "../../public/assets/Blue/angular.svg";
import { ReactComponent as AwsBlue } from "../../public/assets/Blue/aws.svg";
import { ReactComponent as CBlue } from "../../public/assets/Blue/c.svg";
import { ReactComponent as CppBlue } from "../../public/assets/Blue/cpp.svg";
import { ReactComponent as CssBlue } from "../../public/assets/Blue/css.svg";
import { ReactComponent as DartBlue } from "../../public/assets/Blue/dart.svg";
import { ReactComponent as DigitalOceanBlue } from "../../public/assets/Blue/digitalOcean.svg";
import { ReactComponent as DockerBlue } from "../../public/assets/Blue/docker.svg";
import { ReactComponent as FlutterBlue } from "../../public/assets/Blue/flutter.svg";
import { ReactComponent as GithubBlue } from "../../public/assets/Blue/github.svg";
import { ReactComponent as GitlabBlue } from "../../public/assets/Blue/gitlab.svg";
import { ReactComponent as HtmlBlue } from "../../public/assets/Blue/html.svg";
import { ReactComponent as JavascriptBlue } from "../../public/assets/Blue/javascript.svg";
import { ReactComponent as MysqlBlue } from "../../public/assets/Blue/mysql.svg";
import { ReactComponent as PostgreBlue } from "../../public/assets/Blue/postgre.svg";
import { ReactComponent as PythonBlue } from "../../public/assets/Blue/python.svg";
import { ReactComponent as ReactBlue } from "../../public/assets/Blue/react.svg";
import { ReactComponent as SpringBlue } from "../../public/assets/Blue/spring.svg";
import { ReactComponent as TypescriptBlue } from "../../public/assets/Blue/typescript.svg";

import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";
import { translations } from "./translationsData";

import React, { useState, useContext } from "react";
import ExperienceRow from "./ExperienceRow";

const About = () => {
  const listIcon = [
    {
      name: "C",
      icon: <CDark />,
      iconLight: <CLight />,
      iconBlue: <CBlue />,
    },
    {
      name: "C++",
      icon: <CppDark />,
      iconLight: <CppLight />,
      iconBlue: <CppBlue />,
    },
    {
      name: "Dart",
      icon: <DartDark />,
      iconLight: <DartLight />,
      iconBlue: <DartBlue />,
    },
    {
      name: "Python",
      icon: <PythonDark />,
      iconLight: <PythonLight />,
      iconBlue: <PythonBlue />,
    },
    {
      name: "Javascript",
      icon: <JavascriptDark />,
      iconLight: <JavascriptLight />,
      iconBlue: <JavascriptBlue />,
    },
    {
      name: "Typescript",
      icon: <TypescriptDark />,
      iconLight: <TypescriptLight />,
      iconBlue: <TypescriptBlue />,
    },

    {
      name: "MySQL",
      icon: <MysqlDark />,
      iconLight: <MysqlLight />,
      iconBlue: <MysqlBlue />,
    },
    {
      name: "HTML",
      icon: <HtmlDark />,
      iconLight: <HtmlLight />,
      iconBlue: <HtmlBlue />,
    },
    {
      name: "CSS",
      icon: <CssDark />,
      iconLight: <CssLight />,
      iconBlue: <CssBlue />,
    },

    {
      name: "Flutter",
      icon: <FlutterDark />,
      iconLight: <FlutterLight />,
      iconBlue: <FlutterBlue />,
    },
    {
      name: "Angular",
      icon: <AngularDark />,
      iconLight: <AngularLight />,
      iconBlue: <AngularBlue />,
    },
    {
      name: "React",
      icon: <ReactDark />,
      iconLight: <ReactLight />,
      iconBlue: <ReactBlue />,
    },
    {
      name: "Spring",
      icon: <SpringDark />,
      iconLight: <SpringLight />,
      iconBlue: <SpringBlue />,
    },
    {
      name: "PostgreSQL",
      icon: <PostgreDark />,
      iconLight: <PostgreLight />,
      iconBlue: <PostgreBlue />,
    },
    {
      name: "Docker",
      icon: <DockerDark />,
      iconLight: <DockerLight />,
      iconBlue: <DockerBlue />,
    },
    {
      name: "AWS",
      icon: <AwsDark />,
      iconLight: <AwsLight />,
      iconBlue: <AwsBlue />,
    },
    {
      name: "Digital Ocean",
      icon: <DigitalOceanDark />,
      iconLight: <DigitalOceanLight />,
      iconBlue: <DigitalOceanBlue />,
    },
    {
      name: "Github",
      icon: <GithubDark />,
      iconLight: <GithubLight />,
      iconBlue: <GithubBlue />,
    },
    {
      name: "Gitlab",
      icon: <GitlabDark />,
      iconLight: <GitlabLight />,
      iconBlue: <GitlabBlue />,
    },
  ];

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const { night } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

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
                <h3> {translations[language].aboutTitle}</h3>
              </div>
              <div className="about-text">
                <h3>{translations[language].aboutSubTitle}</h3>
                <p>{translations[language].aboutDescription}</p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">52</span>
                      <div className="media-body">
                        {translations[language].aboutInfo1} <br />
                        {translations[language].aboutInfo2}
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">+4</span>
                      <div className="media-body">
                        {translations[language].aboutInfo3} <br />
                        {translations[language].aboutInfo4}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>{translations[language].buttonContact}</span>
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
          <h3>{translations[language].titleEducation}</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2020-2025</span>
                <h6>EPITECH</h6>
                <p>{translations[language].titleEpitech}</p>
                <p>{translations[language].epitechcompetencies}</p>
              </li>
              <li>
                <span>2020</span>
                <h6>NOTRE DAME DES MISSIONS</h6>
                <p>{translations[language].bac}</p>
                <p>{translations[language].bacMention}</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>{translations[language].skillsTitle}</h3>
              <p>{translations[language].skillsDescription}</p>
            </div>
            <div className="list-icon">
              {listIcon.map((iconObj) => (
                <svg
                  className="language-icon"
                  viewBox="0 0 512 512"
                  key={iconObj.name}
                  onMouseEnter={() => setHoveredIcon(iconObj.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {hoveredIcon === iconObj.name
                    ? iconObj.iconBlue
                    : night
                    ? iconObj.iconLight
                    : iconObj.icon}
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
            title={translations[language].devMobile}
            label="One point | avril 2022 - Present"
            time={translations[language].internship}
            description="One Point est une entreprise qui propose des solutions de conseil, de développement et d'accompagnement pour aider les entreprises à se transformer grâce au digital. Elle accompagne ses clients dans leur transformation digitale à travers une large gamme de services allant de la conception de solutions sur-mesure à l'accompagnement de projets de grande envergure."
          />
          <ExperienceRow
            logoSrc="static/img/one-point-logo.png"
            title={translations[language].devMobile}
            label={translations[language].datePartTimeOP}
            time="Stage à temps partiel"
            description="One Point est une entreprise qui propose des solutions de conseil, de développement et d'accompagnement pour aider les entreprises à se transformer grâce au digital. Elle accompagne ses clients dans leur transformation digitale à travers une large gamme de services allant de la conception de solutions sur-mesure à l'accompagnement de projets de grande envergure."
          />
          <ExperienceRow
            logoSrc="static/img/taker-logo.png"
            title={translations[language].chefDeProjet}
            label={translations[language].dateTaker}
            time="Association"
            description={translations[language].descriptionTaker}
          />
          <ExperienceRow
            logoSrc="static/img/rtl-ad-connect-logo.png"
            title={translations[language].devFullStack}
            label={translations[language].dateRTL}
            time={translations[language].internship}
            description={translations[language].RTLDescription}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
