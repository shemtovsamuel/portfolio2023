import dynamic from "next/dynamic";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";
import { translations } from "./translationsData";
import { useContext } from "react";

const Testimonials = dynamic(() => import("./Testimonials"), {
    ssr: false,
});

const Services = () => {
    const { night } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    return (
        <section
            id="services"
            data-nav-tooltip="Services"
            className="pp-section pp-scrollable section"
        >
            <div className="container">
                <div className="title">
                    <h3>{translations[language].serviceTitle}</h3>
                </div>
                <div className="row">
                    <div className="col-sm-6 m-15px-tb">
                        <div className="feature-box-01 media">
                            <i className="icon theme-bg  icon-browser" />
                            <div className="feature-content media-body">
                                <h5>{translations[language].serviceTitle1}</h5>
                                <p>
                                    {translations[language].serviceDescription1}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 m-15px-tb">
                        <div className="feature-box-01 media">
                            <i className="icon theme-bg icon-genius" />
                            <div className="feature-content media-body">
                                <h5>{translations[language].serviceTitle2}</h5>
                                <p>
                                    {translations[language].serviceDescription2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 m-15px-tb">
                        <div className="feature-box-01 media">
                            <i className="icon theme-bg icon-mobile" />
                            <div className="feature-content media-body">
                                <h5>{translations[language].serviceTitle3}</h5>
                                <p>
                                    {translations[language].serviceDescription3
                                        .split("\n")
                                        .map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 m-15px-tb">
                        <div className="feature-box-01 media">
                            <i className="icon theme-bg icon-gears" />
                            <div className="feature-content media-body">
                                <h5>{translations[language].serviceTitle4}</h5>
                                <p>
                                    {translations[language].serviceDescription4
                                        .split("\n")
                                        .map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separated" />
                <Testimonials />
            </div>
        </section>
    );
};
export default Services;
