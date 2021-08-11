import React from "react";
import LoadSkill from "../components/LoadSkill";
import Redes from "../components/Redes";

const Skills = () => (
    <section>
        <div className="skills d-flex item-center column wh-max">
            <h2>SKILLS</h2>
            <div className="d-flex items-center j-center skills-container">
                <div className="skills-web">
                    <h3>Web development</h3>
                    <div className="d-flex column">
                        <LoadSkill html="html"/>
                        <LoadSkill css="css"/>
                        <LoadSkill js="js"/>
                        <LoadSkill graphql="graphql"/>
                    </div>
                </div>
                <div className="skills-design">
                    <h3>Design</h3>
                    <div className="d-flex column">
                        <LoadSkill />
                        <LoadSkill />
                    </div>
                </div>
            </div>
            <div className="skills-software">
                <h3>Software development</h3>
                <div className="d-flex column">
                        <LoadSkill/>
                        <LoadSkill/>
                        <LoadSkill/>
                        <LoadSkill/>
                    </div>
            </div>
        </div>
        <Redes />
    </section>
);

export default Skills;
