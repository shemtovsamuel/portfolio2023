import { translations } from "../src/components/translationsData";
import React, { useContext } from "react";
import LanguageContext from "../src/components/LanguageContext";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
    ssr: false,
});

const Index = () => {
    const languageContext = useContext(LanguageContext);

    return (
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
                                            translations[
                                                languageContext.language
                                            ].hello
                                        }
                                    </h6>
                                    <h1 className="font-alt">Samuel Shemtov</h1>
                                    <p className="lead">
                                        {
                                            translations[
                                                languageContext.language
                                            ].Iam
                                        }
                                        <TypingAnimation />
                                    </p>
                                    <p className="desc">
                                        {
                                            translations[
                                                languageContext.language
                                            ].description
                                        }
                                    </p>
                                    <div className="btn-bar">
                                        <a
                                            className="px-btn px-btn-theme"
                                            href="#"
                                        >
                                            {
                                                translations[
                                                    languageContext.language
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
    );
};

export default Index;
