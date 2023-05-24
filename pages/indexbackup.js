import React, { Fragment, useState } from "react";
import ImageView from "../src/components/ImageView";
import BackBtn from "../src/layout/BackBtn";
import DayNightMood from "../src/layout/DayNightMood";
import Header from "../src/layout/Header";
import ThemeContext from "../src/components/ThemeContext";
import LanguageContext from "../src/components/LanguageContext";
import Translate from "../src/layout/Translate";
import { translations } from "../src/components/translationsData";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
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
                                                <h6>
                                                    {
                                                        translations[language]
                                                            .hello
                                                    }
                                                </h6>
                                                <h1 className="font-alt">
                                                    Samuel Shemtov
                                                </h1>
                                                <p className="lead">
                                                    {translations[language].Iam}
                                                    <TypingAnimation />
                                                </p>
                                                <p className="desc">
                                                    {
                                                        translations[language]
                                                            .description
                                                    }
                                                </p>
                                                <div className="btn-bar">
                                                    <a
                                                        className="px-btn px-btn-theme"
                                                        href="#"
                                                    >
                                                        {
                                                            translations[
                                                                language
                                                            ].cv
                                                        }
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="hb-img">
                                                <img
                                                    src="static/img/home-banner.png"
                                                    title=""
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <About />
                        <Services />
                        <Portfolio />
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
