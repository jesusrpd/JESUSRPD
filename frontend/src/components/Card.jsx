import React from "react";
import portIMG from "../assets/img/port.png";
import HtmlIcon from '../assets/SVG/html.svg';
import CssIcon from '../assets/SVG/css.svg';
import JsIcon from '../assets/SVG/js.svg';

const Card = () => (
    <div className="briefcase-card d-flex item-center">
        <div className="">
            <img src={portIMG} alt="" />
        </div>
        <div className="briefcase-card-info">
            <h3>JARED´S</h3>
            <p>
                Jared's landscape es una página sobre un negocio de jardíneria
                donde se muestran sus principales servicios y trabajos ya
                realizados con varios clientes.
            </p>
            <div className="d-flex item-center briefcase-tec">
                <a href="#" className="briefcase-card-btn btn-white">
                    Visitar
                </a>
                <div className="briefcase-tecnologias">
                    <h4>Tecnologías usadas:</h4>
                    <div className="d-flex item-center j-center">
                        <HtmlIcon className="briefcase-tecnologias-icon" />
                        <CssIcon className="briefcase-tecnologias-icon" />
                        <JsIcon className="briefcase-tecnologias-icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Card;
