import React, { Fragment, useState, useContext } from "react";
import ImageView from "../components/ImageView";
import BackBtn from "./BackBtn";
import DayNightMood from "./DayNightMood";
import Header from "./Header";
import ThemeContext from "../components/ThemeContext";
import LanguageContext from "../components/LanguageContext";
import Translate from "./Translate";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("../components/Portfolio"), {
    ssr: false,
});

const Layout = ({ children, blog }) => {
    const [night, setNight] = useState(true);
    const [language, setLanguage] = useState("en");

    const toggleNight = () => {
        document.querySelector("body").classList.toggle("theme-light");
        setNight(!night);
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "fr" : "en");
    };

    return (
        <ThemeContext.Provider value={{ night, toggleNight }}>
            <LanguageContext.Provider value={{ language, toggleLanguage }}>
                <Fragment>
                    <ImageView />
                    <Header blog={blog} />
                    {children}
                    <DayNightMood />
                    {blog && <BackBtn />}
                    <Translate />
                </Fragment>
            </LanguageContext.Provider>
        </ThemeContext.Provider>
    );
};

export default Layout;
