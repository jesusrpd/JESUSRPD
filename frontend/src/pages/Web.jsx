import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import Redes from "../components/Redes";
import Card from "../components/Card";

const Web = () => (
    <div>
        <Helmet>
            <title>Jesus Rodrigo | Briefcase - Web</title>
        </Helmet>
        <Nav />
        <div className="briefcase wh-max d-flex column">
            <h2>Web development</h2>
            <div className="briefcase-container-card item-center d-flex">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        <Redes />
    </div>
);

export default Web;
