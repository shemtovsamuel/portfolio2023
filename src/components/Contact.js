import emailjs from "emailjs-com";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";
import { translations } from "./translationsData";
import { useContext } from "react";

import { useState } from "react";
const Contact = () => {
    const { night } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const [mailData, setMailData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const { name, email, message, subject } = mailData;
    const [error, setError] = useState(null);
    const onChange = (e) =>
        setMailData({ ...mailData, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (
            name.length === 0 ||
            email.length === 0 ||
            message.length === 0 ||
            subject.length === 0
        ) {
            setError(true);
            clearError();
        } else {
            emailjs
                .sendForm(
                    "service_uld9ylb", // service id
                    // "template_vnxpr47", // template id
                    "template_vyck1ue", // template id
                    e.target, // this is the form element
                    "n5PFlBN7YB4nXJbqw" // user id
                )
                .then(
                    (response) => {
                        setError(false);
                        clearError();
                        setMailData({
                            name: "",
                            email: "",
                            message: "",
                            subject: "",
                        });
                    },
                    (err) => {
                        console.log(err.text);
                    }
                );
        }
    };

    const clearError = () => {
        setTimeout(() => {
            setError(null);
        }, 2000);
    };
    return (
        <section
            id="contactus"
            data-nav-tooltip="Contact Me"
            className="pp-section pp-scrollable section dark-bg"
        >
            <div className="container">
                <div className="title">
                    <h3>Contact</h3>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-xl-4 m-15px-tb">
                        <div className="contact-info">
                            <h4>{translations[language].contactTitle}</h4>
                            <p>{translations[language].contactSubTitle}</p>
                            <ul>
                                <li className="media">
                                    <i className="ti-map" />
                                    <span className="media-body">
                                        Paris, France
                                    </span>
                                </li>
                                <li className="media">
                                    <i className="ti-email" />
                                    <span className="media-body">
                                        shemtovsamuel@gmail.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-8 m-15px-tb">
                        <div className="contact-form">
                            <h4>{translations[language].contactWrite}</h4>
                            <form
                                id="contact-form"
                                onSubmit={(e) => onSubmit(e)}
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="name"
                                                onChange={(e) => onChange(e)}
                                                value={name}
                                                id="name"
                                                placeholder={
                                                    translations[language]
                                                        .contactName
                                                }
                                                className={`form-control ${
                                                    error
                                                        ? !name
                                                            ? "invalid"
                                                            : ""
                                                        : ""
                                                }`}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                name="email"
                                                onChange={(e) => onChange(e)}
                                                value={email}
                                                id="email"
                                                placeholder="Email"
                                                className={`form-control ${
                                                    error
                                                        ? !email
                                                            ? "invalid"
                                                            : ""
                                                        : ""
                                                }`}
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                name="subject"
                                                onChange={(e) => onChange(e)}
                                                value={subject}
                                                id="subject"
                                                placeholder={
                                                    translations[language]
                                                        .contactSubject
                                                }
                                                className={`form-control ${
                                                    error
                                                        ? !subject
                                                            ? "invalid"
                                                            : ""
                                                        : ""
                                                }`}
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                onChange={(e) => onChange(e)}
                                                value={message}
                                                id="message"
                                                placeholder={
                                                    translations[language]
                                                        .contactContent
                                                }
                                                rows={5}
                                                className={`form-control ${
                                                    error
                                                        ? !message
                                                            ? "invalid"
                                                            : ""
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <input
                                                className="px-btn px-btn-theme"
                                                type="submit"
                                                value={
                                                    translations[language]
                                                        .contactSend
                                                }
                                            />
                                        </div>
                                        <span
                                            id="suce_message"
                                            className="text-success"
                                            style={{
                                                display:
                                                    error !== null
                                                        ? !error
                                                            ? "block"
                                                            : "none"
                                                        : "none",
                                            }}
                                        >
                                            Message Sent Successfully
                                        </span>
                                        <span
                                            id="err_message"
                                            className="text-danger"
                                            style={{ display: "none" }}
                                        >
                                            Message Sending Failed
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="google-map">
                            <div className="embed-responsive embed-responsive-21by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95428109595!2d2.276824107117771!3d48.85883353552598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1678837132548!5m2!1sfr!2sfr"
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
