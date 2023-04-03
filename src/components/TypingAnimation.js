// import { Fragment, useEffect, useRef } from "react";
// import Typed from "typed.js";
// import Translate from "../layout/Translate";
// import { translations } from "./translationsData";

// const TypingAnimation = () => {
//   // Create Ref element.
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "passionné d'High Tech",
//         "développeur Full Stack",
//         "étudiant à Epitech en 3e année",
//       ],
//       typeSpeed: 100,
//       backSpeed: 100,
//       backDelay: 100,
//       smartBackspace: true,
//       loop: true,
//       showCursor: true,
//     });

//     // Destropying
//     return () => {
//       typed.destroy();
//     };
//   }, []);
//   return (
//     <Fragment>
//       <span id="type-it" className="subtitle subtitle-typed" ref={el}></span>
//     </Fragment>
//   );
// };
// export default TypingAnimation;

import { Fragment, useEffect, useRef, useContext } from "react";
import Typed from "typed.js";
import LanguageContext from "./LanguageContext";

const TypingAnimation = () => {
  const { language } = useContext(LanguageContext);
  const el = useRef(null);

  useEffect(() => {
    const strings =
      language === "en"
        ? [
            "passionated by High Tech",
            "full Stack developer",
            "3rd year Epitech student",
          ]
        : [
            "passionné d'High Tech",
            "développeur Full Stack",
            "étudiant à Epitech en 3e année",
          ];

    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, [language]);

  return (
    <Fragment>
      <span id="type-it" className="subtitle subtitle-typed" ref={el}></span>
    </Fragment>
  );
};

export default TypingAnimation;
