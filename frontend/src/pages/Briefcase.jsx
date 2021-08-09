import React from "react";
import WebIMG from "../assets/img/webDevelopment.png";
import DesingIMG from "../assets/img/webDesing.png";
import Redes from "../components/Redes";

const Briefcase = () => (
    <section>
        <div className="briefcase wh-max">
            <h2>BRIEFCASE</h2>
            <div className="briefcase-container d-flex j-around">
                <div className="briefcase-web">
                    <h3 className="briefcase-sub">Web Development</h3>
                    <img src={WebIMG} alt="Portada de desarrollo web" />
                </div>
                <div className="briefcase-desing">
                    <h3 className="briefcase-sub">Desing</h3>
                    <img src={DesingIMG} alt="Portada de diseno" />
                </div>
            </div>
        </div>
        <Redes />
    </section>
);

export default Briefcase;
