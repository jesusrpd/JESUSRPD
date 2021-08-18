import React from "react";
import WebIMG from "../assets/img/webDevelopment.png";
import DesingIMG from "../assets/img/webDesing.png";
import Redes from "../components/Redes";
import { Helmet } from "react-helmet";
import Nav from '../components/Nav';
import {PATH_WEB, PATH_DESIGN} from '../routes/paths.routes';
import {Link} from 'react-router-dom';

const Briefcase = () => (
    <section>
        <Helmet>
            <title>Jesus Rodrigo | Briefcase</title>
        </Helmet>
        <Nav/>  
        <div className="briefcase wh-max">
            <h2>BRIEFCASE</h2>
            <div className="briefcase-container d-flex j-around">
                <Link to={PATH_WEB} className="briefcase-web">
                    <h3 className="briefcase-sub">Web Development</h3>
                    <img src={WebIMG} alt="Portada de desarrollo web" />
                </Link>
                <Link to={PATH_DESIGN} className="briefcase-desing">
                    <h3 className="briefcase-sub">Desing</h3>
                    <img src={DesingIMG} alt="Portada de diseño" />
                </Link>
            </div>
        </div>
        <Redes />
    </section>
);

export default Briefcase;
