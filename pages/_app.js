import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";
import App from "./indexbackup"; // Importez le fichier Layout
import Layout from "../src/layout/Layout";

function MyApp({ Component, pageProps }) {
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 1000);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Samuel Shemtov Portfolio</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/favicon.ico"
                />
            </Head>
            {load && <PreLoader />}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Fragment>
    );
}

export default MyApp;
