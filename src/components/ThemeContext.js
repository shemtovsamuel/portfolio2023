import { createContext } from "react";

const ThemeContext = createContext({
  night: true,
  toggleNight: () => {},
});

export default ThemeContext;
