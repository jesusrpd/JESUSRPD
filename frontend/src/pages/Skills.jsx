import React from "react";
import LoadSkill from "../components/LoadSkill";
import Redes from "../components/Redes";

const Skills = () => (
    <section>
        <div className="skills d-flex item-center column wh-max">
            <h2>SKILLS</h2>
            <div className="skills-container d-flex j-around wh-max">
                <div>
                    <div>
                        <h3>Web Development</h3>
                        <LoadSkill />
                        
                    </div>
                    <div>
                        <h3>Software Desing</h3>
                    </div>
                </div>
                <div>
                    <h3>Software Development</h3>
                </div>
            </div>
        </div>
        <Redes />
    </section>
);

export default Skills;
