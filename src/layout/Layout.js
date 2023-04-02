// import React, { Fragment, useState } from "react";
// import ImageView from "../components/ImageView";
// import BackBtn from "./BackBtn";
// import DayNightMood from "./DayNightMood";
// import Header from "./Header";
// import ThemeContext from "../components/ThemeContext"; // Ajouter cette ligne pour importer ThemeContext

// const Layout = ({ children, blog }) => {
//   const [night, setNight] = useState(true);

//   const toggleNight = () => {
//     document.querySelector("body").classList.toggle("theme-light");
//     setNight(!night);
//   };

//   return (
//     <ThemeContext.Provider value={{ night, toggleNight }}>
//       <Fragment>
//         <ImageView />
//         {/* page loading */}
//         {/* End */}
//         {/* Header Start */}
//         <Header blog={blog} />
//         {/* Main Start */}
//         <main className="main-left pp-main-section">{children}</main>
//         <DayNightMood />
//         {blog && <BackBtn />}
//       </Fragment>
//     </ThemeContext.Provider>
//   );
// };

// export default Layout;

// import React, { Fragment, useState } from "react";
// import ImageView from "../components/ImageView";
// import BackBtn from "./BackBtn";
// import DayNightMood from "./DayNightMood";
// import Header from "./Header";
// import ThemeContext from "../components/ThemeContext"; // Ajouter cette ligne pour importer ThemeContext
// import Translate from "./Translate"; // Ajouter cette ligne pour importer Translate
// import LanguageContext from "../components/LanguageContext"; // Ajouter cette ligne pour importer LanguageContext

// const Layout = ({ children, blog }) => {
//   const [night, setNight] = useState(true);
//   const [language, setLanguage] = useState("en"); // Ajouter cette ligne pour définir l'état de la langue

//   const toggleNight = () => {
//     document.querySelector("body").classList.toggle("theme-light");
//     setNight(!night);
//   };

//   const toggleLanguage = () => {
//     // Ajouter cette fonction pour basculer entre les langues
//     setLanguage(language === "en" ? "fr" : "en");
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage }}>
//       {" "}
//       <ThemeContext.Provider value={{ night, toggleNight }}>
//         <Fragment>
//           <ImageView />
//           {/* page loading */}
//           {/* End */}
//           {/* Header Start */}
//           <Header blog={blog} />
//           {/* Main Start */}
//           <main className="main-left pp-main-section">{children}</main>
//           <DayNightMood />
//           <Translate />
//           {blog && <BackBtn />}
//         </Fragment>
//       </ThemeContext.Provider>
//     </LanguageContext.Provider> // Ajouter cette ligne pour fermer le contexte de la langue
//   );
// };

// export default Layout;

import React, { Fragment, useState, useContext } from "react";
import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
import ThemeContext from "../components/ThemeContext";
import LanguageContext from "../components/LanguageContext";
import Translate from "./Translate";
import { translations } from "../components/translationsData";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Services from "../components/Services";
import TypingAnimation from "../components/TypingAnimation";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("../components/Portfolio"), {
  ssr: false,
});

const Layout = ({ children, blog }) => {
  const [night, setNight] = useState(true);
  const [language, setLanguage] = useState("en"); // Ajouter cette ligne pour définir l'état de la langue

  const toggleNight = () => {
    document.querySelector("body").classList.toggle("theme-light");
    setNight(!night);
  };

  const toggleLanguage = () => {
    // Ajouter cette fonction pour basculer entre les langues
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <ThemeContext.Provider value={{ night, toggleNight }}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <Fragment>
          <ImageView />
          <Header blog={blog} />
          <main className="main-left pp-main-section">
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
                        {/* <h1 className="font-alt">Samuel Shemtov</h1> */}
                        <p className="lead">
                          Je suis <TypingAnimation />
                        </p>
                        <p className="desc">
                          En tant que développeur passionné, je suis constamment
                          à la recherche de solutions innovantes pour résoudre
                          des problèmes complexes. Mon aptitude à travailler en
                          équipe et à communiquer clairement me permet d'être un
                          atout précieux pour tout projet de développement.
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
          </main>
          <DayNightMood />
          {blog && <BackBtn />}
          <Translate />
        </Fragment>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Layout;
