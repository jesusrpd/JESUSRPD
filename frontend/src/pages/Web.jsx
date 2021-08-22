import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import Redes from "../components/Redes";
import Card from "../components/Card";
import useSkill from '../hooks/useSkills';
import {PATH_API} from '../routes/paths.routes';

const Web = () => {

    const {skill} = useSkill(`${PATH_API}/briefcase/web`);

    return (
        <div>
            <Helmet>
                <title>Jesus Rodrigo | Briefcase - Web</title>
            </Helmet>
            <Nav />
            <div className="briefcase wh-max d-flex column">
                <h2>Web development</h2>
                <div className="briefcase-container-card item-center d-flex">
                    {skill.map((card, index) => (
                        <Card key={index} items={card}/>
                    ))}
                </div>
            </div>
            <Redes />
        </div>
    );
};

export default Web;
