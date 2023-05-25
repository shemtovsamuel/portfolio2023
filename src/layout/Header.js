import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import ThemeContext from "../../src/components/ThemeContext";
import LanguageContext from "../../src/components/LanguageContext.js";
import { translations } from "../../src/components/translationsData";
import { useContext } from "react";

const Header = ({ blog }) => {
    const [sideBarToggle, setSideBarToggle] = useState(false);
    useEffect(() => {
        if (!blog) {
            activeSection();
        }
    }, []);

    return (
        <Fragment>
            <div className="mob-header">
                <div className="d-flex">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="logo-text">Shemtov</a>
                        </Link>
                    </div>
                    <button
                        className={`toggler-menu ${
                            sideBarToggle ? "open" : ""
                        }`}
                        onClick={() => setSideBarToggle(!sideBarToggle)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            {/* End Header */}
            {/* nav bar */}
            <header
                className={`header-left ${
                    sideBarToggle ? "menu-open menu-open-desk" : ""
                }`}
            >
                <div className="scroll-bar">
                    <div className="hl-top">
                        <div className="hl-logo">
                            <div className="img">
                                <img
                                    src="static/img/about-me.jpg"
                                    title=""
                                    alt=""
                                />
                            </div>
                            <h5>Samuel</h5>
                        </div>
                    </div>
                    {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
                </div>
                <div className="nav justify-content-center social-icons">
                    <a target="_blank" href="https://github.com/shemtovsamuel">
                        <i className="fab fa-github" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/samuel-shemtov/"
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
            </header>
        </Fragment>
    );
};
export default Header;

const MenuWithOutBlog = () => {
    const { night } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    return (
        <ul className="nav nav-menu" id="pp-menu">
            <li data-menuanchor="home" className="active">
                <a className="nav-link" href="#home">
                    <i className="ti-home" />
                    <span>{translations[language].headerHome}</span>
                </a>
            </li>
            <li data-menuanchor="about">
                <a className="nav-link" href="#about">
                    <i className="ti-id-badge" />
                    <span>{translations[language].headerAbout}</span>
                </a>
            </li>
            <li data-menuanchor="services">
                <a className="nav-link" href="#services">
                    <i className="ti-panel" />
                    <span>{translations[language].headerServices}</span>
                </a>
            </li>
            <li data-menuanchor="work">
                <a className="nav-link" href="#work">
                    <i className="ti-bookmark-alt" />
                    <span>{translations[language].headerWork}</span>
                </a>
            </li>
            <li data-menuanchor="contactus">
                <a className="nav-link" href="#contactus">
                    <i className="ti-map-alt" />
                    <span>{translations[language].headerContact}</span>
                </a>
            </li>
        </ul>
    );
};

const MenuWithBlog = () => {
    const { night } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);

    return (
        <Fragment>
            <ul className="nav nav-menu" id="pp-menu">
                <li data-menuanchor="home">
                    <Link href="/#home">
                        <a className="nav-link">
                            <i className="ti-home" />
                            <span>{translations[language].headerHome}</span>
                        </a>
                    </Link>
                </li>
                <li data-menuanchor="about">
                    <Link href="/#about">
                        <a className="nav-link">
                            <i className="ti-id-badge" />
                            <span>{translations[language].headerAbout}</span>
                        </a>
                    </Link>
                </li>
                <li data-menuanchor="services">
                    <Link href="/#services">
                        <a className="nav-link">
                            <i className="ti-panel" />
                            <span>{translations[language].headerServices}</span>
                        </a>
                    </Link>
                </li>
                <li data-menuanchor="work">
                    <Link href="/#work">
                        <a className="nav-link">
                            <i className="ti-bookmark-alt" />
                            <span>{translations[language].headerWork}</span>
                        </a>
                    </Link>
                </li>
                <li data-menuanchor="contactus">
                    <Link href="/#contactus">
                        <a className="nav-link">
                            <i className="ti-map-alt" />
                            <span>{translations[language].headerContact}</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </Fragment>
    );
};
