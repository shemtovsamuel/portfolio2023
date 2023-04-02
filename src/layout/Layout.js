// import { Fragment } from "react";
// import ImageView from "../components/ImageView";
// import BackBtn from "./BackBtn";
// import DayNightMood from "./DayNightMood";
// import Header from "./Header";
// const Layout = ({ children, blog }) => {
//   return (
//     <Fragment>
//       <ImageView />
//       {/* page loading */}
//       {/* End */}
//       {/* Header Start */}
//       <Header blog={blog} />
//       {/* Main Start */}
//       <main className="main-left pp-main-section">{children}</main>
//       <DayNightMood />
//       {blog && <BackBtn />}
//     </Fragment>
//   );
// };
// export default Layout;

import React, { Fragment, useState } from "react";
import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
import ThemeContext from "../components/ThemeContext"; // Ajouter cette ligne pour importer ThemeContext

const Layout = ({ children, blog }) => {
  const [night, setNight] = useState(true);

  const toggleNight = () => {
    document.querySelector("body").classList.toggle("theme-light");
    setNight(!night);
  };

  return (
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
        {blog && <BackBtn />}
      </Fragment>
    </ThemeContext.Provider>
  );
};

export default Layout;
