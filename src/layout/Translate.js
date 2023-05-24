import React, { useContext } from "react";
import LanguageContext from "../components/LanguageContext";

const Translate = () => {
    const { language, toggleLanguage } = useContext(LanguageContext);

    return (
        // <label className="button-translate" onClick={() => toggleLanguage()}>
        <label
            className="color_switch position-translate-button"
            onClick={() => toggleLanguage()}
        >
            {language === "en" ? "🇫🇷" : "🇬🇧"}
        </label>
    );
};

export default Translate;

//color_switch
