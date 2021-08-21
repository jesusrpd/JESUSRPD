import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import Redes from "../components/Redes";
import Card from "../components/Card";
import HtmlIcon from "../assets/SVG/html.svg";
import CssIcon from "../assets/SVG/css.svg";
import JsIcon from "../assets/SVG/js.svg";
import portIMG from "../assets/img/port.png";
import shopImg from '../assets/img/shop.png';
import lachImg from '../assets/img/lach.png';

const Web = () => {
    const cards = [
        {
            id: 0,
            title: "JARED´S",
            description:
                "JARED'S Landscape es una página sobre un negocio de jardinería donde se muestran sus principales servicios y trabajos ya realizados con varios clientes.",
            portImg: portIMG,
            background: "#084c27",
            color: "#ffff",
            icons: [HtmlIcon, CssIcon, JsIcon],
        },
        {
            id: 1,
            title: "SHOP WEB",
            description:
                "Shop Web es un tienda en linea, que contiene 3 departamentos, carros, ropa y tecnología. Esta tienda es ficticia y fue creada con el fin de aprender nuevas técnicas de  desarrollo web.",
            portImg: shopImg,
            background: "#2E1C4E",
            color: "#ffff",
            icons: [HtmlIcon, CssIcon, JsIcon],
        },
        {
            id: 2,
            title: "LACH FILM´S",
            description:
                "Lach Films es una casa productora audiovisual, este sitio muestra los trabajosrealizados por dicha empresa además de poder contratar sus servicios y poder descargar las img de alta resolución en el sitio web.",
            portImg: lachImg,
            background: "#3D3D3D",
            color: "#ffff",
            icons: [HtmlIcon, CssIcon, JsIcon],
        },
    ];

    return (
        <div>
            <Helmet>
                <title>Jesus Rodrigo | Briefcase - Web</title>
            </Helmet>
            <Nav />
            <div className="briefcase wh-max d-flex column">
                <h2>Web development</h2>
                <div className="briefcase-container-card item-center d-flex">
                    {cards.map((card) => (
                        <Card key={card.id} items={card}/>
                    ))}
                </div>
            </div>
            <Redes />
        </div>
    );
};

export default Web;
