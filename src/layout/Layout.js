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

import React, { Fragment, useState } from "react";
import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
import ThemeContext from "../components/ThemeContext"; // Ajouter cette ligne pour importer ThemeContext
import Translate from "./Translate"; // Ajouter cette ligne pour importer Translate
import LanguageContext from "../components/LanguageContext"; // Ajouter cette ligne pour importer LanguageContext

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
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {" "}
      <ThemeContext.Provider value={{ night, toggleNight }}>
        <Fragment>
          <ImageView />
          {/* page loading */}
          {/* End */}
          {/* Header Start */}
          <Header blog={blog} />
          {/* Main Start */}
          <main className="main-left pp-main-section">{children}</main>
          <DayNightMood />
          <Translate />
          {blog && <BackBtn />}
        </Fragment>
      </ThemeContext.Provider>
    </LanguageContext.Provider> // Ajouter cette ligne pour fermer le contexte de la langue
  );
};

export default Layout;
