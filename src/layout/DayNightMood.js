// import { useState } from "react";

// const DayNightMood = () => {
//   const [night, setNight] = useState(true);
//   const changeMood = () => {
//     document.querySelector("body").classList.toggle("theme-light");
//   };
//   return (
//     <label className="color_switch" onClick={() => changeMood()}>
//       <i className="fas fa-moon" />
//     </label>
//   );
// };
// export default DayNightMood;

import React, { useContext } from "react";
import ThemeContext from "../components/ThemeContext";

const DayNightMood = () => {
  const { night, toggleNight } = useContext(ThemeContext);

  return (
    <label className="color_switch" onClick={() => toggleNight()}>
      <i className="fas fa-moon" />
    </label>
  );
};

export default DayNightMood;
