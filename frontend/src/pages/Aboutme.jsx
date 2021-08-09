import React from "react";
import Redes from '../components/Redes';
import WebIMG from '../assets/img/webDevelopment.png';

const Aboutme = () => (
    <section className="aboutme wh-max d-flex item-center j-between">
        <div className="aboutme-container aboutme-slider">
            <img src={WebIMG} alt="" />
        </div>
        <div className="aboutme-container aboutme-info">
            <h2>About me</h2>
            <p>
                I consider myself a self-taught and responsible person, <br /> from the
                age of 16 I began to learn to program in js, from <br /> there I
                increased my skills learning non-relational database <br /> management,
                REST API creation. In addition to learning topics <br /> and the
                management of design software such as Photoshop, <br /> Ilustraitor,
                Affter Effects etc ... <br /> <br /> I also know how to work as a team,
                learning from others and <br /> never settle for what I already know.
            </p>
        </div>
        <Redes />
    </section>
);

export default Aboutme;
