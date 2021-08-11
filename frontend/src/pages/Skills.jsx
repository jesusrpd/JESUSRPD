import React from "react";
import LoadSkill from "../components/LoadSkill";
import Redes from "../components/Redes";

const Skills = () => {
    const lenguagues = [
        {
            lenguague: "HTML5",
            port: 100,
            leftColor: "#F57A44",
            rightColor: "#FE5858",
        },
        {
            lenguague: "CSS3",
            port: 90,
            leftColor: "#7ED1F1",
            rightColor: "#5895FE",
        },
        {
            lenguague: "JS",
            port: 90,
            leftColor: "#F1E67E",
            rightColor: "#FFB300",
        },
        {
            lenguague: "REACT JS",
            port: 80,
            leftColor: "#7EF1D2",
            rightColor: "#1C5EF8",
        },
        {
            lenguague: "GRAPH QL",
            port: 50,
            leftColor: "#F4A7F9",
            rightColor: "#D51CF8",
        },
    ];

    return (
        <section>
            <div className="skills d-flex item-center column wh-max">
                <h2>SKILLS</h2>
                <div className="d-flex items-center j-center skills-container">
                    <div className="skills-web">
                        <h3>Web development</h3>
                        <div className="d-flex column">
                            {lenguagues.map((lenguague) => (
                                <LoadSkill
                                    key={lenguague.lenguague}
                                    leng={lenguague.lenguague}
                                    port={lenguague.port}
                                    leftColor={lenguague.leftColor}
                                    rightColor={lenguague.rightColor}
                                />
                            ))}
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
                        <LoadSkill />
                        <LoadSkill />
                        <LoadSkill />
                        <LoadSkill />
                    </div>
                </div>
            </div>
            <Redes />
        </section>
    );
};

export default Skills;
