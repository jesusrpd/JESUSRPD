import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import Redes from "../components/Redes";
import portIMG from '../assets/img/port.png';

const Web = () => (
    <div>
        <Helmet>
            <title>Jesus Rodrigo | Briefcase - Web</title>
        </Helmet>
        <Nav />
        <div className="briefcase wh-max d-flex column">
            <h2>Web development</h2>
            <div className="briefcase-container-card item-center f-flex">
                <div className="briefcase-card d-flex item-center">
                    <div>
                        <img src={portIMG} alt="" />
                    </div>
                    <div>
                        <h3>Titulo del proyecto</h3>
                        <p>Descripción del proyecto</p>
                        <div className="d-flex item-center">
                            <button>Visitar</button>
                            <div>
                                <h4>Tecnologías usadas:</h4>
                                <div className="d-flex">
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Redes />
    </div>
);

export default Web;
