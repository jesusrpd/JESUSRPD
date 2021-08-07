import React from "react";
import PerfilIMG from "../assets/img/perfil.png";

const Welcome = () => (
    <header>
        <main className="welcome">
            <div className="welcome-info">
                <h1>Jesús Rodrigo <br /> Pérez Delgado</h1>
                <p>
                    Development and desing <br /> web fullstack, 18 years. <br />
                    México, CDMX.
                </p>
                <a href="../assets/cv.pdf" download="CV_Jesus" className="btn-blue-gradient">Download CV</a>
            </div>
            <div>
                <img className="welcome-img" src={PerfilIMG} alt="Photo from perfil" />
            </div>
        </main>
    </header>
);

export default Welcome;
