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
