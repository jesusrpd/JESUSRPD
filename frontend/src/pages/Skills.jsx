import React from "react";
import { Helmet } from "react-helmet";
import Redes from "../components/Redes";
import Nav from "../components/Nav";
import SkillsWeb from "../components/SkillsLenguagues";
import SkillSoftware from "../components/SkillSoftware";
import SkillDesign from "../components/SkillDesign";

const Skills = () => {

    return (
        <section>
            <Nav />
            <Helmet>
                <title>Jesus Rodrigo | Skills</title>
            </Helmet>
            <div className="skills d-flex item-center column wh-max">
                <h2>SKILLS</h2>
                <div className="d-flex items-center j-center skills-container">
                    <SkillsWeb/>
                    <SkillDesign/>
                </div>
                <SkillSoftware/>
            </div>
            <Redes />
        </section>
    );
};

export default Skills;
