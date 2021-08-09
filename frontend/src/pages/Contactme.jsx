import React from "react";
import Redes from "../components/Redes";

const Contactme = () => (
    <div className="contactme d-flex j-around item-center wh-max">
        <div className="contactme-fomr">
            <div className="contactme-label d-flex column j-start">
                <label htmlFor="">Name:</label>
                <input type="text" />
            </div>
            <div className="contactme-label d-flex column j-start">
                <label htmlFor="">Phone:</label>
                <input type="phone" />
            </div>
            <div className="contactme-label d-flex column j-start">
                <label htmlFor="">Comment:</label>
                <input type="text" />
            </div>
            <button className="btn-blue-gradient">Contact me</button>
        </div>
        <div className="contactme-info">
            <h2>Contact me</h2>
            <p>
                If you want me to design and develop your website, <br /> leave me your
                information in the form or you can contact <br /> me through my social
                networks.
            </p>
            <Redes flex={"flex"}/>
        </div>
    </div>
);

export default Contactme;
