import React from "react";
import { Helmet } from "react-helmet";
import Redes from "../components/Redes";
import Nav from '../components/Nav';
import SkillsWeb from "../components/SkillsLenguagues";

const Skills = () => {
    const lenguagues = [
        {
            lenguague: "HTML5",
            port: 100,
            leftColor: "#F57A44",
            rightColor: "#FE5858",
            clases: "load load-html",
        },
        {
            lenguague: "CSS3",
            port: 90,
            leftColor: "#7ED1F1",
            rightColor: "#5895FE",
            clases: "load load-css",
        },
        {
            lenguague: "JS",
            port: 90,
            leftColor: "#F1E67E",
            rightColor: "#FFB300",
            clases: "load load-js",
        },
        {
            lenguague: "REACT JS",
            port: 80,
            leftColor: "#7EF1D2",
            rightColor: "#1C5EF8",
            clases: "load load-reactjs",
        },
        {
            lenguague: "GRAPH QL",
            port: 50,
            leftColor: "#F4A7F9",
            rightColor: "#D51CF8",
            clases: "load load-graphql",
        },
    ];

    const designs = [
        {
            lenguague: "ADOBE ILUSTRITOR",
            port: 100,
            leftColor: "#F6B969",
            rightColor: "#EB2B2B",
            clases: "load load-ilustraitor",
        },
        {
            lenguague: "ADOBE PHOTOSHOP",
            port: 60,
            leftColor: "#61B0CE",
            rightColor: "#2976F9",
            clases: "load load-PHOTOSHOP",
        },
        {
            lenguague: "ADOBE PREMIERE",
            port: 40,
            leftColor: "#7E86F1",
            rightColor: "#0055FF",
            clases: "load load-premiere",
        },
        {
            lenguague: "AFFTER EFFECTS",
            port: 40,
            leftColor: "#8C7EF1",
            rightColor: "#3C04F8",
            clases: "load load-ilustraitor",
        },
        {
            lenguague: "ADOBE XD",
            port: 90,
            leftColor: "#C57AC9",
            rightColor: "#9B03B8",
            clases: "load load-xd",
        },
    ];

    const softwares = [
        {
            lenguague: "PYTHON",
            port: 80,
            leftColor: "#ECD92B",
            rightColor: "#3D90EF",
            clases: "load load-python",
        },
        {
            lenguague: "VISUAL BASIC",
            port: 50,
            leftColor: "#85EC2B",
            rightColor: "#06CE3B",
            clases: "load load-visual",
        },
    ];

    return (
        <section>
            <Nav/>
            <Helmet>
                <title>Jesus Rodrigo | Skills</title>
            </Helmet>
            <div className="skills d-flex item-center column wh-max">
                <h2>SKILLS</h2>
                <div className="d-flex items-center j-center skills-container">
                    <div className="skills-web">
                        <h3>Web development</h3>
                        <div className="d-flex column">
                            <SkillsWeb lenguagues={lenguagues}/>
                        </div>
                    </div>
                    <div className="skills-design">
                        <h3>Design</h3>
                        <div className="d-flex column">
                            <SkillsWeb lenguagues={designs}/>
                        </div>
                    </div>
                </div>
                <div className="skills-software">
                    <h3>Software development</h3>
                    <div className="d-flex column">
                        <SkillsWeb lenguagues={softwares}/>
                    </div>
                </div>
            </div>
            <Redes />
        </section>
    );
};

export default Skills;
