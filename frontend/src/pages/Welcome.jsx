import React from "react";
import PerfilIMG from "../assets/img/perfil.png";
import Redes from "../components/Redes";
import { Helmet } from "react-helmet";
import CV from '../assets/cv.pdf';
import Nav from '../components/Nav';

const Welcome = () => (
    <header>
        <Nav/>
        <Helmet>
            <meta charset="utf-8" />
            <title>Jesus Rodrigo</title>
        </Helmet>

        <main className="welcome d-flex item-center j-around wh-max">
            <div className="welcome-info">
                <h1>
                    Jesús Rodrigo <br /> Pérez Delgado
                </h1>
                <p>
                    Development and desing <br /> web fullstack, 18 years.{" "}
                    <br />
                    México, CDMX.
                </p>
                <a
                    href={CV}
                    download="CV_Jesus"
                    className="btn-blue-gradient">
                    Download CV
                </a>
            </div>
            <div>
                <img
                    className="welcome-img"
                    src={PerfilIMG}
                    alt="Photo from perfil"
                />
            </div>
        </main>
        <Redes />
    </header>
);

export default Welcome;
