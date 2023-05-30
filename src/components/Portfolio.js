import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState("*");
    useEffect(() => {
        isotope.current = new Isotope(".portfolio-content", {
            itemSelector: ".grid-item",
            //    layoutMode: "fitRows",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-item",
            },
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false,
            },
        });
        return () => isotope.current.destroy();
    });
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
    };
    const activeBtn = (value) => (value === filterKey ? "active" : "");
    return (
        <section
            id="work"
            data-nav-tooltip="Work"
            className="pp-section pp-scrollable section dark-bg"
        >
            <div className="container">
                <div className="title">
                    <h3>My Portfolio.</h3>
                </div>
                <div className="portfolio-filter-01">
                    <ul className="filter nav">
                        <li
                            className={`c-pointer ${activeBtn("*")}`}
                            onClick={handleFilterKeyChange("*")}
                            data-filter="*"
                        >
                            All
                        </li>
                        <li
                            className={`c-pointer ${activeBtn("branding")}`}
                            onClick={handleFilterKeyChange("epitech")}
                            data-filter=".epitech"
                        >
                            Epitech
                        </li>
                        <li
                            className={`c-pointer ${activeBtn("photoshop")}`}
                            onClick={handleFilterKeyChange("stage")}
                            data-filter=".stage"
                        >
                            Stage
                        </li>
                        <li
                            className={`c-pointer ${activeBtn("fashion")}`}
                            onClick={handleFilterKeyChange("freelance")}
                            data-filter=".freelance"
                        >
                            Freelance
                        </li>
                    </ul>
                </div>{" "}
                <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
                    <Link href="/area">
                        <div className="grid-item epitech">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        Plateforme d'automatisation
                                    </h5>
                                    <span>REACT TS GO FLUTTER</span>
                                </div>
                                <div
                                    className="portfolio-img"
                                    style={{ borderRadius: "25%" }}
                                >
                                    <img
                                        src="static/img/portfolio/area.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/area"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/inveskal">
                        <div className="grid-item freelance">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        Inveskal
                                    </h5>
                                    <span>REACT DJANGO</span>
                                </div>
                                <div
                                    className="portfolio-img"
                                    style={{ borderRadius: "25%" }}
                                >
                                    <img
                                        src="static/img/portfolio/inveskal.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/inveskal"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/rtype">
                        <div className="grid-item epitech">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        RTYPE
                                    </h5>
                                    <span>
                                        Entity Component System - Network
                                    </span>
                                </div>
                                <div className="portfolio-img">
                                    <img
                                        src="static/img/portfolio/rtype.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/rtype"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/tree">
                        <div className="grid-item stage">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        Liste des abres de Paris
                                    </h5>
                                    <span>Dart Flutter</span>
                                </div>
                                <div className="portfolio-img">
                                    <img
                                        src="static/img/portfolio/tree.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/tree"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/teams">
                        <div className="grid-item epitech">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        Teams
                                    </h5>
                                    <span>C TCP Sockets</span>
                                </div>
                                <div
                                    className="portfolio-img"
                                    style={{ borderRadius: "25%" }}
                                >
                                    <img
                                        src="static/img/portfolio/teams.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/teams"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/rtladconnect">
                        <div className="grid-item stage">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        RTL Ad Connect
                                    </h5>
                                    <span>Angular Spring MySQL</span>
                                </div>
                                <div
                                    className="portfolio-img"
                                    style={{ borderRadius: "25%" }}
                                >
                                    <img
                                        src="static/img/portfolio/rtladconnect.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/rtladconnect"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/univers-immo">
                        <div className="grid-item freelance">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        UNVIVERS IMMO
                                    </h5>
                                    <span>HTML CSS</span>
                                </div>
                                <div
                                    className="portfolio-img"
                                    style={{ borderRadius: "25%" }}
                                >
                                    <img
                                        src="static/img/portfolio/universimmo.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/univers-immo"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/image-compressor">
                        <div className="grid-item epitech">
                            <div className="portfolio-box-01">
                                <div className="portfolio-info">
                                    <h5 className="white-color font-weight-bold">
                                        Image compressor
                                    </h5>
                                    <span>HASKELL</span>
                                </div>
                                <div
                                    className="portfolio-img"
                                    style={{ borderRadius: "25%" }}
                                >
                                    <img
                                        src="static/img/portfolio/imagecompressor.png"
                                        title=""
                                        alt=""
                                    />
                                    <div className="portfolio-icon">
                                        <a
                                            href="/image-compressor"
                                            className="gallery-link"
                                        >
                                            <span className="ti-plus" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Portfolio;
