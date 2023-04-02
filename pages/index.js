import dynamic from "next/dynamic";
import React, { useContext } from "react";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import LanguageContext from "../src/components/LanguageContext";
import translations from "../src/components/translationsData.js";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>{translations[language].hello}</h6>
                  <h1 className="font-alt">Samuel Shemtov</h1>
                  <p className="lead">
                    Je suis <TypingAnimation />
                  </p>
                  <p className="desc">
                    En tant que développeur passionné, je suis constamment à la
                    recherche de solutions innovantes pour résoudre des
                    problèmes complexes. Mon aptitude à travailler en équipe et
                    à communiquer clairement me permet d'être un atout précieux
                    pour tout projet de développement.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Donwload CV
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
    </Layout>
  );
};
export default Index;
